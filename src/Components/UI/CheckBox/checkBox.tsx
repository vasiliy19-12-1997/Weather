import React, { useState } from "react";
import "./Checkbox.scss";
interface CheckboxProps {
  label: string;
}
const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  function cat(i: string) {
    const x = "al";
    function say() {
      const x = "Sy";
      return x + i;
    }
  }
  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span className="checkmark"></span>
      <span className="label">{props.label}</span>
    </label>
  );
};
export default Checkbox;
