import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupSelectbox from "./SignupSelectbox";
import { Step } from "../Signup";

interface LanguageOption {
  value: string;
  label: string;
}
interface LanguageProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}
const appLanguage: LanguageOption[] = [
  { value: "한국어", label: "한국어" },
  { value: "영어", label: "영어" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
];

const studyLanguage: LanguageOption[] = [
  { value: "한국어", label: "한국어" },
  { value: "영어", label: "영어" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
];

const Language: React.FC<LanguageProps> = ({ setStepValidity }) => {
  const [selectedAppLanguage, setSelectedAppLanguage] =
    useState<LanguageOption | null>(null);

  const handleAppLanguageChange = (option: LanguageOption | null) => {
    setSelectedAppLanguage(option);
  };

  const [selectedStudyLanguage1, setSelectedStudyLanguage1] =
    useState<LanguageOption | null>(null);

  const handleStudyLanguage1Change = (option: LanguageOption | null) => {
    setSelectedStudyLanguage1(option);
  };

  const [selectedStudyLanguage2, setSelectedStudyLanguage2] =
    useState<LanguageOption | null>(null);

  const handleStudyLanguage2Change = (option: LanguageOption | null) => {
    setSelectedStudyLanguage2(option);
  };

  useEffect(() => {
    const isValid =
      selectedAppLanguage !== null &&
      selectedStudyLanguage1 !== null &&
      selectedStudyLanguage2 !== null;
    setStepValidity("Language", isValid);
  }, [selectedAppLanguage, selectedStudyLanguage1, selectedStudyLanguage2]);

  return (
    <div>
      <SignupTitle Title="언어를 선택해주세요" />

      <SignupSelectbox
        title="어플 설정언어"
        options={appLanguage}
        value={selectedAppLanguage}
        onChange={handleAppLanguageChange}
      />

      <div style={{ height: "30px" }} />

      <SignupSelectbox
        title="희망 학습언어"
        options={studyLanguage}
        value={selectedStudyLanguage1}
        onChange={handleStudyLanguage1Change}
      />

      <SignupSelectbox
        options={studyLanguage}
        value={selectedStudyLanguage2}
        onChange={handleStudyLanguage2Change}
      />
    </div>
  );
};

export default Language;
