import { useState } from "react";
import left_arrow from "../../assets/img/left_arrow.svg";
import Language, { LanguageOption } from "./components/Language";
import Nation, { NationOption } from "./components/Nation";
import Name from "./components/Name";
import StudentId from "./components/StudentId";
import StudentInfo from "./components/StudentInfo";
import Gender from "./components/Gender";
import Birth from "./components/Birth";
import SignupComplete from "./components/SignupComplete";
import styles from "./Signup.module.css";
import useSignupStore from "../../stores/useSignupStore";
export type Step =
  | "Language"
  | "Nation"
  | "Name"
  | "StudentId"
  | "StudentInfo"
  | "Gender"
  | "Birth"
  | "SignupComplete";

const submitSignupData = (): {
  appLanguage: LanguageOption | null;
  studyLanguageFirst: LanguageOption | null;
  studyLanguageSecond: LanguageOption | null;
  nation: NationOption | null;
  name: string | null;
  studentInfo: string | null;
  gender: string | null;
  birth: string | null;
} => {
  const {
    appLanguage,
    studyLanguageFirst,
    studyLanguageSecond,
    nation,
    name,
    studentInfo,
    gender,
    birth,
  } = useSignupStore.getState();

  return {
    appLanguage,
    studyLanguageFirst,
    studyLanguageSecond,
    nation,
    name,
    studentInfo,
    gender,
    birth,
  };
};

const handleSubmit = async () => {
  const signupData = submitSignupData();

  try {
    const response = await fetch("https://kuchat.site/member/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    if (response.ok) {
      // 성공적으로 전송되었을 때의 처리
      console.log("Signup successful!");
    } else {
      // 서버에서 에러를 반환했을 때의 처리
      console.error("Signup failed.");
    }
  } catch (error) {
    // 네트워크 오류 등으로 요청이 실패했을 때의 처리
    console.error("Error:", error);
  }
};

const Signup = () => {
  const [step, setStep] = useState<Step>("Language");

  const handleLanguageConfirm = (
    appLanguage: LanguageOption,
    studyLanguageFirst: LanguageOption,
    studyLanguageSecond: LanguageOption,
  ) => {
    useSignupStore.setState({
      appLanguage: appLanguage,
      studyLanguageFirst: studyLanguageFirst,
      studyLanguageSecond: studyLanguageSecond,
    });
    setStep("Nation");
  };

  const handleNationConfirm = (nation: NationOption) => {
    useSignupStore.setState({ nation: nation });
    setStep("Name");
  };

  const handleNameConfirm = (name: string) => {
    useSignupStore.setState({ name: name });
    setStep("StudentInfo");
  };

  const handleStudentInfoConfirm = (studentInfo: string) => {
    useSignupStore.setState({ studentInfo: studentInfo });
    setStep("Gender");
  };

  const handleGenderConfirm = (gender: string) => {
    useSignupStore.setState({ gender: gender });
    setStep("Birth");
  };

  const handleBirthConfirm = (birth: string) => {
    useSignupStore.setState({ birth: birth });
    handleSubmit();
    setStep("SignupComplete");
  };

  const steps: Record<Step, JSX.Element> = {
    Language: <Language onConfirm={handleLanguageConfirm} />,
    Nation: <Nation onConfirm={handleNationConfirm} />,
    Name: <Name onConfirm={handleNameConfirm} />,
    StudentId: <StudentId />,
    StudentInfo: <StudentInfo onConfirm={handleStudentInfoConfirm} />,
    Gender: <Gender onConfirm={handleGenderConfirm} />,
    Birth: <Birth onConfirm={handleBirthConfirm} />,
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
    </div>
  );
};

export default Signup;
