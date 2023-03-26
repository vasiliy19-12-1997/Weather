import React from "react";
import { store } from "../../Store/store";
import { ICardWeather } from "../../Types/types";

interface Props {
  card: ICardWeather;
}
const Day = ({ card }: Props) => {
  return (
    <div className="day">
      <div>
        <p>{card.dayTemp}</p>
        <p>{card.nightTemp}</p>
        <p>{card.weather}</p>
        <img
          src={`http://openweathermap.org/img/wn/${card.icon}@2x.png`}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>
    </div>
  );
};

export default Day;
