import { APIGatewayProxyHandler } from "aws-lambda";
import { logManager } from "./utils/LogManager";

export const handler: APIGatewayProxyHandler = async (event, context) => {
  const version = "v1.0.0";
  await logManager.writeLog(JSON.stringify({ hello: "moto" }));
  console.log("Called hello world lambda");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 2 }),
  };
};

export const readLogs: APIGatewayProxyHandler = async (event, context) => {
  const version = "v1.0.0";
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Log</title>
    </head>
    <body>
        <h1>Logs</h1>
        ${await logManager.readLogs()}
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html", // Set the Content-Type to text/html
    },
    body: htmlContent, // Include the HTML content in the body
  };
};
