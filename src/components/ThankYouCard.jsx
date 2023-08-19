import IconThankYou from "../assets/icon-thank-you.svg";

const ThankYouCard = () => {
  return (
    <section
      className="bg-White px-6 py-20 rounded-lg flex flex-col 
      items-center gap-y-5 scaleUp min-[1024px]:px-0 min-[1024px]:gap-y-8"
    >
      <img
        src={IconThankYou}
        alt="thank you icon"
        className="w-14 h-auto min-[1024px]:w-20"
      />

      <div className="flex flex-col gap-y-4">
        <h1
          className="text-Marine-blue text-center font-bold text-2xl 
          min-[1024px]:text-3xl"
        >
          Thank You!
        </h1>
        <p className="text-Cool-gray text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default ThankYouCard;
