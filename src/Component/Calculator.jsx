import React from "react";
import InputTemparature from "./InputTempatarure";
import Boiling from "./Boiling";
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <InputTemparature scale="c" />
        <InputTemparature scale="f" />
        <Boiling celcias="" />
      </div>
    );
  }
}

export default Calculator;
