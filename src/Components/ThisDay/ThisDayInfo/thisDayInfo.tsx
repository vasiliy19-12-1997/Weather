import cloud from "../../../Assets/Images/cloud.png";
import ThisDayItem from "../ThisDayItem/thisDayItem";
import { items } from "./../../../Types/enums";
import { ItemDay } from "./../../../Types/types";
import "./thisDayInfo.scss";

const ThisDayInfo = () => {
  return (
    <div className="day-info">
      {items.map((item: ItemDay) => (
        <ThisDayItem item={item} key={item.value} />
      ))}
      <img src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
