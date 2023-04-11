import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import ThisDayInfo from "./ThisDayInfo/thisDayInfo";

const ThisDay = ({ lat, lon }: ICities) => {
  return (
    <div className="weather-container">
      <div className="location-info">
        <div className="info">
          <p className="temperature">{store.userCity.temperature}°</p>
          <img
            src={`https://openweathermap.org/img/wn/${store.userCity.icon}@2x.png`}
            alt="weather-icon"
            className="weather-icon"
          />
        </div>
        <div className="text">
          <p className="date">{store.date.toLocaleDateString()}</p>
          <p className="weather-description"> {store.userCity.weather}</p>
          <p className="city">{store.userCity.city}</p>
        </div>
      </div>
      <ThisDayInfo lat={lat} lon={lon} />
    </div>
  );
};

export default ThisDay;
