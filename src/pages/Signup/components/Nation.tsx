import React, { useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupSelectbox from "./SignupSelectbox";
import SignupConfirmButton from "./SignupConfirmBotton";

export interface NationOption {
  value: string;
  label: string;
}

interface NationProps {
  onConfirm: (selectedNation: NationOption) => void;
}

const Nations: NationOption[] = [
  { value: "대한민국", label: "대한민국" },
  { value: "미국", label: "미국" },
  { value: "베트남", label: "베트남" },
  { value: "우즈베키스탄", label: "우즈베키스탄" },
  { value: "몽골", label: "몽골" },
  { value: "프랑스", label: "프랑스" },
  { value: "중국", label: "중국" },
  { value: "일본", label: "일본" },
  { value: "기타국가", label: "기타국가" },
];

const Nation: React.FC<NationProps> = ({ onConfirm }) => {
  const [selectedNation, setSelectedNation] = useState<NationOption>(
    Nations[0],
  );

  const handleNationChange = (option: NationOption | null) => {
    if (option === null) return;
    setSelectedNation(option);
  };

  const handleConfirm = () => {
    onConfirm(selectedNation);
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="출신국가를 알려주세요"></SignupTitle>

      <SignupSelectbox
        options={Nations}
        value={selectedNation}
        onChange={handleNationChange}
      />

      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={selectedNation !== null}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};

export default Nation;
