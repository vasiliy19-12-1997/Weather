import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import CityCard from "../../Components/CityCard/cityCard";
import MyButton from "../../Components/UI/MyButton/myButton";
import MyInput from "../../Components/UI/MyInput/myInput";
import { store } from "../../Store/store";
import "./weatherList.scss";

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
