import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { store } from "../../../Store/store";
import { ICardWeather, IUserCities } from "../../../Types/types";
import "../ThisDayInfo/thisDayInfo.scss";
import { ItemDay } from "./../../../Types/types";
interface Props {
  item: ItemDay;
}
const ThisDayItem = ({ item }: Props) => {
  return (
    <div className="item">
      <div className="icons">
        <SharedSvgSelector id={item.icon_id} />
      </div>
      <p className="city">
        {item.name}
        {item.value}
      </p>
    </div>
  );
};

export default ThisDayItem;
