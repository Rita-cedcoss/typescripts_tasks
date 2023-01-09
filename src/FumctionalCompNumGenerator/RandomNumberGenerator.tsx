import React from 'react'
type randomNumProps={
    random:number,
    numGenerator:()=>void
}
const RandomNumberGenerator = (props:randomNumProps) => {
    if(props.random<5)
    {
        throw new Error("Number is less than 5!");
    }
    return (
    <div>
        <p>{props.random}</p>
        <button onClick={props.numGenerator}>RandomNumberGnerator</button>
    </div>
  )
}

export default RandomNumberGenerator