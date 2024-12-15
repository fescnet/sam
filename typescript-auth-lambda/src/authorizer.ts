// A simple request-based authorizer example to demonstrate how to use request
// parameters to allow or deny a request. In this example, a request is
// authorized if the client-supplied HeaderAuth1 header, QueryString1
// query parameter, and stage variable of StageVar1 all match
// specified values of 'headerValue1', 'queryValue1', and 'stageValue1',
// respectively.

export const handler = function (event: any, context: any, callback: any) {
  console.log("Received event:", JSON.stringify(event, null, 2));
  callback(null, generateAllow("me", event.methodArn));
  // callback("Unauthorized");
};

// Help function to generate an IAM policy
var generatePolicy = function (principalId: any, effect: any, resource: any) {
  // Required output:
  var authResponse: any = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    var policyDocument: any = {};
    policyDocument.Version = "2012-10-17"; // default version
    policyDocument.Statement = [];
    var statementOne: any = {};
    statementOne.Action = "execute-api:Invoke"; // default action
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  // Optional output with custom properties of the String, Number or Boolean type.
  authResponse.context = {
    stringKey: "stringval",
  };
  return authResponse;
};

var generateAllow = function (principalId: any, resource: any) {
  return generatePolicy(principalId, "Allow", resource);
};

var generateDeny = function (principalId: any, resource: any) {
  return generatePolicy(principalId, "Deny", resource);
};
