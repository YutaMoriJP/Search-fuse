import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: ${(props: {
    direction: string;
    isShadow: boolean;
    color: string;
  }) => props.direction || "row"};
  margin: 10px;
`;

export default Article;
