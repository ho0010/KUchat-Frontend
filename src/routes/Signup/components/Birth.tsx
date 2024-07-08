import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import { Step } from "../Signup";

interface BirthProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}

const Name: React.FC<BirthProps> = ({ setStepValidity }) => {
  const [Birth, setBirth] = useState<string>("");

  const hanldeBirthChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setBirth(e);
    }
  };

  useEffect(() => {
    const isValid = Birth !== "" && Birth.length == 6;
    setStepValidity("Birth", isValid);
  }, [Birth]);

  return (
    <div>
      <SignupTitle Title="생년월일을 알려주세요"></SignupTitle>
      <SignupInputbox
        value={Birth}
        onChange={hanldeBirthChange}
        warningMessage="6자로 입력해주세요."
        placeholder="ex) YYMMDD"
        maxLength={6}
      ></SignupInputbox>
    </div>
  );
};
export default Name;
