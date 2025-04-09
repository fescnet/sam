import { APIGatewayProxyHandler } from "aws-lambda";
import createAPI, { NextFunction, Request, Response } from "lambda-api";
import { APIGatewayEvent, Context } from "aws-lambda";

const api = createAPI();

// Route: Just a simple test
api.get("/sendStream", async (req: Request, res: Response) => {
  return res.status(200).json({ hello: "world" });
});

// Route: Set a cookie
api.get("/sendCookie", async (req: Request, res: Response) => {
  // Set a cookie via the Set-Cookie header
  res.header(
    "Set-Cookie",
    "myCookie=chocolate; Path=/; HttpOnly; SameSite=Lax"
  );
  return res.status(200).json({ message: "Cookie sent!" });
});

// Route: Read the cookie
api.get("/readCookie", async (req: Request, res: Response) => {
  // Retrieve the cookie from the request headers
  const cookieHeader = req.headers["cookie"];
  let cookieValue = "Not Found";

  if (cookieHeader) {
    const cookies = cookieHeader.split(";").map((cookie) => cookie.trim());
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "myCookie") {
        cookieValue = value;
        break;
      }
    }
  }

  return res.status(200).json({ message: "Cookie read!", value: cookieValue });
});

// Route: Read the cookie
api.get("/html", async (req: Request, res: Response) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Cookie Demo</title>
  </head>
  <body>
    <h1>Cookie Test</h1>
    <button onclick="sendCookie()">Send Cookie</button>
    <button onclick="readCookie()">Read Cookie</button>
    <pre id="output"></pre>

    <script>
      function sendCookie() {
        fetch("/Prod/sendCookie", { credentials: 'include' })
          .then(res => res.json())
          .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
          });
      }

      function readCookie() {
        fetch("/Prod/readCookie", { credentials: 'include' })
          .then(res => res.json())
          .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
          });
      }
    </script>
  </body>
  </html>
`;

  return res.status(200).html(htmlContent);
});

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  return await api.run(event, context);
};

export const receiveStream: APIGatewayProxyHandler = async (event, context) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cookie Demo</title>
    </head>
    <body>
      <h1>Cookie Test</h1>
      <button onclick="sendCookie()">Send Cookie</button>
      <button onclick="readCookie()">Read Cookie</button>
      <pre id="output"></pre>

      <script>
        function sendCookie() {
          fetch("/Prod/sendCookie", { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
              document.getElementById("output").textContent = JSON.stringify(data, null, 2);
            });
        }

        function readCookie() {
          fetch("/Prod/readCookie", { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
              document.getElementById("output").textContent = JSON.stringify(data, null, 2);
            });
        }
      </script>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: htmlContent,
  };
};
