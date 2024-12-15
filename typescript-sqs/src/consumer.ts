import { SQSEvent } from "aws-lambda";

export const handler = async (event: SQSEvent): Promise<void> => {
  console.log("Received SQS Event:", JSON.stringify(event, null, 2));

  for (const record of event.Records) {
    try {
      // Parse the SQS message body
      const message = JSON.parse(record.body);
      console.log("Processing message:", message);

      // Add your custom logic here
      // Example: Save to a database, trigger another Lambda, etc.
    } catch (error) {
      console.error("Error processing message:", record.body, error);
    }
  }
};
