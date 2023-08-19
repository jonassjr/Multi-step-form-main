const ToggleButton = ({ data, updateFieldHandler }) => {
  const toggleButton = () => {
    const newPlanType = data.planType === "Monthly" ? "Yearly" : "Monthly";
    updateFieldHandler("planType", newPlanType);
  };

  return (
    <div
      className="flex justify-center items-center gap-x-2 font-bold
bg-Magnolia py-3 rounded-md "
    >
      <span
        className={`${
          data.planType === "Monthly" ? "text-Marine-blue" : "text-Cool-gray"
        } transition duration-300`}
      >
        Monthly
      </span>

      <div className="flex flex-col justify-center items-center ">
        <div
          className="w-10 h-5 flex items-center bg-Marine-blue 
      rounded-full p-1 cursor-pointer"
          onClick={() => {
            toggleButton();
          }}
        >
          <div
            className={`bg-White h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out" +
        ${data.planType === "Yearly" ? "toggleClass" : ""}`}
          ></div>
        </div>
      </div>

      <span
        className={`${
          data.planType === "Yearly" ? "text-Marine-blue" : "text-Cool-gray"
        } transition duration-300`}
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleButton;
