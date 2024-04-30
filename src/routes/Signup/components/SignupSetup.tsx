import React from 'react'
import { FunnelProps, StepProps } from '../../../hooks/useFunnel';

export interface SignupSetupInterface {
    steps: string[];
    nextClickHandler: (nextStep: string) => void;
    Funnel:React.ComponentType<FunnelProps>;
    Step: React.ComponentType<StepProps>;
}

const SignupSetup = ({steps,nextClickHandler,Funnel,Step}: SignupSetupInterface) => {
  return (
    <div>SignupSetup</div>
  )
}

export default SignupSetup