import React from 'react'


export default class Square extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          value:null,
      }
  }
    
    
    
    render() {
      return (
        <button 
        className="square"
        onClick={() => console.log("Clicked")}
        >
          {this.props.value}
        </button>
      );
    }
  }