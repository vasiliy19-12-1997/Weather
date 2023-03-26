import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import Days from "../Days/days";
import ThisDayInfo from "./ThisDayInfo/thisDayInfo";

const ThisDay = ({ lat, lon }: ICities) => {
  return (
    <div className="weather-container">
      <div className="location-info">
        <ul className="info">
          <p className="temperature">{store.userCity.temperature}°</p>
          <p className="weather-description"> {store.userCity.weather}</p>
          <p className="date"> Today is: {store.date.toLocaleDateString()}</p>
          <p className="city">City: {store.userCity.city}</p>
        </ul>
        <img
          src={`http://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>
      <ThisDayInfo lat={lat} lon={lon} />
    </div>
  );
};

export default ThisDay;
