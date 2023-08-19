import { useState } from "react";
import { AddonsItems } from "../constants/ndex";

const Addons = ({ data, updateFieldHandler }) => {
  const [selectedAddons, setSelectedAddons] = useState(data.addons || []);

  const handleSelect = (addon) => {
    const isAddonSelected = selectedAddons.some(
      (selectedAddon) => selectedAddon.id === addon.id
    );

    let updatedSelectedAddons;

    if (isAddonSelected) {
      updatedSelectedAddons = selectedAddons.filter(
        (selectedAddon) => selectedAddon.id !== addon.id
      );
    } else {
      updatedSelectedAddons = [...selectedAddons, addon];
    }

    setSelectedAddons(updatedSelectedAddons);

    updateFieldHandler("addons", updatedSelectedAddons);
  };

  return (
    <section
      className="bg-White px-6 py-8 rounded-lg flex flex-col 
      gap-y-10 min-[1024px]:p-0"
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-Marine-blue font-bold text-2xl min-[1024px]:text-3xl">
          Pick Add-ons
        </h1>
        <p className="text-Cool-gray">
          Add-ons help enhance your gamming experience.
        </p>
      </div>

      <div className="flex flex-col gap-y-3">
        {AddonsItems.map((item) => (
          <label
            key={item.id}
            htmlFor={item.id}
            className={`border border-solid border-Cool-gray p-3 flex
            rounded-md items-center w-full justify-between
            cursor-pointer transition ease-in-out duration-300 
            ${
              selectedAddons.some(
                (selectedAddon) => selectedAddon.id === item.id
              )
                ? "bg-Magnolia border-Purplish-blue"
                : ""
            }`}
          >
            <div className="flex gap-x-4 items-center">
              <input
                type="checkbox"
                id={item.id}
                checked={selectedAddons.some(
                  (selectedAddon) => selectedAddon.id === item.id
                )}
                onChange={() => {
                  handleSelect({
                    id: item.id,
                    title: item.title,
                    planMonthly: item.monthlyPlan,
                    planYearly: item.yearlyPlan,
                  });
                }}
                className="appearance-none w-6 h-6 border rounded-md
                border-Cool-gray transition ease-in-out duration-300
                checked:bg-Purplish-blue checked:border-Purplish-blue
                checked:after:content-['✔'] after:grid after:place-items-center
                after:text-White"
              />

              <div className=" flex flex-col">
                <p className="text-Marine-blue font-bold">{item.title}</p>
                <p className="text-xs text-Cool-gray">{item.subTitle}</p>
              </div>
            </div>
            <p className="text-Marine-blue">
              {data.planType === "Monthly" ? item.monthlyPlan : item.yearlyPlan}
            </p>
          </label>
        ))}
      </div>
    </section>
  );
};

export default Addons;
