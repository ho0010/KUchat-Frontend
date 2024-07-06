import React from "react";
import left_arrow from "../assets/img/left_arrow.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>text</div>
      <img src={left_arrow} onClick={() => navigate(-1)} />
    </div>
  );
};

export default Header;
