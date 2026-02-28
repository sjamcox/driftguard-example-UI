function Button({ children, onClick }) {
  return (
    <button
      className="bg-primary hover:bg-primary-hover text-bg font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
