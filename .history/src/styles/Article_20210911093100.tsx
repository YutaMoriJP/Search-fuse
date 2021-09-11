import styled, { css } from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: ${({ direction }: { direction: string }) => direction}
  margin: 10px;
  ${({ isShadow }: { isShadow: boolean }) =>
    isShadow &&
    css`
      box-shadow: ${({ color }) => `5px 5px 20px ${color}`};
    `}
`;

export default Article;
