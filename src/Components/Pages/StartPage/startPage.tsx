import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { store } from "../../../Store/store";
import "./startPage.scss";
import ThisDay from "../../ThisDay/thisDay";
import Days from "../../Days/days";
import ThisDayInfo from "../../ThisDay/ThisDayInfo/thisDayInfo";
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
  }, [store.userCity.city]);

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <div className="startPage">
        {loading ? <div>{loading}</div> : <ThisDay lat={lat} lon={lon} />}
        {loading ? <div>{loading}</div> : <Days lat={lat} lon={lon} />}
      </div>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};
export default observer(StartPage);
