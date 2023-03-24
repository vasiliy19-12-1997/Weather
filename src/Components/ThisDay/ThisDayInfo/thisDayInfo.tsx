import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { items } from "./../../../Types/enums";
import { ICardWeather, ItemDay } from "./../../../Types/types";
import "./thisDayInfo.scss";
import { useEffect } from "react";

const ThisDayInfo = () => {
  useEffect(() => {
    store.getWeekWeather(44.34, 10.99);
  }, []);
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
