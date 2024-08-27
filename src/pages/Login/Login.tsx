import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "./Splash";
import styles from "./Login.module.css";
import KUchat_Logo from "../../assets/img/KUchat_logo.svg";

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
        <img src={KUchat_Logo} alt="KU chat logo" />
        <div className={styles.splashText}>KU chat</div>
        <button onClick={handleClick}>d</button>
      </div>
    </div>
  );
}

export default Login;
