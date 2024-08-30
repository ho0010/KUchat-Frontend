import React, { useEffect, useState } from "react";
import Splash from "./Splash";
import styles from "./Login.module.css";
import KUchat_Logo from "../../assets/img/KUchat_logo.svg";
import GoogleImg from "../../assets/img/Google_img.svg";

function Login() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href =
      "https://www.kuchat.site/oauth2/authorization/google";
  };
  return showSplash ? (
    <Splash />
  ) : (
    <div className={styles.root}>
      <div className={styles.ctn}>
        <img src={KUchat_Logo} alt="KU chat logo" />
        <div className={styles.splashText}>KU chat</div>
        <button className={styles.googleBtn} onClick={handleClick}>
          <img src={GoogleImg} alt="Google logo" />
          <div className={styles.googleText}>start with Google</div>
        </button>
      </div>
    </div>
  );
}

export default Login;
