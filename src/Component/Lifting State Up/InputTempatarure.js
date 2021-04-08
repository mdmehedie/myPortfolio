import React from "react";

const scaleName = {
  c: "Celcias",
  f: "Fahrenheit",
};
function Calculator (props) {
    const {temp, scale, changeTemp} = props
    return (
      <div>
        <fieldset>
          <legend>Enter Your Temparature {scaleName[scale]}:</legend>
          <input type="text" value={temp} onChange={(e)=>changeTemp(e, scale)}/>
        </fieldset>
      </div>
    );
}

export default Calculator;