import { useEffect } from "react";
import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { ICardWeather, ICities } from "./../../../Types/types";
import "./thisDayInfo.scss";

const ThisDayInfo = ({ lat, lon }: ICities) => {
  useEffect(() => {
    store.getWeekWeather(lat, lon);
  }, [lat, lon]);
  return (
    <div className="day-info">
      {store.currentCity.map((item: ICardWeather) => (
        <ThisDayItem item={item} key={item.value} />
      ))}
      <img src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
