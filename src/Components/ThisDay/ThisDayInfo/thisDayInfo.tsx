import { useEffect, useState } from "react";
import cloud from "../../../Assets/Images/cloud.png";
import { store } from "../../../Store/store";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { ICities } from "./../../../Types/types";
import { observer } from "mobx-react-lite";

const ThisDayInfo = ({ lat, lon }: ICities) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.getCurrentUserWeather(lat, lon);
    setLoading(false);
  }, [store.userCity.city]);
  return (
    <div className="day-info">
      <ThisDayItem />
      <img src={cloud} alt="cloud" />
    </div>
  );
};

export default observer(ThisDayInfo);
