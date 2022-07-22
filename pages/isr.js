import React from "react";

// incremental static generation
export default function Isr(props) {
  return (
    <div className="container pt-3">
      <h1 className="fs-4 mt-4">{props.data.quotes[0].text}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
  const res = await fetch(url);
  const data = await res.json();

  // gestion d'erreur avec redirection page-not-found

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  // gestion d'erreur avec redirection page

  if (data.length === 0) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}
