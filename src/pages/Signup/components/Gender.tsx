import React, { useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupConfirmButton from "./SignupConfirmBotton";
interface GenderProps {
  onConfirm: (selectedGender: string) => void;
}

const Gender: React.FC<GenderProps> = ({ onConfirm }) => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleConfirm = () => {
    onConfirm(selectedGender);
  };
  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="성별을 알려주세요"></SignupTitle>
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "between",
        }}
      >
        <button
          onClick={() => handleGenderSelect("male")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid",
            borderColor: selectedGender === "male" ? "#046B40" : "#d9d9d9",
            backgroundColor:
              selectedGender === "male" ? "#d4f4d9" : "transparent",
            borderRadius: "16px",
            width: "120px",
          }}
        >
          남자
        </button>
        <div style={{ width: "40px" }}></div>
        <button
          onClick={() => handleGenderSelect("female")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "1px solid",
            borderColor: selectedGender === "female" ? "#046B40" : "#d9d9d9",
            backgroundColor:
              selectedGender === "female" ? "#d4f4d9" : "transparent",
            borderRadius: "16px",
            width: "120px",
          }}
        >
          여자
        </button>
      </div>
      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={selectedGender !== ""}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};

export default Gender;
