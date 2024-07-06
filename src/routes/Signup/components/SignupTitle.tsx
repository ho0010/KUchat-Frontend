import React from "react";

interface SignupTitleProps {
  Title: string;
}

const SignupTitle: React.FC<SignupTitleProps> = ({ Title }) => {
  const titleStyle: React.CSSProperties = {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "30px",
  };

  return <div style={titleStyle}>{Title}</div>;
};

export default SignupTitle;
