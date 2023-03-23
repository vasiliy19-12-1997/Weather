import { FC, useState } from "react";
import { store } from "../../Store/store";
import "./thisDay.scss";
import ThisDayInfo from "./ThisDayInfo/thisDayInfo";
const ThisDay: FC = () => {
  const date = new Date();

  return (
    <div className="weather-container">
      <div className="location-info">
        <ul className="info">
          <p className="temperature">{store.userCity.temperature}°</p>
          <p className="weather-description"> {store.userCity.weather}</p>
          <p className="date"> Today is: {date.toLocaleDateString()}</p>
          <p className="city">City: {store.userCity.city}</p>
        </ul>
        <img
          src={`http://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>
      <ThisDayInfo />
    </div>
  );
};

export default ThisDay;
