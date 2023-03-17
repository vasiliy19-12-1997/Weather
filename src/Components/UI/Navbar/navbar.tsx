import { FC, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../Types/types";
import "./navbar.scss";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const navigate = useNavigate();
  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="burger-menu-container">
        <div
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          <a href="#">Search Weather</a>
          <a href="#">Profile</a>
          <a href="#">Log Out</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
