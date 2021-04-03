import React from "react";

const scaleName = {
  c: "Celcias",
  f: "Fahrenheit",
};
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      temparature: "",
    };
  }
  handeTemp = (e) => {
    this.setState({
      temparature: e.target.value,
    });
  };
  render() {
    const { temparature } = this.state;
    const {scale} = this.props
    return (
      <div>
        <fieldset>
          <legend>Enter Your Temparature {scaleName[scale]}:</legend>
          <input type="text" value={temparature} onChange={this.handeTemp}/>
        </fieldset>
      </div>
    );
  }
}

export default Calculator;