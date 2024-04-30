import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>안녕하세요 !</div>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Home;
