import { FC, useState } from "react";
import { store } from "../../Store/store";
import ThisDayInfo from "../ThisDayInfo/thisDayInfo";
import "./thisDay.scss";
const ThisDay: FC = () => {
  const date = new Date();

  return (
    <div className="weather-container">
      <div className="location-info">
        <div>
          <div className="weather-info">
            <p className="temperature">{store.userCity.temperature}°</p>
            <p className="weather-description"> {store.userCity.weather}</p>
          </div>
          <div className="date-city-name">
            <p>Today is: {date.toLocaleDateString()}</p>
            <p>City: {store.userCity.city}</p>
          </div>
        </div>
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
