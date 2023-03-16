import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { store } from "../../Store/store";
import MyInput from "../UI/MyInput/myInput";
import CityCard from "./../CityCard/cityCard";
import MyButton from "./../UI/MyButton/myButton";
import "./weatherList.scss";
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
        key={v.id}
      />
    );
  });
  return (
    <div className="weatherList">
      <form action="">
        <MyInput
          type="text"
          placeholder="Search for city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <img
            src={`https://freesvg.org/img/detective_penguin.png`}
            alt=""
          ></img>
        </MyInput>

        {/* <WeatherCityObserver /> */}
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
