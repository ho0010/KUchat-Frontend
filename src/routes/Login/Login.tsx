import React, { useEffect, useState } from "react";
import Splash from "./Splash";

function Login() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return <div>{showSplash ? <Splash /> : "로그인"}</div>;
}

export default Login;
