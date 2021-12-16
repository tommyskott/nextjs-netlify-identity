exports.handler = async () => {
  console.log("getting premium content...");

  const data = {
    cool: "yeah",
    awesome: "sweet",
    hey: 38,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
