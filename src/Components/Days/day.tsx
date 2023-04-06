import { ICardWeather } from "../../Types/types";

interface Props {
  card: ICardWeather;
}
const Day = ({ card }: Props) => {
  return (
    <div className="day">
      <p className="day-temp">{card.day}</p>
      <img
        src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`}
        alt="weather-icon"
        className="weather-icon"
      />
      <div>
        <p className="day-temp">{card.dayTemp}</p>
        <p className="night-temp">{card.nightTemp}</p>
        <p className="day-descript">{card.weather}</p>
      </div>
    </div>
  );
};

export default Day;
