# Common AWS SAM Commands

## 1. Initialize a new SAM application

```bash
sam init
```

## 2. Build your SAM application

Build your application and dependencies locally.

```bash
sam build
```

## 3. Package your SAM application

Package your application to be deployed to AWS.

```bash
sam package --output-template-file packaged.yaml --s3-bucket <your-bucket-name>
```

## 4. Deploy your SAM application

Deploy your application to AWS.

```bash
sam deploy --template-file packaged.yaml --stack-name <your-stack-name> --capabilities CAPABILITY_IAM
```

## 5. Test your Lambda function locally

Invoke a Lambda function locally using an event.

```bash
sam local invoke <function-name> --event <event-file>.json
```

## 6. Start the API Gateway locally

Start the API Gateway locally for testing Lambda functions with HTTP events.

```bash
sam local start-api
```

## 7. Invoke a Lambda function locally with Docker

Invoke a Lambda function using Docker to simulate the Lambda environment.

```bash
sam local invoke <function-name> -e <event-file>.json
```

## 8. Run your tests locally in a container

Run your SAM application locally in a container for local development.

```bash
sam local start-lambda
```

## 9. Generate an AWS CloudFormation Change Set

Generate a change set for your stack before deploying.

```bash
sam deploy --guided
```

## 10. View Lambda function logs

View logs of your Lambda function using CloudWatch.

```bash
aws logs tail /aws/lambda/<your-function-name> --follow
```

## 11. Validate your SAM template

Validate the syntax and structure of your SAM template.

```bash
sam validate
```

## 12. Local DynamoDB

Run a local DynamoDB instance for testing purposes.

```bash
docker run -p 8000:8000 amazon/dynamodb-local
```

## 13. Set up environment variables for Lambda

Define environment variables for your Lambda functions in your `template.yaml` file.

```yaml
Environment:
  Variables:
    MY_ENV_VAR: "value"
```

## 14. Create a Lambda function using SAM

Define a new Lambda function in your `template.yaml` file.

```yaml
Resources:
  MyLambdaFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs14.x
      CodeUri: ./src
      MemorySize: 128
      Timeout: 3
```

## 15. Delete a SAM stack

Delete your stack from AWS.

```bash
aws cloudformation delete-stack --stack-name <your-stack-name>
```

## 16. Hot Reload: Automatically applies changes to your Lambda functions

```
sam sync --stack-name {{stack-name}} --watch
```

## 17. Invoke a Lambda Function Using the AWS CLI

```
aws lambda invoke \
  --function-name <function-name> \
  --payload file://event.json \
  --cli-binary-format raw-in-base64-out \
  response.json

```

Examples:

### No event data

```
aws lambda invoke --function-name typescript-api-project-ApiFunction-ouacI3GK8OnM response.json
```

### with event data

```
aws lambda invoke --function-name typescript-api-project-ApiFunction-ouacI3GK8OnM --payload file://event-get-all-items.json --cli-binary-format raw-in-base64-out response.json
```

## 18. List lambda functions

### List the names of all lambda functions

```
aws lambda list-functions --query "Functions[*].FunctionName" --output table
```

### List the names of the lambdas that start with typescript-api-project-Log

```
aws lambda list-functions \
  --query "Functions[?starts_with(FunctionName, 'typescript-api-project-Log')].FunctionName" \
  --output table
```
