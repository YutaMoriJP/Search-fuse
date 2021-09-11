import { useEffect } from "react";
import Article from "./styles/Article";
import Button from "./styles/InputButton";
import useInput from "./useHooks/useInput";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  onSubmitted: boolean;
  [rest: string]: any;
}

const Input = ({
  id,
  name,
  onSubmitted,
  placeholder = "Type here...",
  ...rest
}: InputProps): JSX.Element => {
  //reset function is memoized, so it can be passed to useEffect deps value
  const [inputProps, reset] = useInput("");
  useEffect(() => {
    //effect is called every time onSubmitted is toggled
    //and onSubmitted is updated every time submit event is fired
    reset();
  }, [onSubmitted, reset]);
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <Article direction="row" isShadow={false} color="black">
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          {...rest}
          {...inputProps}
        />
        <Button>SEARCH</Button>
      </Article>
    </>
  );
};

export default Input;
