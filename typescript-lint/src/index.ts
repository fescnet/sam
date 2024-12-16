export const handler = async () => {
  console.log(`Index handler called`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "working!" }),
  };
};
