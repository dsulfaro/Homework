import React from 'react';

class Calculator extends React.Component {

  constructor() {
    super();
    this.state = { num1: "", num2: "", result: 0 }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addResult = this.addResult.bind(this);
    this.subResult = this.subResult.bind(this);
    this.multResult = this.multResult.bind(this);
    this.divResult = this.divResult.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 })
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 })
  }

  addResult(e){
    e.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  subResult(e){
    e.preventDefault();
    this.setState({ result: this.state.num1 - this.state.num2 });
  }

  multResult(e){
    e.preventDefault();
    this.setState({ result: this.state.num1 * this.state.num2 });
  }

  divResult(e){
    e.preventDefault();
    this.setState({ result: this.state.num1 / this.state.num2 });
  }

  clear(e) {
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNum1} value={this.state.num1}></input>
        <input type="text" onChange={this.setNum2} value={this.state.num2}></input>
        <button onClick={this.addResult}>+</button>
        <button onClick={this.subResult}>-</button>
        <button onClick={this.multResult}>*</button>
        <button onClick={this.divResult}>/</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }

}

export default Calculator;
