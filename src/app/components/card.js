import React from "react";
import styles from "../styles/card.module.css";

function Card({ url, name, content }) {
  return (
    <div style={{ backgroundImage: `url(${url})` }} className={styles.main}>
      <h1 className={styles.head}>{name}</h1>
      <h2 className={styles.content}>{content}</h2>
    </div>
  );
}

export default React.memo(Card);
