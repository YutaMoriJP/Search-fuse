import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";

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
          <title>API</title>
        </API>
      </Link>

      <Link>
        <FaGithub />
      </Link>

      <div className="tooltip">
        Hover over me
        <span className="tooltiptext">Tooltip text</span>
      </div>
    </Right>
  );
};

export default Source;
