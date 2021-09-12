const axios = require("axios");

const fetchUsers = async () => {
  const { data } = await axios(process.env.API_URL_2, {
    headers: { "Content-Type": "application/json" },
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
