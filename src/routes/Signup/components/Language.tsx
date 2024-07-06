import React, { useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupSelectbox from "./SignupSelectbox";

interface LanguageOption {
  value: string;
  label: string;
}

const appLanguage: LanguageOption[] = [
  { value: "한국어", label: "한국어" },
  { value: "영어", label: "영어" },
  { value: "중국어", label: "중국어" },
  { value: "일본어", label: "일본어" },
];

const Language = () => {
  const [selectedAppLanguage, setSelectedAppLanguage] =
    useState<LanguageOption | null>(appLanguage[0]);

  const handleAppLanguageChange = (option: LanguageOption | null) => {
    setSelectedAppLanguage(option);
  };

  return (
    <div>
      <SignupTitle Title="언어를 선택해주세요" />

      <SignupSelectbox
        title="어플 설정언어"
        options={appLanguage}
        value={selectedAppLanguage}
        onChange={handleAppLanguageChange}
      />
    </div>
  );
};

export default Language;
