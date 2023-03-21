import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
import "./thisDayInfo.scss";
type Props = {};

const ThisDayInfo = (props: Props) => {
  return (
    <div className="day-info">
      <div className="icons">
        <SharedSvgSelector id="Humidity" />
        <SharedSvgSelector id="Dew point" />
        <SharedSvgSelector id="wind" />
        <SharedSvgSelector id="pressure" />
      </div>
      <div className="text">
        <p className="Humidity">Humidity</p>
        <p className="Dew point">Dew point</p>
        <p className="wind">wind</p>
        <p className="pressure">pressure</p>
      </div>
    </div>
  );
};

export default ThisDayInfo;
