const Button = ({ text, link }) => {
  return (
    <button 
      className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300"
      href={link}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;

