import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import "./thisDayInfo.scss";
import cloud from "../../../Assets/Images/cloud.png";
import { ItemDay } from "./../../../Types/types";
import { items } from "./../../../Types/enums";
import ThisDayItem from "../ThisDayItem/thisDayItem";

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
