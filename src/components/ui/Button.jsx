const variantClasses = {
  primary: 'rounded-xl bg-white px-6 py-4 hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-600',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
  // Add more variants as needed
};

const Button = ({ variant = 'primary', children, ...props }) => {
  const classes = variantClasses[variant] || variantClasses.primary;

  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
