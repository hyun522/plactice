const EllipseIcon = ({ fill = "currentColor", ...props }) => (
  <svg
    width="9"
    height="8"
    viewBox="0 0 9 8"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="4.5" cy="4" r="4" fill={fill} />
  </svg>
);

export default EllipseIcon;
