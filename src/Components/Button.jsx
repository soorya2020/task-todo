const Button = ({ children, className = "", disabled = false, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`
        w-full py-3 font-black rounded-sm transition-all transform
        ${disabled ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600 active:scale-[0.98]"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
