import { FC } from "react";
import Navbar from "../../UI/Navbar/navbar";
interface WeatherProps {
  name?: string;
}
const Weather: FC = (props: WeatherProps) => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Weather;
