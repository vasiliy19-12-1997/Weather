import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import { ItemDay } from "../../../Types/types";
import "../ThisDayInfo/thisDayInfo.scss";
interface Props {
  item: ItemDay;
}

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className="item">
      <SharedSvgSelector id={icon_id} />
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};

export default ThisDayItem;
