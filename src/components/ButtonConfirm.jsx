const ButtonConfirm = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-10 min-[1024px]:w-[123px] min-[1024px]:h-12 bg-Purplish-blue text-White rounded-md
      grid place-items-center text-base hover:opacity-80 transition-all
      ease-in-out duration-300"
    >
      Confirm
    </button>
  );
};

export default ButtonConfirm;
