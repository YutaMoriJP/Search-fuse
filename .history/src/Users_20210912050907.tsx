import { useEffect, useState } from "react";
import Data from "./Data";
import Form from "./Form";
import axios from "axios";

export interface Res {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

type State = { data: Res[]; loaded: true } | { data: []; loaded: false };

const Users = (): JSX.Element => {
  const [{ data, loaded }, setData] = useState<State>({
    data: [],
    loaded: false,
  });
  useEffect((): void => {
    //testing lazily importing modules
    const fetchModule = async (): Promise<void> => {
      //using dynamic module does not make sense here but just playing around with it
      //lazily import fetchData module
      const fetchData = (await import("./data/names")).default;
      //exports promise value so wait until it resolves
      const { data }: { data: Res[] } = await fetchData();
      console.log(data);
      setData({ data, loaded: true });
    };
    //fetch data from serverless function
    const fetchData = async (): Promise<void> => {
      const { data } = await axios("/.netlify/functions/api");
      const { users }: { users: Res[] } = data;
      console.log("users", users);
    };
    fetchModule();
    fetchData();
  }, []);
  return (
    <>
      <Data names={data} loaded={loaded} />
      <Form users={data} loaded={loaded} />
    </>
  );
};
export default Users;
