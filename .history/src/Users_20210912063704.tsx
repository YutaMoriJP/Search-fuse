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

type State =
  | { data: Res[]; loaded: true; status: "resolved"; error: null }
  | { data: []; loaded: false; status: "idle"; error: null }
  | { data: []; loaded: false; status: "rejected"; error: Error };

const Users = (): JSX.Element => {
  const [{ data, loaded, status, error }, setData] = useState<State>({
    data: [],
    loaded: false,
    status: "idle",
    error: null,
  });
  useEffect((): void => {
    //testing lazily importing modules
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchModule = async (): Promise<void> => {
      //using dynamic module does not make sense here but just playing around with it
      //lazily import fetchData module
      const fetchData = (await import("./data/names")).default;
      //exports promise value so wait until it resolves
      const { data }: { data: Res[] } = await fetchData();
      setData({ data, loaded: true, status: "resolved", error: null });
    };
    //fetchModule();

    //fetch data from serverless function, to avoid exposting app-id
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await axios("/api");
        const { users }: { users: Res[] } = data;
        setData({ data: users, loaded: true, status: "resolved", error: null });
      } catch (error) {
        setData({
          data: [],
          loaded: false,
          status: "rejected",
          error: error as Error,
        });
      }
    };
    fetchData();
  }, []);
  if (status === "rejected")
    return <p>{error!?.message || "something went wrong..."}</p>;
  return (
    <>
      <Data names={data} loaded={loaded} />
      <Form users={data} loaded={loaded} />
    </>
  );
};
export default Users;
