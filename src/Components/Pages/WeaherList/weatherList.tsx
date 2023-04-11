import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "../../../Store/store";
import MyInput from "../../UI/MyInput/myInput";
import CityCard from "../../CityCard/cityCard";
import MyButton from "../../UI/MyButton/myButton";
import "./weatherList.scss";
import { Link } from "react-router-dom";
const WeatherList = () => {
  const [city, setCity] = useState("");
  useEffect(() => {
    if (localStorage.getItem("cities")) {
      store.setCities();
    }
  }, [store.userCity.temperature]);

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
        key={v.id}
      />
    );
  });

  return (
    <div className="weatherList">
      <form>
        <MyInput
          type="text"
          placeholder="Search for city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></MyInput>

        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setCity("");
            store.getCurrentCityWeather(city);
          }}
        >
          Find
        </MyButton>
      </form>
      <div>{cities}</div>
    </div>
  );
};

export default observer(WeatherList);
