import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { IconWrapper } from "./styles/IconWrapper";
const Source = (): JSX.Element => {
  return (
    <Right>
      <IconWrapper>
        <Link
          href="https://dummyapi.io/docs/user"
          target="_blank"
          rel="noreferrer"
        >
          <span className="tooltiptext">Tooltip text</span>
          <AiFillApi></AiFillApi>
        </Link>
      </IconWrapper>

      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
