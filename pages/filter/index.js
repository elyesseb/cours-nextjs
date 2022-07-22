import React from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function Filter(props) {
  return (
    <div className="container mt-3">
      <h1 className="fs-4 m-5 text-center">Filter</h1>
      <div className="container">
        <ul className="list-group">
          {props.data.coffee.map((item) => (
            <li className="list-group-item" key={uuidv4()}>
              <Link href={`/filter/${item.name}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const url = "http://localhost:3000/api/coffee";
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { data },
  };
}
