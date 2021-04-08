import React from "react";
import InputTemparature from "./InputTempatarure";
import Boiling from "./Lifting State Up/Boiling";

function toCelcias(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celcias) {
  return (celcias * 9) / 5 + 32;
}

function convert(temparature, toConvert) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = toConvert(input);
  const round = Math.round(output * 1000) / 1000;
  return round;
}

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      temparature: "",
      scale: "c",
    };
  }
  handeTemp = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temparature, scale } = this.state;
    const celcias =
      scale === "f" ? convert(temparature, toCelcias) : temparature;
    const fahrenheit =
      scale === "c" ? convert(temparature, toFahrenheit) : temparature;
    return (
      <div>
        <InputTemparature
          scale="c"
          temp={celcias}
          changeTemp={this.handeTemp}
        />
        <InputTemparature
          scale="f"
          temp={fahrenheit}
          changeTemp={this.handeTemp}
        />
        <Boiling temp={temparature} />
      </div>
    );
  }
}

export default Calculator;
