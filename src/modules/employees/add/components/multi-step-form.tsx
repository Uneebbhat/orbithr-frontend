"use client";

import Step1 from "./step1/step1";
import Step2 from "./step2/step2";

import { useState } from "react";
import Step3 from "./step3/step3";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <>
      {currentStep === 0 && <Step1 onNext={nextStep} />}
      {currentStep === 1 && <Step2 onNext={nextStep} onPrev={prevStep} />}
      {currentStep === 2 && <Step3 />}
    </>
  );
}
