import { FC, useEffect, useState } from "react";
import Navbar from "../../UI/Navbar/navbar";
import { useGeolocated } from "react-geolocated";
import { observer } from "mobx-react-lite";
import { store } from "../../../Store/store";

const Weather: FC = () => {
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
  }, [store.userCity.city]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <Navbar />
      <div>
        {loading ? (
          <div>{loading}</div>
        ) : (
          <div>
            <p>{store.userCity.city}</p>
            <p>{store.userCity.weather}</p>
            <p>{store.userCity.temperature}</p>
            <p>{store.userCity.temperature}</p>
          </div>
        )}
      </div>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
export default observer(Weather);
