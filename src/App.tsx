import React, { useState } from "react";
import "./App.css";
import NumberGenerator from "./RendomNumberGenrator/NumberGenerator";
import ErrorBoundaries from "./RendomNumberGenrator/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import FunErrorBoundary from "./FumctionalCompNumGenerator/FunErrorBoundary";
import RandomNumberGenerator from "./FumctionalCompNumGenerator/RandomNumberGenerator";
import MyComponent from "./Task3&4/MyComponent";
import Task4 from "./Task3&4/Task4";
import "./Task3&4/componentStyle.css";
function App() {
  const arr = [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      rating: 4.69,
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      rating: 4.44,
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,
      rating: 4.09,
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,
      rating: 4.3,
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      price: 499,
      rating: 4.09,
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      price: 1749,
      rating: 4.57,
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      price: 1499,
      rating: 4.25,
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      price: 1499,
      rating: 4.43,
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      price: 1099,
      rating: 4.54,
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      price: 1099,
      rating: 4.43,
      images: [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
  ];
  const [randomNum, setRandomNum] = useState(5);
  const numGenerator = () => {
    let minNumber = 1;
    let maxNumber = 20;
    let rand = minNumber + Math.random() * (maxNumber - minNumber);
    console.log(rand);
    setRandomNum(rand);
  };
  const [randomNumFun, setRandomNumFun] = useState(5);
  const numGeneratorFun = () => {
    let minNumber = 1;
    let maxNumber = 20;
    let rand = minNumber + Math.random() * (maxNumber - minNumber);
    console.log(rand);
    setRandomNumFun(rand);
  };
  return (
    <div className="App">
      <h1>Class Component Task1</h1>
      <ErrorBoundaries random={randomNum} numGenerator={numGenerator}>
        <NumberGenerator random={randomNum} numGenerator={numGenerator} />
      </ErrorBoundaries>
      <h1>Task2 : functional Component</h1>
      <ErrorBoundary FallbackComponent={FunErrorBoundary}>
        <RandomNumberGenerator
          random={randomNumFun}
          numGenerator={numGeneratorFun}
        />
      </ErrorBoundary>
      <h1>Task3: React app with typescript</h1>
      <MyComponent name="Rita Pal" num={10} isLoggedin={true} />
      <h1>Task4 :  Pass product details and print</h1>
      {arr.map((item) => {
        console.log(item);
        return (
          <Task4
            prodId={item.id}
            price={item.price}
            rating={item.rating}
            title={item.title}
            image={item.images}
          />
        );
      })}
    </div>
  );
}

export default App;
