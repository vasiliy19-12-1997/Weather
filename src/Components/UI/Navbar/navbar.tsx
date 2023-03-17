import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <>
      <div id="nav-icon6">
        <span>
          <div>1</div>
          <div>2</div>
        </span>
      </div>
    </>
  );
};

export default Navbar;
