import { FC, useState } from "react";
import { store } from "../../Store/store";
import "./startPageCities.scss";
const StartPageCities: FC = () => {
  const date = new Date();

  return (
    <div className="weather-container">
      <div className="location-info">
        <h2 className="city-name">{store.userCity.city}</h2>
        <p className="date">{date.toLocaleDateString()}</p>
      </div>

      <div className="weather-info">
        <p className="temperature">{store.userCity.temperature}</p>
        <img
          src={`http://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
          alt="weather-icon"
          className="weather-icon"
        />
        <p className="weather-description"> {store.userCity.weather}</p>
      </div>

      <div className="additional-info-wrapper">
        <div className="humidity-info">
          <p className="info-label">Влажность</p>
          <p className="humidity">80%</p>
        </div>

        <div className="wind-info">
          <p className="info-label">Ветер</p>
          <p className="wind-speed">3 м/c</p>
        </div>
      </div>
    </div>
  );
};

export default StartPageCities;
