import { useEffect, useState } from "react";
import left_arrow from "../../assets/img/left_arrow.svg";
import Language, { LanguageOption } from "./components/Language";
import Nation, { HometownOption } from "./components/Nation";
import Name from "./components/Name";
import StudentIdCard from "./components/StudentIdCard";
import StudentInfo from "./components/StudentInfo";
import Gender from "./components/Gender";
import Birth from "./components/Birth";
import SignupComplete from "./components/SignupComplete";
import styles from "./Signup.module.css";
import useSignupStore from "../../stores/useSignupStore";
import { useLocation, useNavigate } from "react-router-dom";
export type Step =
  | "Language"
  | "Nation"
  | "Name"
  | "StudentIdCard"
  | "StudentInfo"
  | "Gender"
  | "Birth"
  | "SignupComplete";

export interface StudentInfoOption {
  major: string;
  studentId: string;
}

const submitSignupData = (): {
  setLanguage: string | null;
  firstLanguage: string | null;
  secondLanguage: string | null;
  hometown: string | null;
  name: string | null;
  studentId: string | null;
  department: string | null;
  gender: string | null;
  birthday: string | null;
} => {
  const {
    setLanguage,
    firstLanguage,
    secondLanguage,
    hometown,
    name,
    department,
    studentId,
    gender,
    birthday,
  } = useSignupStore.getState();

  return {
    setLanguage: setLanguage ? setLanguage.value : null,
    firstLanguage: firstLanguage ? firstLanguage.value : null,
    secondLanguage: secondLanguage ? secondLanguage.value : null,
    hometown: hometown ? hometown.value : null,
    name: name,
    studentId: studentId,
    department: department,
    gender: gender,
    birthday: birthday,
  };
};

const handleSubmit = async () => {
  const signupData = submitSignupData();

  try {
    const token = localStorage.getItem("guest-token");
    if (!token) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      window.location.href = "/login";
      return;
    }
    const response = await fetch("https://www.kuchat.site/member/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(signupData),
    });

    if (response.ok) {
      console.log("Signup successful!");
    } else {
      console.error("Signup failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const Signup = () => {
  const [step, setStep] = useState<Step>("Language");
  const location = useLocation();
  const navigate = useNavigate();

  // 컴포넌트가 마운트시에 쿼리 파라미터에서 토큰을 추출하고 저장
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("guest-token");

    if (token) {
      localStorage.setItem("guest-token", token); // 토큰을 로컬 스토리지에 저장
      navigate("/signup");
    }
  }, [location.search]);
  const handleLanguageConfirm = (
    setLanguage: LanguageOption,
    firstLanguage: LanguageOption,
    secondLanguage: LanguageOption,
  ) => {
    useSignupStore.setState({
      setLanguage: setLanguage,
      firstLanguage: firstLanguage,
      secondLanguage: secondLanguage,
    });
    setStep("Nation");
  };

  const handleNationConfirm = (hometown: HometownOption) => {
    useSignupStore.setState({ hometown: hometown });
    setStep("Name");
  };

  const handleNameConfirm = (name: string) => {
    useSignupStore.setState({ name: name });
    setStep("StudentInfo");
  };

  const handleStudentInfoConfirm = (department: string, studentId: string) => {
    useSignupStore.setState({ department: department, studentId: studentId });
    setStep("Gender");
  };

  const handleGenderConfirm = (gender: string) => {
    useSignupStore.setState({ gender: gender });
    setStep("Birth");
  };

  const handleBirthConfirm = (birthday: string) => {
    useSignupStore.setState({ birthday: birthday });
    handleSubmit();
    setStep("SignupComplete");
  };

  const steps: Record<Step, JSX.Element> = {
    Language: <Language onConfirm={handleLanguageConfirm} />,
    Nation: <Nation onConfirm={handleNationConfirm} />,
    Name: <Name onConfirm={handleNameConfirm} />,
    StudentIdCard: <StudentIdCard />,
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
    } else if (step === "StudentIdCard") {
      setStep("Name");
    } else if (step === "StudentInfo") {
      setStep("StudentIdCard");
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
