const appID = process.env.REACT_APP_APP_ID as string;

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
  const res: Response = await fetch(request);
  console.log("fetching finished");
  const data = await res.json();
  return data;
};

export default fetchUsers;
