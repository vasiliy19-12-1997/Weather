import { FC, PropsWithChildren } from "react";
import "./myInput.scss";
interface MyInputProps {
  value?: string;
  onChange?: (query: React.ChangeEvent<HTMLInputElement> & string) => void;
  placeholder?: string;
  type?: string;
  children?: React.PropsWithChildren;
}

const MyInput: FC<PropsWithChildren<MyInputProps>> = ({
  children,
  placeholder,
  ...props
}) => {
  return (
    <div className="I">
      <input placeholder={placeholder} className="II" {...props}></input>
    </div>
  );
};

export default MyInput;
