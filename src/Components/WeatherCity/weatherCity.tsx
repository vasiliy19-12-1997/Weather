import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useLocation } from "react-router-dom";
import { store } from "../../Store/store";
import Navbar from "../UI/Navbar/navbar";
import WeakForecast from "./../WeakForecast/weakForecast";

const WeatherCity: FC = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [loading, setLoading] = useState(true);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  //получаем текущий город пользователя
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLon(pos.coords.longitude);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    store.getWeekWeather(lat, lon);
    setLoading(false);
  }, [store.userCity.city]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Navbar />
      <div className="StartPage">
        <div className="StartPageTitle">Your current city</div>
        {loading ? (
          <div>{loading}</div>
        ) : (
          <div className="StartPageCities">
            <div>
              <div>
                <p>{store.currentsCity.day}</p>
                <p>{store.currentsCity.weather}</p>
                <p>Day - {store.currentsCity.dayTemp}°C</p>
                <p>Night - {store.currentsCity.nightTemp}°C</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
export default observer(WeatherCity);
