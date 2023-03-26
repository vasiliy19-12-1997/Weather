import React, { useEffect } from "react";
import { store } from "../../Store/store";
import { ICities } from "../../Types/types";
import Day from "./day";
import MyButton from "./../UI/MyButton/myButton";
const Days = ({ lat, lon }: ICities) => {
  useEffect(() => {
    store.getWeekWeather(lat, lon);
  });
  return (
    <>
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
    </>
  );
};

export default Days;
