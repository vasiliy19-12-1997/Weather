import { FC, PropsWithChildren } from "react";
import "./myButton.scss";
interface MyButtonProps {
  value?: string;
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <div className="MyButton">
      <button className="MyButtonB" {...props}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
