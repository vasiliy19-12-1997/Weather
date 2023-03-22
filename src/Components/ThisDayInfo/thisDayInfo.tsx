import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
import "./thisDayInfo.scss";
import cloud from "../../Assets/Images/cloud.png";
type Props = {};

const ThisDayInfo = (props: Props) => {
  return (
    <div className="day-info">
      <div className="icons">
        <SharedSvgSelector id="temperature" />
        <SharedSvgSelector id="Humidity" />
        <SharedSvgSelector id="Dew point" />
        <SharedSvgSelector id="wind" />
        <SharedSvgSelector id="pressure" />
        <SharedSvgSelector id="Visibility" />
      </div>
      <div className="title">
        <p className="temperature">temperature</p>
        <p className="Humidity">Humidity</p>
        <p className="Dew point">Dew point</p>
        <p className="wind">wind</p>
        <p className="pressure">pressure</p>
        <p className="Visibility">Visibility</p>
      </div>
      <div className="text">
        <p className="temperature">Feels like -3°C%</p>
        <p className="Humidity">86%</p>
        <p className="Dew point">-1°C</p>
        <p className="wind"> 3.0m/s </p>
        <p className="pressure">1012hPa</p>
        <p className="Visibility">10.0km</p>
        <img src={cloud} alt="cloud" />
      </div>
    </div>
  );
};

export default ThisDayInfo;
