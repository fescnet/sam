import { SQS } from "aws-sdk";

const sqs = new SQS();

export const handler = async () => {
  const params: SQS.SendMessageRequest = {
    QueueUrl: process.env.QUEUE_URL as string, // Ensure `QUEUE_URL` is set in environment variables
    MessageBody: JSON.stringify({ key: "value" }), // Replace with your message content
  };

  try {
    const result = await sqs.sendMessage(params).promise();
    console.log("Message sent:", result.MessageId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message sent to SQS",
        messageId: result.MessageId,
      }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send message" }),
    };
  }
};
