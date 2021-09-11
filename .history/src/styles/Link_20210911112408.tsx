import styled from "styled-components";
import { IconWrapper } from "../Source";

const Link = styled.a`
  text-decoration: 0;
  color: ${props => props.color || "white"};

  ${IconWrapper} & {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;

    .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      top: -5px;
      right: 110%;
    }

    .tooltiptext::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent black;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
  }
`;

export default Link;
