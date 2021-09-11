import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { IconWrapper } from "./styles/IconWrapper";
import IconComponent from "./Icon";

const Source = (): JSX.Element => {
  return (
    <Right>
      <IconComponent icon={AiFillApi} txt="API Source" />
      <IconWrapper>
        <Link
          href="https://dummyapi.io/docs/user"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tooltiptext">API Source</span>
          <AiFillApi></AiFillApi>
        </Link>
      </IconWrapper>
      <IconWrapper>
        <Link
          href="https://dummyapi.io/docs/user"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tooltiptext">Github</span>
          <FaGithub />
        </Link>
      </IconWrapper>
    </Right>
  );
};

export default Source;
