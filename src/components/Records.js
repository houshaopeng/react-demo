import React, { Component } from 'react';
import Record from './Record';
class Records extends Component {
  constuctor(){
    super();
    this.state = {
      record:'sadasd',
    }
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <div className="table"></div>
        {/* tody start react demo weihui */}
        <Record/>
      </div>
    );
  }
} 

export default Records;