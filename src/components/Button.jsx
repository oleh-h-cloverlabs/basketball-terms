function Button({ onClick, children, className = "button", type = "button" }) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
