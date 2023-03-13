import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "../../Store/store";
import CityCard from "./../CityCard/cityCard";

const WeatherList = () => {
  const [city, setCity] = useState("");
  useEffect(() => {
    if (localStorage.getItem("cities")) {
      store.setCities();
    }
  }, []);
  const cities = store.cities.map((v) => {
    return (
      <CityCard
        id={v.id}
        lat={v.lat}
        lon={v.lon}
        city={v.city}
        weather={v.weather}
        temperature={v.temperature}
        icon={v.icon}
      />
    );
  });
  return (
    <div>
      <div>Weather List</div>
      <form action="">
        <input
          type="text"
          placeholder="Search for city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("");
            store.getCurrentCityWeather(city);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>
      <div>{cities}</div>
    </div>
  );
};

export default observer(WeatherList);
