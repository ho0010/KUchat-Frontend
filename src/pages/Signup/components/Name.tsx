import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import SignupConfirmButton from "./SignupConfirmBotton";

interface NameProps {
  onConfirm: (Name: string) => void;
}

const Name: React.FC<NameProps> = ({ onConfirm }) => {
  const [Name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const hanldeNameChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setName(e);
    }
  };

  useEffect(() => {
    const isNameValid = Name !== "" && Name.length <= 20;
    setIsNameValid(isNameValid);
  }, [Name]);

  const handleConfirm = () => {
    onConfirm(Name);
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="사용하실 이름을 입력해주세요"></SignupTitle>
      <SignupInputbox value={Name} onChange={hanldeNameChange}></SignupInputbox>

      <div style={{ fontSize: "14px", marginTop: "10px" }}>
        20자이하로 입력해주세요.
      </div>
      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={isNameValid}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};
export default Name;
