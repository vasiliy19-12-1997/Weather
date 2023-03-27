import { observer } from "mobx-react-lite";
import { useEffect, useLayoutEffect, useState } from "react";
import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { ICardWeather, ICities, ItemDay } from "./../../../Types/types";
import "./thisDayInfo.scss";

const ThisDayInfo = ({ lat, lon }: ICities) => {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    store.getCurrentUserWeather(lat, lon);
    setLoading(false);
  }, []);
  return (
    <div className="day-info">
      <ThisDayItem />

      <img src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
