import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

const API = styled(AiFillApi)``;

const Source = (): JSX.Element => {
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillApi />
      </Link>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
