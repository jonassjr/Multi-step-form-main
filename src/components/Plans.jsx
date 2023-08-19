import { PlansInfo } from "../constants/ndex";
import ToggleButton from "./ToggleButton";

const Plans = ({ data, updateFieldHandler }) => {
  const handleSelect = (plan) => {
    updateFieldHandler("plan", plan);
  };

  return (
    <section
      className="bg-White px-6 py-8 rounded-lg flex flex-col gap-y-8
      min-[1024px]:p-0"
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-Marine-blue font-bold text-2xl min-[1024px]:text-3xl">
            Select your plan
          </h1>
          <p className="text-Cool-gray">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="flex flex-col gap-y-3 min-[1024px]:flex-row min-[1024px]:justify-between">
          {PlansInfo.map((plan) => (
            <label
              key={plan.name}
              type="radio"
              htmlFor={plan.name}
              className={`flex gap-x-4 label cursor-pointer p-4 border border-solid
             border-Light-gray rounded-md transition-colors duration-300 ease-in-out
             min-[1024px]:w-[138px] min-[1024px]:gap-y-[38px] min-[1024px]:flex-col 
             min-[1024px]:justify-between hover:border-Purplish-blue
              ${
                data.plan.name === plan.name
                  ? "bg-Magnolia border-Purplish-blue"
                  : ""
              } `}
            >
              <img src={plan.img} alt="plan icon" className="w-10" />
              <div>
                <h2 className="text-Marine-blue font-medium">{plan.name}</h2>
                <p className="text-Cool-gray">
                  {data.planType === "Monthly" ? plan.month : plan.year}
                </p>
                <p className="text-Marine-blue">
                  {data.planType === "Yearly" && "2 months free"}
                </p>
              </div>
              <input
                id={plan.name}
                type="radio"
                name="plan"
                value={plan.name}
                checked={data.plan === plan.name}
                className="absolute opacity-0"
                onChange={() => {
                  handleSelect({
                    id: plan.name,
                    name: plan.name,
                    month: plan.month,
                    year: plan.year,
                  });
                }}
              />
            </label>
          ))}
        </div>
      </div>
      <ToggleButton data={data} updateFieldHandler={updateFieldHandler} />
    </section>
  );
};

export default Plans;
