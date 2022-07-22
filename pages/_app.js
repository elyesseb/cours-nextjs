import React from "react";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Container from "../components/container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
