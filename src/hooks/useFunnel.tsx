import React, { ReactElement, ReactNode, useState } from "react";

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);

  // 각 단계를 나타내는 step 컴포너트
  // children을 통해 각 스텝의 컨텐츠 렌더링
  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 funnel
  // find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((child) => child.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
