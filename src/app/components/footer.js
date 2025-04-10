import React from "react";
import styles from "../styles/footer.module.css";
import {
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {" "}
      <div className={styles.main}>
        <div className={styles.div1}>
          <h1 className={styles.head}>M</h1>
        </div>
        <div className={styles.div2}>
          <p>ABOUT MARVEL</p>
          <p>HELP FAQ</p>
          <p>CAREERS</p>
          <p>INTERNSHIPS</p>
        </div>
        <div className={styles.div3}>
          <p>ADVERTISING</p>
          <p>DISNEY+</p>
          <p>MARVELHQ.COM</p>
          <p>REDEEM DIGITAL</p>
          <p>COMICS</p>
        </div>
        <div className={styles.div4}>
          <p>MARVEL UNLIMITED</p>
          <p>ACCESS OVER</p>
          <p>30000 DIGITAL COMICS</p>
          <p>SUPER HEROS</p>
          <p>UPCOMINGS</p>
        </div>
        <div className={styles.div5}>
          <div className={styles.icons}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaTumblr className={styles.icon} />
            <FaYoutube className={styles.icon} />
            <FaSnapchat className={styles.icon} />
            <FaPinterest className={styles.icon} />
            <FaTiktok className={styles.icon} />
            <FaTwitch className={styles.icon} />
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", padding: "20px" }}>
        Designed and developed by anoop kumar chaudhary
      </p>
    </div>
  );
}
