import React, { Component } from 'react'
type numGeneratorProps={
  random:number,
  numGenerator:()=>void
}
export default class NumberGenerator extends Component<numGeneratorProps> {
    render() {   
      if (this.props.random < 5) {
        throw new Error("Number is less than 5");
      }
    return (
     <>    
      <div>
        <p>{this.props.random}</p>
        <button onClick={this.props.numGenerator}>RandomNumberGnerator</button>
      </div>
      </>
    )
  }
}
