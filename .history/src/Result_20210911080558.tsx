import { Res } from "./Users";
import Fuse from "fuse.js";

interface ResultProps {
  result: Fuse.FuseResult<Res> | undefined;
}
//<Result /> renders search result found with fuse.js

const Result = ({ result }: ResultProps): JSX.Element => {
  if (!result) return <p>No User is found...</p>;
  return (
    <>
      <p>
        {result.item.title.toUpperCase()}. {result.item.firstName}{" "}
        {result.item.lastName}
      </p>
      <img
        src={result.item.picture}
        alt={`${result.item.title}. ${result.item.firstName} ${result.item.lastName}`}
      />
    </>
  );
};

export default Result;
