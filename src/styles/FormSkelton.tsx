import styled from "styled-components";
import { Article } from "./DataSkelton";
import { skelton } from "./tokens/colors";

const Search = styled.div`
  background: ${skelton.background};
  opacity: ${skelton.opacity};
  box-shadow: 2px 2px 20px black;
  width: 10rem;
  height: 2rem;
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

const Input = styled.div`
  background: ${skelton.background};
  opacity: ${skelton.opacity};
  width: 18rem;
  height: 3rem;
  border-radius: 5px;
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

const FormSkelton = () => {
  return (
    <Article>
      <Search />
      <Input />
    </Article>
  );
};

export default FormSkelton;
