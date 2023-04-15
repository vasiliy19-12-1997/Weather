import { useEffect } from "react";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import Day from "./day";
import { observer } from "mobx-react-lite";
const Days = ({ lat, lon }: ICities) => {
  useEffect(() => {
    store.getWeekWeather(lat, lon);
  }, []);

  return (
    <div className="days-div">
      <div className="days">
        {store.currentCity.map((card, index) => (
          <Day card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default observer(Days);
