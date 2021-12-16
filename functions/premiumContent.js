exports.handler = async (event, context) => {
  console.log("getting premium content...");

  const data = {
    cool: "yeah",
    awesome: "sweet",
    hey: 38,
  };

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ msg: "You need to login to do that." }),
  };
};
