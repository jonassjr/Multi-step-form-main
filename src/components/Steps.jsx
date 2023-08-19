import { StepsItems } from "../constants/ndex";
import sideBarMobile from "../assets/bg-sidebar-mobile.svg";
import sideBarDesktop from "../assets/bg-sidebar-desktop.svg";

const Steps = ({ currentStep }) => {
  return (
    <div className="relative">
      <img
        src={sideBarMobile}
        alt="background image"
        className="hidden max-[1023px]:block"
      />
      <img
        src={sideBarDesktop}
        alt="background image"
        className="hidden min-[1024px]:block "
      />
      <div
        className="flex w-full justify-center gap-x-4 absolute top-8 
        min-[1024px]:top-10 min-[1024px]:flex-col min-[1024px]:gap-y-4 
        min-[1024px]:left-8"
      >
        {StepsItems.map((step) => (
          <div
            key={step.id}
            className="min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-x-4"
          >
            <div
              className={`text-White w-9 h-9 border-2 border-solid
              border-White grid place-items-center rounded-full transition-colors 
              ease-in-out duration-500
              text-base font-medium ${currentStep === step.id ? "active" : ""}`}
            >
              {step.id}
            </div>
            <div className="hidden min-[1024px]:flex min-[1024px]:flex-col">
              <p className="text-Light-gray ">{step.subTitle}</p>
              <p className="text-White font-medium">{step.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
