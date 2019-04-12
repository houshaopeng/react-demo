import React, { Component } from 'react';
import './record.css'
class Record extends Component {
  constructor(){
    super();
    this.state = {
        
    }
  }
  render() {
    return (
      <div>
        this is a child component // where is my fixed bug
        <p className="demo">demo</p>
      </div>
      
    );
  }
} 

export default Record;