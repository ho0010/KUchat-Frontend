import React from "react";
import { FunnelProps, StepProps } from "../../../hooks/useFunnel";
import Language from "./Language";
import Gender from "./Gender";
import Birth from "./Birth";

export interface SignupSetupInterface {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const ProfileSetup = ({
  steps,
  nextClickHandler,
  Funnel,
  Step,
}: SignupSetupInterface) => {
  return (
    <div>
      <Funnel>
        <Step name="언어">
          <Language onNext={() => nextClickHandler(steps[1])} />
        </Step>

        <Step name="국가">
          <SetupSchool onNext={() => nextClickHandler(steps[2])} />
        </Step>

        <Step name="이름">
          <SetupMajor onNext={() => nextClickHandler(steps[3])} />
        </Step>

        <Step name="학생증 사진">
          <SetupEmail onNext={() => nextClickHandler(steps[4])} />
        </Step>

        <Step name="학과학번">
          <SetupPassword onNext={() => nextClickHandler(steps[5])} />
        </Step>

        <Step name="성별">
          <Gender />
        </Step>
        <Step name="생년월일">
          <Birth />
        </Step>
      </Funnel>
    </div>
  );
};

export default ProfileSetup;
