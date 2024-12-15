import { SQS } from "aws-sdk";

const sqs = new SQS();

export const handler = async () => {
  console.log(`Main handler called`);
};
