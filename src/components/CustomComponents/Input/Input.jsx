import React from "react";
import "./Input.scss";

const Input = (props) => {
  const { type, placeholder, value, onChange, required } = props;
  return (
    <div className="input__container">
      {type === "textarea" ? (
        <textarea
          {...props}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete="off"
        />
      ) : (
        <input
          {...props}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Input;
