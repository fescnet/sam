# sam

`sam build`

`sam deploy --guided`

`sam local invoke MyFunction --event event.json`

`sam local invoke MyFunction --env-vars env.json`

The env.json file contains key-value pairs:

```javascript
{
  "MyFunction": {
    "ENV_VAR1": "value1",
    "ENV_VAR2": "value2"
  }
}
```

```bash
aws lambda invoke \
    --function-name nodejs-api-project-getAllItemsFunction-ZBES3VXUGKI9 \
    --payload fileb://events/event-get-all-items.json \
    response.json
```

```
docker run -p 8000:8000 amazon/dynamodb-local
```

```
aws dynamodb create-table \
    --table-name SampleTable \
    --attribute-definitions AttributeName=id,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=2,WriteCapacityUnits=2 \
    --endpoint-url http://localhost:8000
```

```
const client = new DynamoDBClient({
    endpoint: "http://localhost:8000", // Add this line to connect to DynamoDB Local
});
```
