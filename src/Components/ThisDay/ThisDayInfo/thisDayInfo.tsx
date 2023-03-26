import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import { items } from "../../../Types/enums";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { ICities, ItemDay } from "./../../../Types/types";
import "./thisDayInfo.scss";

const ThisDayInfo = ({ lat, lon }: ICities) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.getCurrentUserWeather(lat, lon);
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div className="day-info">
        <div>2</div>
      </div>
    );
  } else {
    return (
      <div className="day-info">
        {items.map((item: ItemDay, index) => (
          <ThisDayItem item={item} key={index} />
        ))}
        ;
        <img src={cloud} alt="cloud" />
      </div>
    );
  }
};

export default ThisDayInfo;
