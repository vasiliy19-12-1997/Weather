import { FC, useEffect, useState } from "react";
import Navbar from "../../UI/Navbar/navbar";
import { useGeolocated } from "react-geolocated";
import { observer } from "mobx-react-lite";
import { store } from "../../../Store/store";
import "./startPage.scss";
const StartPage: FC = () => {
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
  //функция из стора, чтобы отобразить на странице
  useEffect(() => {
    store.getCurrentUserWeather(lat, lon);
    setLoading(false);
  }, [store.userCity.city, lat, lon]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Navbar />
      <div className="StartPage">
        <div className="StartPageTitle">{store.userCity.city}</div>
        {loading ? (
          <div>{loading}</div>
        ) : (
          <div className="StartPageCities">
            <p>
              Today is weather:
              {store.userCity.weather}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
              alt=""
            />
            <hr />

            <p>Today is temperature: {store.userCity.temperature}</p>
          </div>
        )}
      </div>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
export default observer(StartPage);
