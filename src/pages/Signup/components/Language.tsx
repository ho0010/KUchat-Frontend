import React, { useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupSelectbox from "./SignupSelectbox";
import SignupConfirmButton from "./SignupConfirmBotton";

export interface LanguageOption {
  value: string;
  label: string;
}
interface LanguageProps {
  onConfirm: (
    appLanguage: LanguageOption,
    studyLanguageFirst: LanguageOption,
    studyLanguageSecond: LanguageOption,
  ) => void;
}
const appLanguageOptions: LanguageOption[] = [
  { value: "한국어", label: "한국어" },
  { value: "영어", label: "영어" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
];

const studyLanguageOptions: LanguageOption[] = [
  { value: "한국어", label: "한국어" },
  { value: "영어", label: "영어" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
];

const Language: React.FC<LanguageProps> = ({ onConfirm }) => {
  const [appLanguage, setAppLanguage] = useState<LanguageOption>(
    appLanguageOptions[0],
  );
  const [studyLanguageFirst, setStudyLanguageFirst] = useState<LanguageOption>(
    studyLanguageOptions[1],
  );
  const [studyLanguageSecond, setStudyLanguageSecond] =
    useState<LanguageOption>(studyLanguageOptions[2]);

  const handleAppLanguageChange = (option: LanguageOption | null) => {
    if (option === null) return;
    setAppLanguage(option);
  };
  const handleStudyLanguageFirstChange = (option: LanguageOption | null) => {
    if (option === null) return;
    setStudyLanguageFirst(option);
  };
  const handleStudyLanguageSecondChange = (option: LanguageOption | null) => {
    if (option === null) return;
    setStudyLanguageSecond(option);
  };
  const handleConfirm = () => {
    onConfirm(appLanguage, studyLanguageFirst, studyLanguageSecond);
  };
  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="언어를 선택해주세요" />

      <SignupSelectbox
        title="어플 설정언어"
        options={appLanguageOptions}
        value={appLanguage}
        onChange={handleAppLanguageChange}
      />

      <div style={{ height: "30px" }} />

      <SignupSelectbox
        title="희망 학습언어"
        options={studyLanguageOptions}
        value={studyLanguageFirst}
        onChange={handleStudyLanguageFirstChange}
      />

      <SignupSelectbox
        options={studyLanguageOptions}
        value={studyLanguageSecond}
        onChange={handleStudyLanguageSecondChange}
      />

      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={
          appLanguage !== null &&
          studyLanguageFirst !== null &&
          studyLanguageSecond !== null
        }
        text="확인"
      />
    </div>
  );
};

export default Language;
