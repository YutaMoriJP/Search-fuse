import Link from "./styles/Link";
import Right from "./styles/Right";
import { FaGithub } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import styled from "styled-components";
import useToggle from "./useHooks/useToggle";
import { useEffect, useRef } from "react";

const API = styled(AiFillApi)``;

const Source = (): JSX.Element => {
  const { open, onOpen, onClose } = useToggle();
  const timerRef = useRef<NodeJS.Timeout>(null!);
  useEffect(() => {
    if (!open) return;
    timerRef.current = setTimeout(() => {
      onClose();
    }, 500);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [open, onClose, onOpen]);
  return (
    <Right>
      <Link
        href="https://dummyapi.io/docs/user"
        target="_blank"
        rel="noreferrer"
      >
        <API onMouseOver={onOpen} onMouseOut={onClose} />
      </Link>
      {!open && <p></p>}
      {open && <p>API</p>}
      <Link>
        <FaGithub />
      </Link>
    </Right>
  );
};

export default Source;
