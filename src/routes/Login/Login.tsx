import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "./Splash";
import styles from "./Login.module.css";
import KUchatImg from "../../assets/img/KUchatImg.svg";

function Login() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/signup");
  };
  return showSplash ? (
    <Splash />
  ) : (
    <div className={styles.root}>
      <div className={styles.ctn}>
        <img src={KUchatImg} alt="KU chat logo" />
        <div className={styles.splashText}>KU chat</div>
        <button onClick={handleClick}>d</button>
      </div>
    </div>
  );
}

export default Login;
