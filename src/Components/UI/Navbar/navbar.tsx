import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../Types/types";
import Header from "../Header/header";
import MyButton from "../MyButton/myButton";
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
  return (
    <>
      <nav className="Navbar">
        <div className="NavbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="NavbarH">
          <Header>Weather</Header>
        </div>
        <div className="NavbarBurgerMenu">
          <div className="NavbarEnd">
            <MyButton onClick={() => navigate("/weatherList")}>
              Search city
            </MyButton>
            <MyButton onClick={() => navigate("/weatherList")}>
              Profile
            </MyButton>
            <MyButton onClick={logOut}>Log out</MyButton>
          </div>
        </div>
        {/* <Header>Weather</Header> */}
      </nav>
    </>
  );
};

export default Navbar;
