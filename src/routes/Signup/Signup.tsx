import React from "react";
import { useFunnel } from "../../hooks/useFunnel";
import GenericForm from "../../components/GenericForm";
import SignupSetup from "./components/SignupSetup";

const steps = [
  "언어",
  "국가",
  "이름",
  "학생증 사진",
  "학과학번",
  "성별",
  "생년월일",
];

const Signup = () => {
  const { submitSignup } = useSignup();
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const nextClickHandler = (nextStep: string) => {};
  const prevClickHandler = (prevStep: string) => {};

  return (
    <>
      <div>헤더</div>
      <div>
        레이아웃
        <GenericForm formOptions={{ mode: "onChange" }} onSubmit={submitSignup}>
          <SignupSetup
            steps={steps}
            nextClickHandler={nextClickHandler}
            Funnel={Funnel}
            Step={Step}
          />
        </GenericForm>
      </div>
    </>
  );
};

export default Signup;
