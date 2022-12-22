function Input({
  children,
  labelClassName = "label",
  inputClassName = "input",
  placeholder,
  type = "text",
  onChange,
  rangeData,
  value,
}) {
  if (type === "range" && rangeData) {
    return (
      <label className={labelClassName}>
        <input
          type="range"
          className={inputClassName}
          min={rangeData.min}
          max={rangeData.max}
          value={value}
          onChange={onChange}
        />
        {children}
      </label>
    );
  } else
    return (
      <label className={labelClassName}>
        {children}
        <input
          placeholder={placeholder}
          type={type}
          className={inputClassName}
          onChange={onChange}
        />
      </label>
    );
}

export default Input;
