import React from "react";
import styles from "./Splash.module.css";
import KUchatImg from "../../assets/img/KUchatImg.svg";

function Splash() {
  return (
    <div className={styles.root}>
      <div className={styles.ctn}>
        <img src={KUchatImg} alt="KUchatImg" />
        <div className={styles.splashText}>KU chat</div>
      </div>
    </div>
  );
}

export default Splash;
