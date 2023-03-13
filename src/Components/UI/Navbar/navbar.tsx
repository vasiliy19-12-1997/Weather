import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICities } from "../../../Types/types";
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
        <MyButton onClick={() => navigate("/weather/")}>Погода</MyButton>
        <MyButton>Новости</MyButton>
        <MyButton>Карты</MyButton>
        <MyButton>Информеры</MyButton>
        <MyButton>Приложения</MyButton>
      </div>
    </>
  );
};

export default Navbar;
