import React, { useState } from "react";
import left_arrow from "../../assets/img/left_arrow.svg";
import Language from "./components/Language";
import Nation from "./components/Nation";
import Name from "./components/Name";
import StudentId from "./components/StudentId";
import StudentInfo from "./components/StudentInfo";
import Gender from "./components/Gender";
import Birth from "./components/Birth";
import SignupComplete from "./components/SignupComplete";
import styles from "./Signup.module.css";

type Step =
  | "Language"
  | "Nation"
  | "Name"
  | "StudentId"
  | "StudentInfo"
  | "Gender"
  | "Birth"
  | "SignupComplete";

const Signup = () => {
  const [step, setStep] = useState<Step>("Language");
  const steps: Record<Step, JSX.Element> = {
    Language: <Language />,
    Nation: <Nation />,
    Name: <Name />,
    StudentId: <StudentId />,
    StudentInfo: <StudentInfo />,
    Gender: <Gender />,
    Birth: <Birth />,
    SignupComplete: <SignupComplete />,
  };

  const backBtnEnabled = (step: Step) => {
    if (step === "Language" || step === "SignupComplete") {
      return "false";
    } else {
      return "true";
    }
  };

  const handleBackClick = () => {
    if (step === "Nation") {
      setStep("Language");
    } else if (step === "Name") {
      setStep("Nation");
    } else if (step === "StudentId") {
      setStep("Name");
    } else if (step === "StudentInfo") {
      setStep("StudentId");
    } else if (step === "Gender") {
      setStep("StudentInfo");
    } else if (step === "Birth") {
      setStep("Gender");
    } else if (step === "SignupComplete") {
      setStep("Birth");
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.backBtn}>
        {backBtnEnabled(step) && (
          <img src={left_arrow} onClick={handleBackClick} />
        )}
      </div>
      <div className={styles.body}>
        <div>{steps[step]}</div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.confirmBtn}>확인</button>
      </div>
    </div>
  );
};

export default Signup;
