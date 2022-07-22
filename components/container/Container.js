import React from "react";
import Navbar from "../navbar/Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
