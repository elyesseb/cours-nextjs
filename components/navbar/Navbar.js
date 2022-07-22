import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/filter">
        <a>Filter</a>
      </Link>
      <Link href="/random">
        <a>Random</a>
      </Link>
      <Link href="/add">
        <a>Add</a>
      </Link>
      <Link href="/galery">
        <a>Galery</a>
      </Link>
      <Link href="/api/coffee">
        <a>API</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
      <Link href="/isr">
        <a>ISR</a>
      </Link>
    </nav>
  );
}
