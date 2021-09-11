import styled, { css } from "styled-components";

const Box = styled.article`
  background-color: ${(props: {
    background: string;
    isShadow: boolean;
    color: string;
  }) => props.background || "#272727"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3b3b3b;
  padding: 10px;
  border-radius: 6px;
  ${({ isShadow = false }: { isShadow: boolean }) =>
    isShadow &&
    css`
      box-shadow: ${({ color = "black" }: { color: string }) =>
        `5px 5px 20px ${color}`};
    `}
`;

export default Box;
