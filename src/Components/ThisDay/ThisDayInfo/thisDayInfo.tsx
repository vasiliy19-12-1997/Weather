import { useEffect } from "react";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import { items } from "../../../Types/enums";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import {
  ICardWeather,
  ICities,
  ItemDay,
  IUserCities,
} from "./../../../Types/types";
import "./thisDayInfo.scss";

const ThisDayInfo = ({ lat, lon }: ICities) => {
  useEffect(() => {
    store.getCurrentUserWeather(lat, lon);
  }, [lat, lon]);
  return (
    <div className="day-info">
      {items.map((item: ItemDay) => (
        <ThisDayItem item={item} />
      ))}

      <img src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
