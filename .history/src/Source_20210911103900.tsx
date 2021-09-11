import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";
import useToggle from "./useHooks/useToggle";

const API = styled(AiFillApi)``;

const Source = (): JSX.Element => {
  const { open, toggle } = useToggle();
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        <API />
      </Link>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
