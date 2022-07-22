import React from "react";
import Image from "next/image";
import coffe_bean from "../public/assets/coffe_bean.jpg";
import coffee_grind from "../public/assets/coffee_grind.jpg";
import coffee_cup from "../public/assets/coffee_cup.jpg";

export default function Galery() {
  return (
    <>
      <div className="container">
        <h1 className="fs-4 m-5 text-center">Galery</h1>
      </div>
      <div className="container">
        <Image
          layout="responsive"
          placeholder="blur"
          src={coffe_bean}
          width="4889"
          height="3728"
          alt="coffe bean"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={coffee_grind}
          width="3673"
          height="5509"
          alt="coffee grind"
        />
        <Image
          layout="responsive"
          placeholder="blur"
          src={coffee_cup}
          width="2136"
          height="3200"
          alt="coffee cup"
        />
      </div>
    </>
  );
}
