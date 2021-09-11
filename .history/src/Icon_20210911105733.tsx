import React from "react";

const Icon = () => {
  const { open, onOpen, onClose } = useToggle();
  const { open: toggled, toggle } = useToggle();

  const timerRef = useRef<NodeJS.Timeout>(null!);
  useEffect(() => {
    if (!open) return;
    timerRef.current = setTimeout(() => {
      onClose();
    }, 200);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [toggled, onClose, onOpen]);

  const trigger = () => {
    toggle();
  };
  return <div></div>;
};

export default Icon;
