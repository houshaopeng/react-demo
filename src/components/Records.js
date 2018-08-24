import React, { Component } from 'react';
import Record from './Record';
import Detail from './../Detail';
class Records extends Component {
  constructor(){
    super();
    this.state = {
      record:'test',
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <div className="table">{this.state.record}</div>
        {/* start react demo ES6 react redux react-router ant-Design/*/}
        <Record/>
        <Detail/>
      </div>
    );
  }
} 

export default Records;