function PersonalInfo({
  data,
  updateFieldHandler,
  validationErrors,
  validateEmail,
  setValidationErrors,
}) {
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    updateFieldHandler("email", newEmail);

    if (newEmail.trim() === "") {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: true,
        emailValid: false,
      }));
    } else if (!validateEmail(newEmail)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: false,
        emailValid: true,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: false,
        emailValid: false,
      }));
    }
  };

  return (
    <section
      className="bg-White px-6 py-8 rounded-lg flex flex-col gap-y-10
      min-[1024px]:p-0"
    >
      <div className="flex flex-col gap-y-2">
        <h1 className="text-Marine-blue font-bold text-2xl min-[1024px]:text-3xl">
          Personal info
        </h1>
        <p className="text-Cool-gray">
          Please provide your name, email address, phone number.
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <label
            className="text-Marine-blue flex justify-between"
            htmlFor="name"
          >
            Name
            {validationErrors.name && !data.name && (
              <span className="text-Strawberry-red transition ease-in-out duration-500 font-medium">
                This field is required
              </span>
            )}
          </label>

          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            value={data.name || ""}
            onChange={(e) => {
              updateFieldHandler(
                "name",
                e.target.value.replace(/[^a-zA-ZÀ-ÿ]/g, "")
              );
            }}
            className={`border-2 border-solid border-Light-gray transition duration-500
            rounded-md py-2 px-4 outline-none focus:border-Purplish-blue ${
              !data.name &&
              validationErrors.name &&
              "border-Strawberry-red border-2"
            }`}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label
            className="text-Marine-blue flex justify-between"
            htmlFor="email"
          >
            Email Address
            {validationErrors.email && !data.email && (
              <span className="text-Strawberry-red transition ease-in-out duration-500 font-medium">
                This field is required
              </span>
            )}
            {!validationErrors.email && validationErrors.emailValid && (
              <span className="text-Strawberry-red transition ease-in-out duration-500 font-medium">
                exemple@email.com
              </span>
            )}
          </label>
          <input
            type="email"
            id="email"
            value={data.email || ""}
            onChange={handleEmailChange}
            placeholder="e.g. stephenking@loren.com"
            className={`border-2 border-solid border-Light-gray transition duration-500
            rounded-md py-2 px-4 outline-none focus:border-Purplish-blue 
            ${
              !data.email && validationErrors.email
                ? "border-Strawberry-red"
                : ""
            }
            ${validationErrors.emailValid ? "border-Strawberry-red" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label
            className="text-Marine-blue flex justify-between"
            htmlFor="phone"
          >
            Phone Number
            {validationErrors.phone && !data.phone && (
              <span className="text-Strawberry-red transition ease-in-out duration-500 font-medium">
                This field is required
              </span>
            )}
          </label>
          <input
            type="text"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={data.phone || ""}
            onChange={(e) =>
              updateFieldHandler("phone", e.target.value.replace(/\D/g, ""))
            }
            className={`border-2 border-solid border-Light-gray transition duration-500
            rounded-md py-2 px-4 outline-none focus:border-Purplish-blue ${
              validationErrors.phone && !data.phone && "border-Strawberry-red"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
