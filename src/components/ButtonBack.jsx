const ButtonBack = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-Cool-gray text-base font-medium transition-all 
      ease-in-out duration-300 hover:text-Marine-blue`}
    >
      Go Back
    </button>
  );
};

export default ButtonBack;
