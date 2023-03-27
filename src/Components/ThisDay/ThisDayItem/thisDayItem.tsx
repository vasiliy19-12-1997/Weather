import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { store } from "../../../Store/store";
import "../ThisDayInfo/thisDayInfo.scss";

const ThisDayItem = () => {
  return (
    <>
      <div className="card">
        <SharedSvgSelector id={"temperature"} />
        <h3 className="city">
          Temperature:
          {store.userCity.temperature}°C
        </h3>
      </div>
      <div className="card">
        <SharedSvgSelector id={"dew-point"} />
        <h3 className="city">Feels like: {store.userCity.feels_like}°C</h3>
      </div>
      <div className="card">
        <SharedSvgSelector id={"humidity"} />
        <h3 className="city">Humidity: {store.userCity.humidity}%</h3>
      </div>
      <div className="card">
        <SharedSvgSelector id={"wind"} />
        <h3 className="city">Wind: {store.userCity.wind} m/s</h3>
      </div>
      <div className="card">
        <SharedSvgSelector id={"pressure"} />
        <h3 className="city">Pressure: {store.userCity.pressure}mm.rt.st</h3>
      </div>
      <div className="card">
        <SharedSvgSelector id={"visibility"} />
        <h3 className="city">Visibility: {store.userCity.visibility} m</h3>
      </div>
    </>
  );
};

export default ThisDayItem;
