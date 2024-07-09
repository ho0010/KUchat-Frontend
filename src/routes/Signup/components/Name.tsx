import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import { Step } from "../Signup";

interface NameProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}

const Name: React.FC<NameProps> = ({ setStepValidity }) => {
  const [Name, setName] = useState<string>("");

  const hanldeNameChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setName(e);
    }
  };

  useEffect(() => {
    const isValid = Name !== "" && Name.length <= 20;
    setStepValidity("Name", isValid);
  }, [Name]);

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="사용하실 이름을 입력해주세요"></SignupTitle>
      <SignupInputbox value={Name} onChange={hanldeNameChange}></SignupInputbox>

      <div style={{ fontSize: "14px", marginTop: "10px" }}>
        20자이하로 입력해주세요.
      </div>
    </div>
  );
};
export default Name;
