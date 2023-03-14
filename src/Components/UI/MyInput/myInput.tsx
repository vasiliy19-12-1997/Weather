import { FC } from "react";
import "./myInput.scss";
interface MyInputProps {
  value?: string;
  onChange?: (query: React.ChangeEvent<HTMLInputElement> & string) => void;
  placeholder?: string;
  type?: string;
}

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  const { placeholder } = props;

  return (
    <div className="I">
      <input placeholder={placeholder} className="II" {...props} />
    </div>
  );
};

export default MyInput;
