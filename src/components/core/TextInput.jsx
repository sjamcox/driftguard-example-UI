function TextInput({
  label,
  error,
  helperText,
  className = '',
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-text font-medium mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 rounded-lg
          bg-bg border-2
          ${error ? 'border-red-500' : 'border-text-muted'}
          text-text placeholder:text-text-muted
          focus:outline-none focus:border-primary
          transition-colors duration-200
          ${className}
        `}
        {...props}
      />
      {(error || helperText) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-500' : 'text-text-muted'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}

export default TextInput;
