import { useEffect } from "react";
import useInput from "./useHooks/useInput";

interface InputProps {
  id: string;
  name: string;
  onSubmitted: boolean;
}

const Input = ({ id, name, onSubmitted }: InputProps): JSX.Element => {
  //reset function is memoized
  const [inputProps, reset] = useInput("");
  useEffect(() => {
    //effect is called every time onSubmitted is toggled
    //and onSubmitted is updated every time submit event is fired
    reset();
  }, [onSubmitted, reset]);
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input type="text" name={name} id={id} {...inputProps} />
      <input type="submit">/></input>
    </>
  );
};

export default Input;
