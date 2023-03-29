import { FC } from "react";
import Select from "react-select";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { Theme } from "../../../Context/context";
import { useTheme } from "../../Hooks/useTheme";
import "./header.scss";
type Props = {};

const Header: FC = (props: Props) => {
  const theme = useTheme();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }
  return (
    <header>
      <div className="header">
        <div className="header-wrapper">
          <SharedSvgSelector id="header-logo" />
          <div className="header-title">Weather</div>
        </div>
        <div className="header-wrapper">
          <div className="change-theme" onClick={changeTheme}>
            <SharedSvgSelector id="change-theme" />
          </div>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
