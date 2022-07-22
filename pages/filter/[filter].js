import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function Type(props) {
  const router = useRouter();

  const pushFunction = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.filter}</title>
      </Head>
      <div className="container">
        <h1 className="fs-4 m-5 text-center">
          {capitalizeFirstLetter(router.query.filter)}
        </h1>
        <div className="container d-flex flex-wrap align-items-end">
          {props.data[0].data.map((el) => (
            <div className="w-25 p-3" key={el.id}>
              <h2 className="fs-5 text-center mb-3">{el.name}</h2>
              <Image
                layout="responsive"
                priority="true"
                width={200}
                height={200}
                src={el.img}
                alt={el.name}
              />
              <div className="d-flex justify-content-between mt-3">
                <h4 className="fs-6">{el.price}&nbsp;€</h4>
                <h4 className="fs-6">Score&nbsp;:&nbsp;{el.score}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed-bottom p-3 text-end">
          <button className="btn btn-primary" onClick={pushFunction}>
            Tous les cafés en grains
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const url = "http://localhost:3000/api/coffee";
  const res = await fetch(url);
  const data = await res.json();
  const paths = data.coffee.map((e) => {
    return {
      params: { filter: e.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filter = context.params.filter;
  const url = `http://localhost:3000/api/coffee/${filter}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data },
  };
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
