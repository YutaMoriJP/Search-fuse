import styled, { css } from "styled-components";

const Box = styled.article`
  background-color: ${(props: {
    background: string = "#272727";
    isShadow: boolean;
    shadowColor: string;
  }) => props.background || "#272727"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;

  ${({ isShadow = false }: { isShadow: boolean }) =>
    isShadow &&
    css`
      box-shadow: ${({ shadowColor = "black" }: { shadowColor: string }) =>
        `5px 5px 20px ${shadowColor}`};
    `}

  > * {
    margin: 0 10px;
  }
`;

export default Box;
