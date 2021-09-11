import Link from "./styles/Link";
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
        <span className="tooltiptext">{txt}</span>
        {Icon}
      </Link>
    </IconWrapper>
  );
};

export default IconComponent;
