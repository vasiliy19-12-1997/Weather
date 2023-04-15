import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import "./startPage.scss";
import { store } from "../../Store/store";
import ThisDay from "../../Components/ThisDay/thisDay";
import Days from "../../Components/Days/days";

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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLon(pos.coords.longitude);
      setLoading(false);
    });
  }, []);
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
