import React from "react";

export default function Ssr(props) {
  return (
    <div className="container mt-3">
      <h1 className="fs-4 m-5 text-center">SSR</h1>
      <p className="fs-5 mt-3 text-center">
        Le BTC est a : <b>{props.data.bpi.EUR.rate}</b>&nbsp;€
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}
