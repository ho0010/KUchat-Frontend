import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import { Step } from "../Signup";

interface NameProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}

const Name: React.FC<NameProps> = ({ setStepValidity }) => {
  const [selectedName, setSelectedName] = useState<string>("");

  const hanldeNameChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setSelectedName(e);
    }
  };

  useEffect(() => {
    const isValid = selectedName !== "" && selectedName.length <= 20;
    setStepValidity("Name", isValid);
  }, [selectedName]);

  return (
    <div>
      <SignupTitle Title="사용하실 이름을 입력해주세요"></SignupTitle>
      <SignupInputbox
        value={selectedName}
        onChange={hanldeNameChange}
        warningMessage="20자 이하로 입력해주세요."
      ></SignupInputbox>
    </div>
  );
};
export default Name;
