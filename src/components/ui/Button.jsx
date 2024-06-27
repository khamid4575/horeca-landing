const variantClasses = {
  primary: 'rounded-xl text-gray-700 bg-white px-6 py-4 hover:bg-black hover:scale-105 hover:text-white hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300',
  secondary: 'rounded-xl bg-black text-white px-6 py-4 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-black-500/50 transition-all duration-600',
  danger: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
  // Add more variants as needed
};

const Button = ({ variant = 'primary', children, ...props }) => {
  const classes = variantClasses[variant] || variantClasses.primary;

  return (
    <button className={`${classes} font-bold`} {...props}>
      {children}
    </button>
  );
};

export default Button;
