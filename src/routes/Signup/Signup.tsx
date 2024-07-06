import React, { useEffect, useState } from "react";
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

export type Step =
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
  const [validSteps, setValidSteps] = useState<{ [key in Step]?: boolean }>({});

  useEffect(() => {
    // StudentId 단계의 유효성을 항상 true로 설정
    setStepValidity("StudentId", true);
  }, []);

  const setStepValidity = (step: Step, isValid: boolean) => {
    setValidSteps((prev) => ({ ...prev, [step]: isValid }));
  };

  const steps: Record<Step, JSX.Element> = {
    Language: <Language setStepValidity={setStepValidity} />,
    Nation: <Nation setStepValidity={setStepValidity} />,
    Name: <Name setStepValidity={setStepValidity} />,
    StudentId: <StudentId />,
    StudentInfo: <StudentInfo />,
    Gender: <Gender />,
    Birth: <Birth />,
    SignupComplete: <SignupComplete />,
  };
  const backBtnEnabled = (step: Step): boolean => {
    if (step == "Language" || step == "SignupComplete") {
      return false;
    } else {
      return true;
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

  const handleConfirmClick = () => {
    if (step === "Language") {
      setStep("Nation");
    } else if (step === "Nation") {
      setStep("Name");
    } else if (step === "Name") {
      setStep("StudentId");
    } else if (step === "StudentId") {
      setStep("StudentInfo");
    } else if (step === "StudentInfo") {
      setStep("Gender");
    } else if (step === "Gender") {
      setStep("Birth");
    } else if (step === "Birth") {
      setStep("SignupComplete");
    }
  };

  const isConfirmBtnEnabled = validSteps[step] === true;

  return (
    <div className={styles.root}>
      <div className={styles.backBtn}>
        {backBtnEnabled(step) && (
          <img
            src={left_arrow}
            onClick={handleBackClick}
            style={{ visibility: backBtnEnabled(step) ? "visible" : "hidden" }}
          />
        )}
      </div>
      <div className={styles.body}>
        <div>{steps[step]}</div>
      </div>
      <div className={styles.bottom}>
        <button
          className={styles.confirmBtn}
          style={{
            backgroundColor: isConfirmBtnEnabled ? "#046B40" : "#c6c6c6",
          }}
          disabled={!isConfirmBtnEnabled}
          onClick={handleConfirmClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Signup;
