import React from 'react'
type MyComponentProps={
  name:string,
  num:number,
  isLoggedin:boolean
}

function MyComponent(props:MyComponentProps) {
  return (
    <div>
        <h3>Name:{props.name}</h3>
        <h3>Number:{props.num}</h3>
        <h3>isLoggedin:{props.isLoggedin}</h3>
    </div>
  )
}

export default MyComponent