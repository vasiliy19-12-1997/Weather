import { FC } from "react";
import Select from "react-select";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import "./header.scss";
type Props = {};

const Header: FC = (props: Props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
  };
  return (
    <header>
      <div className="header">
        <div className="header-wrapper">
          <SharedSvgSelector id="header-logo" />
          <div className="header-title">Weather</div>
        </div>
        <div className="header-wrapper">
          <SharedSvgSelector id="change-theme" />
          <Select styles={colourStyles} options={options} />
        </div>
      </div>
    </header>
  );
};

export default Header;
