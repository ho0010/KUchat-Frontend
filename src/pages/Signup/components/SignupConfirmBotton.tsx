import React from "react";

interface SignupConfirmButtonProps {
  onClick?: () => void;
  isEnabled?: boolean;
  text: string;
}

const SignupConfirmButton: React.FC<SignupConfirmButtonProps> = ({
  onClick,
  isEnabled,
  text,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          backgroundColor: isEnabled ? "#046b40" : "#c6c6c6",
          width: "84vw",
          height: "6vh",
          borderRadius: "6px",
          color: "#fff",
          border: "none",
          fontFamily: "Pretendard",
          fontSize: "14px",
          cursor: isEnabled ? "pointer" : "not-allowed",
          bottom: "4vh",
          position: "absolute",
        }}
        onClick={onClick}
        disabled={!isEnabled}
      >
        {text}
      </button>
    </div>
  );
};

export default SignupConfirmButton;
