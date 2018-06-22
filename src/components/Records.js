import React, { Component } from 'react';
import Record from './Record';
class Records extends Component {
  constructor(){
    super();
    this.state = {
      record:'sadasd',
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <div className="table">{this.state.record}</div>
        {/* tody start react demo ../ */}
        <Record/>
      </div>
    );
  }
} 

export default Records;