import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: ${(props: { direction: string }) => props.direction || "row"};
  margin: 5px;
`;

export default Article;
