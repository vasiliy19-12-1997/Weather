import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { ICardWeather, ItemDay } from "../../../Types/types";
import "../ThisDayInfo/thisDayInfo.scss";
interface Props {
  item: ICardWeather;
}

const ThisDayItem = ({ item }: Props) => {
  return (
    <div className="item">
      <SharedSvgSelector id={item.icon_id} />
      <p>{item.name}</p>
      <p>{item.value}</p>
      <p>{item.city}</p>
      <p>{item.day}</p>
      <p>{item.dayTemp}</p>
      <p>{item.icon}</p>
      <p>{item.name}</p>
      <p>{item.nightTemp}</p>
      <p>{item.weather}</p>
      <p>{item.value}</p>
    </div>
  );
};

export default ThisDayItem;
