import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FaBars, FaPagelines, FaSlack } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <FaSlack className={styles.icon} />
        <h1 className={styles.head}>MARVEL</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href="" className={styles.link}>
            NEWS
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            COMICS
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            CHARACTERS
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            MOVIES
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            TV SHOWS
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            GAMES
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            VIDEOS
          </Link>
        </li>
        <li>
          <Link href="" className={styles.link}>
            MORE
          </Link>
        </li>
      </ul>
      <input className={styles.input} placeholder="search.. "></input>
      <button className={styles.btn}>SIGN IN</button>
      <FaBars className={styles.logo} />
    </div>
  );
}
