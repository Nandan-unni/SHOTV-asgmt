import React from "react";
import FeatherIcons from "feather-icons-react";

const FeatherIcon = ({
  icon = "square",
  size = 18,
  className = "",
  onClick = () => {},
}) => {
  return (
    <FeatherIcons
      icon={icon}
      size={size}
      className={className}
      onClick={onClick}
    />
  );
};

export default FeatherIcon;
