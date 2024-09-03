import React, { useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupSelectbox from "./SignupSelectbox";
import SignupConfirmButton from "./SignupConfirmBotton";

export interface HometownOption {
  value: string;
  label: string;
}

interface HometownProps {
  onConfirm: (selectedNation: HometownOption) => void;
}

const Nations: HometownOption[] = [
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

const Nation: React.FC<HometownProps> = ({ onConfirm }) => {
  const [selectedHometown, setSelectedHometown] = useState<HometownOption>(
    Nations[0],
  );

  const handleHometownChange = (option: HometownOption | null) => {
    if (option === null) return;
    setSelectedHometown(option);
  };

  const handleConfirm = () => {
    onConfirm(selectedHometown);
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="출신국가를 알려주세요"></SignupTitle>

      <SignupSelectbox
        options={Nations}
        value={selectedHometown}
        onChange={handleHometownChange}
      />

      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={selectedHometown !== null}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};

export default Nation;
