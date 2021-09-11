import React, { useEffect, useRef } from "react";
import useToggle from "./useHooks/useToggle";

const Icon = () => {
  const { open, onOpen, onClose } = useToggle();
  const { open: toggled, toggle } = useToggle();
  const timerRef = useRef<NodeJS.Timeout>(null!);

  const trigger = () => {
    toggle();
  };

  useEffect(() => {
    if (!open) return;
    timerRef.current = setTimeout(() => {
      onClose();
    }, 200);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [toggled, onClose, onOpen]);
  return <span></span>;
};

export default Icon;
