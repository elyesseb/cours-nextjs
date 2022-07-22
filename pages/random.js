import { useState, useEffect } from "react";

export default function Random() {
  const [coffee, setCoffee] = useState(false);

  useEffect(() => {
    newCoffee();
  }, []);

  const newCoffee = () => {
    fetch("/api/coffee")
      .then((res) => res.json())
      .then((data) => setCoffee(data.coffee[0].data));
  };

  let randomCoffee;
  if (coffee) {
    randomCoffee = coffee[Math.floor(Math.random() * coffee.length)].name;
  }

  return (
    <div className="container mt-3">
      <h1 className="fs-4 m-5 text-center">Random Coffee</h1>
      <h2 className="fs-4 m-5 text-center">{randomCoffee}</h2>
      <button onClick={newCoffee} className="btn btn-primary d-block m-auto">
        Get random coffee
      </button>
    </div>
  );
}
