import { Res } from "./Users";
import Fuse from "fuse.js";

interface ResultProps {
  result: Fuse.FuseResult<Res> | undefined;
}

const Result = ({ result }: ResultProps) => {
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
