import React from "react";

import styles from "../styles/intro.module.css";

export default function Intro({ url }) {
  return (
    <div className={styles.container}>
      <video
        src={url}
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      />
    </div>
  );
}
