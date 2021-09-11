import DataSkelton from "./styles/DataSkelton";

interface DataPropsSub {
  id: string;
  firstName: string;
}
interface DataProps<T> {
  names: T[];
  loaded: boolean;
}
const Data = <T extends DataPropsSub>({
  names,
  loaded,
}: DataProps<T>): JSX.Element => {
  return (
    <section className="blue">
      {!loaded && <DataSkelton />}
      {loaded && (
        <>
          <h1>USERS</h1>
          <ul>
            {names.map((name): JSX.Element => {
              return <li key={name.id}>{name.firstName}</li>;
            })}
          </ul>
        </>
      )}
      <div className="curve" />
    </section>
  );
};

export default Data;
