import { Res } from "./Users";
import Fuse from "fuse.js";
import Box from "./styles/Box";
import { useState } from "react";

interface ResultProps {
  result: Fuse.FuseResult<Res> | undefined;
}
//<Result /> renders search result found with fuse.js

const Result = ({ result }: ResultProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
    setLoaded(true);
  };
  //result may point at undefined, if not user is found
  return (
    <Box background="#2a2a72" isShadow={true} shadowColor="#505050">
      {!result && <p>No User found...</p>}
      {result && (
        <>
          <p>
            {result.item.title.toUpperCase()}. {result.item.firstName}
            {result.item.lastName}
          </p>
          <img
            src={result.item.picture}
            alt={`${result.item.title}. ${result.item.firstName} ${result.item.lastName}`}
            onLoad={handleLoad}
          />
        </>
      )}
    </Box>
  );
};

export default Result;
