import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const dogNames = ["Buddy", "Charlie", "Max", "Bella", "Luna", "Blume"];

  return {
    statusCode: 200,
    body: JSON.stringify(dogNames),
  };
};
