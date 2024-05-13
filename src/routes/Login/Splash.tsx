import React from "react";
import styles from "./Splash.module.css";
import KUchat_Logo from "../../assets/img/KUchat_logo.svg";

function Splash() {
  return (
    <div className={styles.root}>
      <div className={styles.ctn}>
        <img src={KUchat_Logo} alt="KUchatImg" />
        <div className={styles.splashText}>KU chat</div>
      </div>
    </div>
  );
}

export default Splash;
