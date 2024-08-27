import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import SignupConfirmButton from "./SignupConfirmBotton";

interface StudentInfoProps {
  onConfirm: (major: string, studentId: string) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ onConfirm }) => {
  const [major, setMajor] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleMajorChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setMajor(e);
    }
  };

  const handleStudentIdChange = (e: string | undefined) => {
    if (e !== undefined && e.length <= 20) {
      setStudentId(e);
    }
  };

  const handleConfirm = () => {
    onConfirm(major, studentId);
  };

  useEffect(() => {
    const isMajorValid = major.length >= 4 && major.length <= 20;
    const isStudentIdValid = studentId.length === 9;
    setIsValid(isMajorValid && isStudentIdValid);
  }, [major, studentId]);

  return (
    <div style={{ marginLeft: "30px" }}>
      <SignupTitle Title="학과와 학번을 알려주세요" />
      <div style={{ marginTop: "40px" }}></div>
      <SignupInputbox
        value={major}
        onChange={handleMajorChange}
        placeholder={"학과이름 전체를 입력해주세요."}
      />
      <div style={{ marginTop: "30px" }}></div>
      <SignupInputbox
        value={studentId}
        onChange={handleStudentIdChange}
        warningMessage="학번을 확인해주세요."
        placeholder={"ex) 200012345"}
        maxLength={9}
      />

      <SignupConfirmButton
        onClick={handleConfirm}
        isEnabled={isValid}
        text="확인"
      ></SignupConfirmButton>
    </div>
  );
};

export default StudentInfo;
