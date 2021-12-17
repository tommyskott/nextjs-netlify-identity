exports.handler = async (event, context) => {
  console.log("getting premium content...");

  const data = [
    {
      title: "Dribbble",
      body: "Donec id elit non mi porta gravida at eget.",
      link: "https://dribbble.com/",
    },
    {
      title: "Github",
      body: "Duis mollis, est non commodo luctus, nisi erat.",
      link: "https://github.com/",
    },
    {
      title: "Behance",
      body: "Nullam id dolor id nibh ultricies ut id elit.",
      link: "https://www.behance.net/",
    },
    {
      title: "Unsplash",
      body: "Sed posuere consectetur est at lobortis.",
      link: "https://unsplash.com/",
    },
  ];

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
