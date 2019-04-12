import React, { Component } from 'react';
import './record.css'
class Record extends Component {
  constructor(){
    super();
    this.state = {
        // where is my fixed bug
    }
  }
  render() {
    return (
      <div>
        this is a child component
        <p className="demo">demo</p>
      </div>
      
    );
  }
} 

export default Record;