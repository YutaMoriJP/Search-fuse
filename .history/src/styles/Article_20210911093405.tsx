import styled, { css } from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: ${(props: {
    direction: string;
    isShadow: boolean;
    color: string;
  }) => props.direction || "row"};
  margin: 10px;
  ${({ isShadow = false }: { isShadow: boolean }) =>
    isShadow &&
    css`
      box-shadow: ${({ color = "black" }: { color: string }) =>
        `5px 5px 20px ${color}`};
    `}
`;

export default Article;
