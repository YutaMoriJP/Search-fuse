import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import IconComponent from "./Icon";

const Source = (): JSX.Element => {
  return (
    <Right>
      <IconComponent
        Icon={<AiFillApi />}
        txt="API Source"
        href="https://dummyapi.io/docs/user"
      />
      <IconComponent
        Icon={<FaGithub />}
        txt="GitHub"
        href="https://dummyapi.io/docs/user"
      />
    </Right>
  );
};

export default Source;
