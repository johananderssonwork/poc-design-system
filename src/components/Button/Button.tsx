import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  disabled: boolean;
  handleOnClick: () => void;
  backgroundColor: string;
}

const Button = (props: ButtonProps) => {
  const { label, disabled, handleOnClick, backgroundColor } = props;

  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      onClick={handleOnClick}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};

export default Button;
