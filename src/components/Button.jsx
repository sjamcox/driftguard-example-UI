function Button({ children, onClick }) {
  return (
    <button
      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
