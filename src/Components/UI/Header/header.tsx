import { FC, useState } from "react";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { Theme } from "../../../Context/context";
import { useTheme } from "../../Hooks/useTheme";
import "./header.scss";
type Props = {};

const Header: FC = (props: Props) => {
  const theme = useTheme();
  const [active, setActive] = useState(true);
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    setActive(!active);
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
            <SharedSvgSelector
              id={`${active ? "light-theme" : "night-theme"}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
