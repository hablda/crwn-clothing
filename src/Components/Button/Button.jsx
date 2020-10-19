import React from "react";
import "./Button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
