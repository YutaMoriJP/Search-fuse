import Link from "./styles/Link";
import Right from "./styles/Right";
import { IconName } from "react-icons/fa";

const Source = (): JSX.Element => {
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        API
      </Link>
    </Right>
  );
};

export default Source;
