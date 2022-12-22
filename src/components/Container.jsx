function Container({ children, tag = "div", className = "section-container" }) {
  const ContainerTag = tag;
  return <ContainerTag className={className}>{children}</ContainerTag>;
}

export default Container;
