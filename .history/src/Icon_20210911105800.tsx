import React, { useEffect, useRef } from "react";
import useToggle from "./useHooks/useToggle";

const Icon = () => {
  const { open, onOpen, onClose } = useToggle();
  const { open: toggled, toggle } = useToggle();

  const timerRef = useRef<NodeJS.Timeout>(null!);

  const trigger = () => {
    toggle();
  };
  return <span></span>;
};

export default Icon;
