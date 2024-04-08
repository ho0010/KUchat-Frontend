import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Home.styles";

function Home() {
  return (
    <div>
      <Container>안녕하세요 !</Container>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Home;
