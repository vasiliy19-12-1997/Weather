import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { store } from "../../Store/store";
import WeakForecast from "../WeakForecast/weakForecast";

const WeatherCity = () => {
  const condition = useLocation().state || null;
  useEffect(() => {
    if (condition) {
      store.getWeekWeather(condition.lat, condition.lon);
    }
  }, []);
  const forecast = store.currentCity.map((city) => {
    return (
      <WeakForecast
        day={city.day}
        icon={city.icon}
        weather={city.weather}
        dayTemp={city.dayTemp}
        nightTemp={city.nightTemp}
      />
    );
  });
  return (
    <div>
      weatherCity
      <div>{condition.city}</div>
      <div>{forecast}</div>
    </div>
  );
};

export default observer(WeatherCity);
