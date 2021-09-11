import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";
import useToggle from "./useHooks/useToggle";
import { useEffect, useRef } from "react";

const API = styled(AiFillApi)`
  padding: 10px;
`;

const Source = (): JSX.Element => {
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        <API>
          <rect>
            <title>API</title>
          </rect>
        </API>
      </Link>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
