import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";

const A = styled.a`
  padding: 10px;
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const Source = (): JSX.Element => {
  return (
    <Right>
      <A href="https://dummyapi.io/docs/user" target="_blank" rel="noreferrer">
        <span className="tooltiptext">Tooltip text</span>
        <AiFillApi></AiFillApi>
      </A>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
