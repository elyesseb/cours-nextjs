import React, { useRef } from "react";

export default function Add() {
  const nameCoffee = useRef();
  const urlImageCoffee = useRef();
  const priceCoffee = useRef();
  const scoreCoffee = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCoffee = {
      name: nameCoffee.current.value,
      price: priceCoffee.current.value,
      img: urlImageCoffee.current.value,
      score: scoreCoffee.current.value,
    };

    fetch(`api/coffee`, {
      method: "POST",
      body: JSON.stringify(newCoffee),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    (nameCoffee.current.value = ""),
      (priceCoffee.current.value = ""),
      (urlImageCoffee.current.value = ""),
      (scoreCoffee.current.value = "");
  };

  return (
    <div className="container mt-3">
      <h1 className="fs-4 m-5 text-center">Add new coffee</h1>
      <div className="container p-4">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nameCoffee" className="form-label">
            Name
          </label>
          <input
            ref={nameCoffee}
            type="text"
            className="form-control"
            id="nameCoffee"
          />
          <label htmlFor="priceCoffee" className="form-label">
            Price
          </label>
          <input
            ref={priceCoffee}
            type="text"
            className="form-control"
            id="priceCoffee"
          />
          <label htmlFor="urlImageCoffee" className="form-label">
            Url image
          </label>
          <input
            ref={urlImageCoffee}
            type="text"
            className="form-control"
            id="urlImageCoffee"
          />
          <label htmlFor="scoreCoffee" className="form-label">
            Score
          </label>
          <input
            ref={scoreCoffee}
            type="text"
            className="form-control"
            id="scoreCoffee"
          />
          <button className="btn btn-primary mt-4">Add</button>
        </form>
      </div>
    </div>
  );
}
