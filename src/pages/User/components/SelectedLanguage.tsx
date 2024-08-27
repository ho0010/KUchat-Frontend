import React from "react";

interface SelectedLanguageProps {
  language: string;
  state: boolean;
}

const SelectedLanguage: React.FC<SelectedLanguageProps> = ({
  language,
  state,
}) => {
  return (
    <div
      style={{
        backgroundColor: state ? "#D4F4D9" : "#d9d9d9",
        color: state ? "#038A52" : "#888888",
        borderRadius: "12px",
        width: "60px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "14px",
        margin: "12px 0 0 0",
      }}
    >
      {language}
    </div>
  );
};

export default SelectedLanguage;
