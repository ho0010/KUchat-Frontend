import React, { useEffect, useState } from "react";
import SignupTitle from "./SignupTitle";
import SignupInputbox from "./SignupInputbox";
import { Step } from "../Signup";

interface StudentInfoProps {
  setStepValidity: (step: Step, isValid: boolean) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ setStepValidity }) => {
  const [major, setMajor] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");

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
  useEffect(() => {
    const isValid =
      major !== "" &&
      major.length <= 20 &&
      major.length >= 4 &&
      studentId !== "" &&
      studentId.length == 9;

    setStepValidity("StudentInfo", isValid);
  }, [major, studentId]);

  return (
    <div>
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
    </div>
  );
};

export default StudentInfo;
