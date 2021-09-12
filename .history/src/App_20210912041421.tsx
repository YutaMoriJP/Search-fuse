import { useEffect } from "react";
import Source from "./Source";
import "./styles.css";
import Users from "./Users";

export default function App(): JSX.Element {
  useEffect(() => {
    fetch("/.netlify/functions/api").then(res => {
      console.log(res);
      alert(JS);
    });
  }, []);
  return (
    <>
      <Source />
      <Users />
    </>
  );
}
