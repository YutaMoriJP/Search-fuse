const axios = require("axios").default;

const fetchUsers = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users/1");
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