import { observer } from "mobx-react-lite";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
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
      <h3 className="city">
        {item.name}
        {item.value}
      </h3>
    </div>
  );
};

export default ThisDayItem;
