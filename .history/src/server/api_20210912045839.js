const axios = require("axios");

const fetchUsers = async () => {
  const { data } = await axios("https://dummyapi.io/data/v1/user", {
    method: "GET",
    headers: { "Content-Type": "613c873a7bb517c5a8a07a0e" },
  });
  return data;
};

exports.handler = async (event, context) => {
  try {
    const data = await fetchUsers();
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "connected...", data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
