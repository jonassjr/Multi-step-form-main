import { useState } from "react";
import {
  ButtonNext,
  ButtonBack,
  Steps,
  Plans,
  PersonalInfo,
  Confirmation,
  ButtonConfirm,
  ThankYouCard,
} from "./components";

import Addons from "./components/Addons";

const formTemplate = {
  name: null,
  email: "",
  phone: "",
  plan: { id: "Arcade", name: "Arcade", month: "$9/mo", year: "$90/yr" },
  planType: "Monthly",
  addons: [],
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(formTemplate);
  const [confirmation, setConfirmation] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const validateEmail = (email) => {
    return emailPattern.test(email);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      const nameError = !data.name;
      const emailError = !data.email;
      const emailValid = !validateEmail(data.email);
      const phoneError = !data.phone;

      if (nameError || emailError || phoneError || emailValid) {
        setValidationErrors({
          name: nameError,
          email: emailError,
          emailValid: emailValid,
          phone: phoneError,
        });

        return;
      }

      setValidationErrors({});
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const changePlan = () => {
    setCurrentStep(2);
  };

  const confirm = () => {
    setConfirmation(true);
  };

  return (
    <main className="min-h-screen flex justify-center min-[1024px]:items-center">
      <div
        className="w-full flex flex-col justify-between
      min-[1024px]:bg-White min-[1024px]:flex-row min-[1024px]:p-4 
        min-[1024px]:w-[950px] min-[1024px]:mx-auto rounded-xl 
        min-[1024px]:my-auto min-[1024px]:shadow-xl"
      >
        <Steps currentStep={currentStep} />

        <div
          className="min-[1024px]:flex min-[1024px]:flex-col max-[1023px]:h-full
          min-[1024px]:justify-between min-[1024px]:mx-auto min-[1024px]:pt-14 "
        >
          <form
            className="w-full max-w-[450px] mx-auto px-4 min-[1024px]:h-full
            min-[1024px]:top-0 min-[1024px]:p-0 relative -top-16
            min-[1024px]:w-[450px]"
          >
            {currentStep === 1 ? (
              <PersonalInfo
                data={data}
                updateFieldHandler={updateFieldHandler}
                validationErrors={validationErrors}
                validateEmail={validateEmail}
                setValidationErrors={setValidationErrors}
              />
            ) : (
              ""
            )}
            {currentStep === 2 ? (
              <Plans data={data} updateFieldHandler={updateFieldHandler} />
            ) : (
              ""
            )}
            {currentStep === 3 ? (
              <Addons data={data} updateFieldHandler={updateFieldHandler} />
            ) : (
              ""
            )}

            {currentStep === 4 && !confirmation && (
              <Confirmation formData={data} changePlan={changePlan} />
            )}

            {confirmation && <ThankYouCard />}
          </form>

          {!confirmation && (
            <footer
              className={`hidden min-[1024px]:flex w-full bg-White pb-4 
                ${currentStep === 1 ? "justify-end" : " justify-between"}`}
            >
              {currentStep > 1 && <ButtonBack onClick={prevStep} />}
              {currentStep >= 1 && currentStep <= 3 && (
                <ButtonNext onClick={nextStep} />
              )}
              {currentStep === 4 && <ButtonConfirm onClick={confirm} />}
            </footer>
          )}
        </div>

        {!confirmation && (
          <footer
            className={`min-[1024px]:hidden flex w-full bg-White py-4 px-4
          ${currentStep === 1 ? "justify-end" : " justify-between"}`}
          >
            {currentStep > 1 && <ButtonBack onClick={prevStep} />}
            {currentStep >= 1 && currentStep <= 3 && (
              <ButtonNext onClick={nextStep} />
            )}
            {currentStep === 4 && <ButtonConfirm onClick={confirm} />}
          </footer>
        )}
      </div>
    </main>
  );
}

export default App;
