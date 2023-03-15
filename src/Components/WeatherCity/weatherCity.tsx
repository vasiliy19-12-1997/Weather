import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { store } from "../../Store/store";
import WeakForecast from "../WeakForecast/weakForecast";

const WeatherCity: FC = () => {
  const state = useLocation().state || null;
  console.log(`${state.pathname}`);
  // проблема с функцией не могу зайти по ссылку error boundaries
  const [city, setSity] = useState("");
  // useEffect(() => {
  //   if (state) {
  //     console.log(`${state.pathname}`);
  //     store.getWeekWeather(state.lat, state.lon);
  //   } else {
  //   }
  // }, [state]);
  useEffect(() => {}, []);
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
      {/* <div>{state.city}</div> */}
      <div>{forecast}</div>
    </div>
  );
};

export default observer(WeatherCity);
