import React, { useEffect, useState } from "react";
import Splash from "./Splash";
import stlyes from "./Login.module.css";
import KUchatImg from "../../assets/img/KUchatImg.svg";

function Login() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return showSplash ? (
    <Splash />
  ) : (
    <div className={stlyes.root}>
      <div className={stlyes.ctn}>
        <img src={KUchatImg} alt="KU chat logo" />
        <div className={stlyes.splashText}>KU chat</div>
      </div>
    </div>
  );
}

export default Login;
