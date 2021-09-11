import { useEffect, useState } from "react";
import Data from "./Data";
import Form from "./Form";

export interface Res {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

type State = { data: Res[]; loaded: true } | { data: []; loaded: false };

const Users = () => {
  const [{ data, loaded }, setData] = useState<State>({
    data: [],
    loaded: false,
  });
  useEffect(() => {
    const fetchModule = async (): Promise<void> => {
      //playing around dynamic module imports
      //lazily import module
      const fetchData = (await import("./data/names")).default;
      //exports promise value so wait until it resolves
      const { data }: { data: Res[] } = await fetchData();
      setData({ data, loaded: true });
    };
    fetchModule();
  }, []);
  return (
    <>
      <Data names={data} loaded={loaded} />
      <Form users={data} loaded={loaded} />
    </>
  );
};
export default Users;
