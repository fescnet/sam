import * as AWS from "aws-sdk";

export class LogManager {
  private s3: AWS.S3;
  private bucketName: string | undefined;
  private logFileKey: string;

  constructor(bucketName: string | undefined, logFileKey: string) {
    this.s3 = new AWS.S3();
    this.bucketName = bucketName;
    this.logFileKey = logFileKey;
  }

  isBucketNameEmpty() {
    return this.bucketName === undefined;
  }

  // Write a log entry to the S3 file
  async writeLog(message: string): Promise<void> {
    if (this.isBucketNameEmpty()) {
      return;
    }

    const timestamp = new Date().toISOString();
    const logMessage = `<p>[${timestamp}] ${message}</p>\n`;

    try {
      // Check if the file exists in S3
      const currentLogs = await this.readLogs();

      // Append the new log to the existing logs
      const updatedLogs = currentLogs + logMessage;

      // Upload the updated logs to S3
      await this.s3
        .putObject({
          Bucket: this.bucketName!,
          Key: this.logFileKey,
          Body: updatedLogs,
          ContentType: "text/plain",
        })
        .promise();
    } catch (error) {
      console.error("Error writing log to S3:", error);
      throw new Error("Failed to write log to S3");
    }
  }

  // Read logs from the S3 file
  async readLogs(): Promise<string> {
    if (this.isBucketNameEmpty()) {
      return "bucket name is empty";
    }

    try {
      const result = await this.s3
        .getObject({
          Bucket: this.bucketName!,
          Key: this.logFileKey,
        })
        .promise();

      return result.Body ? result.Body.toString("utf-8") : "";
    } catch (error: any) {
      if (error.code === "NoSuchKey") {
        // Return an empty string if the file does not exist
        return "";
      }
      console.error("Error reading logs from S3:", error);
      throw new Error("Failed to read logs from S3");
    }
  }

  // Delete the S3 log file
  async deleteLogs(): Promise<void> {
    if (this.isBucketNameEmpty()) {
      return;
    }

    try {
      await this.s3
        .deleteObject({
          Bucket: this.bucketName!,
          Key: this.logFileKey,
        })
        .promise();
    } catch (error) {
      console.error("Error deleting logs from S3:", error);
      throw new Error("Failed to delete logs from S3");
    }
  }
}

export const logManager = new LogManager(
  process.env.LOG_BUCKET_NAME,
  "log.txt"
);
