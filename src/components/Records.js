import React, { Component } from 'react';
import Record from './Record';
class Records extends Component {
  render() {
    return (
      <div>
        <h2>Records</h2>
        <div className="table"></div>
        <Record/>  
      </div>
    );
  }
} 

export default Records;