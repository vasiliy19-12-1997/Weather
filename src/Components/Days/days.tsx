import { useEffect } from "react";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import MyButton from "./../UI/MyButton/myButton";
import Day from "./day";
const Days = ({ lat, lon }: ICities) => {
  useEffect(() => {
    store.getWeekWeather(lat, lon);
  });
  // const dateArray = [];
  // const date = store.date;
  // for (let i = 0; i <= 10; i++) {
  //   date.setDate(date.getDate() + 1);
  //   dateArray.push(date);
  //   console.log(dateArray);
  // }

  return (
    <div className="days-div">
      <div className="header-days">
        <MyButton>on 8 days</MyButton>
        <MyButton>on mounth</MyButton>
        <MyButton>on 10 days</MyButton>
      </div>
      <div className="days">
        {store.currentCity.map((card) => (
          <Day card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Days;
