import { Res } from "./Users";
import Fuse from "fuse.js";
import Box from "./styles/Box";

interface ResultProps {
  result: Fuse.FuseResult<Res> | undefined;
}
//<Result /> renders search result found with fuse.js

const Result = ({ result }: ResultProps): JSX.Element => {
  //result may point at undefined, if not user is found
  if (!result) return <p>No User is found...</p>;
  return (
    <Box background="#2a2a72    ">
      <p>
        {result.item.title.toUpperCase()}. {result.item.firstName}
        {result.item.lastName}
      </p>
      <img
        src={result.item.picture}
        alt={`${result.item.title}. ${result.item.firstName} ${result.item.lastName}`}
      />
    </Box>
  );
};

export default Result;
