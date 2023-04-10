import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { store } from "../../../Store/store";

const ThisDayItem = () => {
  return (
    <>
      <div className="card">
        <SharedSvgSelector id={"temperature"} />
        <p className="city">Temperature:</p>
        <p className="store">{store.userCity.temperature}°C</p>
      </div>
      <div className="card">
        <SharedSvgSelector id={"dew-point"} />
        <p className="city">Feels like:</p>
        <p className="store">{store.userCity.feels_like}°C</p>
      </div>
      <div className="card">
        <SharedSvgSelector id={"humidity"} />
        <p className="city">Humidity:</p>
        <p className="store">{store.userCity.humidity} %</p>
      </div>
      <div className="card">
        <SharedSvgSelector id={"wind"} />
        <p className="city">Wind</p>
        <p className="store">{store.userCity.wind} m/s</p>
      </div>
      <div className="card">
        <SharedSvgSelector id={"pressure"} />
        <p className="city">Pressure:</p>
        <p className="store">{store.userCity.pressure} mm.rt.st normal</p>
      </div>
      <div className="card">
        <SharedSvgSelector id={"visibility"} />
        <p className="city">Visibility:</p>
        <p className="store">{store.userCity.visibility} m</p>
      </div>
    </>
  );
};

export default ThisDayItem;
