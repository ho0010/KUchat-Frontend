import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import { Step } from "../Signup";
interface GenderProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}

const Gender: React.FC<GenderProps> = ({ setStepValidity }) => {
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined,
  );

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  useEffect(() => {
    const isValid = selectedGender !== undefined;
    setStepValidity("Gender", isValid);
  }, [selectedGender]);

  return (
    <div>
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
    </div>
  );
};

export default Gender;
