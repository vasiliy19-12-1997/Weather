import { FC } from "react";
import Header from "../Header/header";
import MyButton from "../MyButton/myButton";
import "./navbar.scss";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      <div className="Navbar">
        <div className="NavbarH">
          <Header>Weather</Header>
        </div>
        {/* <Header>Weather</Header> */}
        <MyButton>Погода</MyButton>
        <MyButton>Новости</MyButton>
        <MyButton>Карты</MyButton>
        <MyButton>Информеры</MyButton>
        <MyButton>Приложения</MyButton>
      </div>
    </>
  );
};

export default Navbar;
