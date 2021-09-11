import styled from "styled-components";
import { skelton } from "./tokens/colors";

export const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  > * {
    margin: 5px;
  }
`;

const Title = styled.div`
  text-align: center;
  height: 3rem;
  width: 10rem;
  background: grey;
  padding: 5px 10px;
  background: ${skelton.background};
  opacity: ${skelton.opacity};
  box-shadow: 2px 2px 20px black;
  border-radius: 5px;
  animation: skelton-loading 1s linear infinite alternate;

  @keyframes skelton-loading {
    0% {
      background: hsl(200, 20%, 70%);
    }
    100% {
      background: hsl(200, 20%, 95%);
    }
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 400px;
  width: 90%;
  padding: 0;
`;

const Item = styled.div`
  margin: 5px;
  width: 4rem;
  height: 1.5rem;
  border-radius: 5px;
  background: ${skelton.background};
  opacity: ${skelton.opacity};
  z-index: 1000;
  box-shadow: 2px 2px 20px black;
  animation: skelton-loading 1s linear infinite alternate;

  @keyframes skelton-loading {
    0% {
      background: hsl(200, 20%, 70%);
    }
    100% {
      background: hsl(200, 20%, 95%);
    }
  }
`;

const data = Array.from({ length: 15 }, (_, index) => ({ id: index }));

const DataSketon = () => {
  return (
    <Article>
      <Title />
      <ItemContainer>
        {data.map(({ id }) => (
          <Item key={id} />
        ))}
      </ItemContainer>
    </Article>
  );
};

export default DataSketon;
