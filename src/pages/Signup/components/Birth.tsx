import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import SignupConfirmButton from "./SignupConfirmBotton";

interface BirthProps {
  onConfirm: (Birth: string) => void;
}

const Name: React.FC<BirthProps> = ({ onConfirm }) => {
  const [Birth, setBirth] = useState<string>("");
  const [isBirthValid, setIsBirthValid] = useState<boolean>(false);

  const hanldeBirthChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setBirth(e);
    }
  };

  useEffect(() => {
    const isBirthValid = Birth !== "" && Birth.length == 6;
    setIsBirthValid(isBirthValid);
  }, [Birth]);

  const handleConfirm = () => {
    onConfirm(Birth);
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="생년월일을 알려주세요"></SignupTitle>
      <SignupInputbox
        value={Birth}
        onChange={hanldeBirthChange}
        warningMessage="6자로 입력해주세요."
        placeholder="ex) YYMMDD"
        maxLength={6}
      ></SignupInputbox>
      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={isBirthValid}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};
export default Name;
