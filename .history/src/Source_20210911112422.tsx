import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";

export const IconWrapper = styled.section``;

const Source = (): JSX.Element => {
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        <span className="tooltiptext">Tooltip text</span>
        <AiFillApi></AiFillApi>
      </Link>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
