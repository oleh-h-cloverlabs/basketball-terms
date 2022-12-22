function Title({ priority = 2, className = "title", children }) {
  const TitleTag = `h${priority}`;
  return <TitleTag className={className}>{children}</TitleTag>;
}

export default Title;
