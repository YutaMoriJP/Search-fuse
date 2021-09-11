import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { IconWrapper } from "./styles/IconWrapper";

interface IconComponentProps {
  txt: string;
  Icon: React.ReactNode;
}

const IconComponent = ({ txt, Icon }: IconComponentProps) => {
  return (
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
  );
};

export default Icon;
