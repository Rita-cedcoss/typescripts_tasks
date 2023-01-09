import React from "react";
type Task4Props = {
  prodId: number;
  price: number;
  title: string;
  rating: number;
  image: string[];
};
const Task4 = (props: Task4Props) => {
  return (
    <div className="gridItem">
      <img alt="img.." height="150px" width="100%" src={props.image[0]} />
      <p>Id:{props.prodId}</p>
      <p>Title{props.title}</p>
      <p>price:{props.price}</p>
      <p>Rating:{props.rating}</p>
    </div>
  );
};

export default Task4;
