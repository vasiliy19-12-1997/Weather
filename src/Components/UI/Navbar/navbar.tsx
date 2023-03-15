import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/header";
import MyButton from "../MyButton/myButton";
import "./navbar.scss";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Navbar">
        <div className="NavbarH">
          <Header>Weather</Header>
        </div>
        {/* <Header>Weather</Header> */}
        <MyButton onClick={() => navigate("/weatherList")}>Погода</MyButton>
        <MyButton>Новости</MyButton>
        <MyButton>Карты</MyButton>
        <MyButton>Информеры</MyButton>
        <MyButton>Приложения</MyButton>
      </div>
    </>
  );
};

export default Navbar;
