import { ICardWeather } from "../../Types/types";

interface Props {
  card: ICardWeather;
}
const Day = ({ card }: Props) => {
  return (
    <div className="day">
      <img
        src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`}
        alt="weather-icon"
        className="weather-icon"
      />
      <div>
        <b>Day temp: {card.dayTemp}</b>
        <p>Night temp: {card.nightTemp}</p>
        <p>Weather: {card.weather}</p>
      </div>
    </div>
  );
};

export default Day;
