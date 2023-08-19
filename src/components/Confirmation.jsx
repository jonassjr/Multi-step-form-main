const Confirmation = ({ formData, changePlan }) => {
  const parsePrice = (priceString) => {
    const numericValue = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const calculateTotal = () => {
    const addonTotal = formData.addons.reduce((total, addon) => {
      return (
        total +
        (formData.planType === "Monthly"
          ? parsePrice(addon.planMonthly)
          : parsePrice(addon.planYearly))
      );
    }, 0);

    return addonTotal;
  };

  const addonsTotal = calculateTotal();

  const total =
    addonsTotal +
    (formData.planType === "Monthly"
      ? parsePrice(formData.plan.month)
      : parsePrice(formData.plan.year));

  return (
    <section
      className="bg-White px-6 py-8 rounded-lg flex flex-col gap-y-7
      min-[1024px]:p-0"
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-Marine-blue font-bold text-2xl min-[1024px]:text-3xl">
            Finishing Up
          </h1>
          <p className="text-Cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="bg-Magnolia rounded-md px-4">
          <div className="flex w-full justify-between items-center border-b-2 py-4">
            <div>
              <p className="text-Marine-blue font-bold">
                {formData.plan.name} <span>({formData.planType})</span>
              </p>
              <button
                className="text-Cool-gray underline font-medium
               hover:text-Purplish-blue"
                onClick={() => changePlan()}
              >
                Change
              </button>
            </div>

            <p className="text-Marine-blue font-bold">
              {formData.planType === "Monthly"
                ? formData.plan.month
                : formData.plan.year}
            </p>
          </div>

          <div className="text-Cool-gray flex flex-col gap-y-4 py-4">
            {formData.addons.map((addon) => (
              <p
                key={addon.id}
                className="flex w-full justify-between items-center"
              >
                {addon.title}{" "}
                <span className="text-Marine-blue font-medium">
                  {formData.planType === "Monthly"
                    ? addon.planMonthly
                    : addon.planYearly}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="text-Cool-gray flex w-full justify-between items-center px-4">
        <p>Total (per {formData.planType === "Monthly" ? "month" : "year"})</p>
        <p className="text-Purplish-blue font-bold text-lg">
          ${total}/{formData.planType === "Monthly" ? "mo" : "yr"}
        </p>
      </div>
    </section>
  );
};

export default Confirmation;
