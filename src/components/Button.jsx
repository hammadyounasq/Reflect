const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 px-3 bg-dimpupple bg-opacity-30 border border-purple-200 font-roboto text-white font-medium md:text-[14px] text-[10px] text-primary outline-none ${styles} rounded-[15px]`}
    >
      Start free trial
    </button>
  );
};

export default Button;
