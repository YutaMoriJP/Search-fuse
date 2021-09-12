//data fetching should be done in the back end, as anything in the front end is visible
//when going to the network tab in the dev tool
const appID = process.env.APP_ID;

const headers = new Headers({
  "Content-Type": "application/json",
  "app-id": appID,
});

const request = new Request("https://dummyapi.io/data/v1/user", {
  method: "GET",
  headers,
});

//JUST FOR FUN. Playing around with dynamically importing modules
const fetchUsers = async () => {
  console.log("fetching starts");
  const res = await fetch(request);
  console.log("fetching finished");
  const data = await res.json();
  return data;
};

exports.handler = async () => {
  const data = await fetchUsers();
};
