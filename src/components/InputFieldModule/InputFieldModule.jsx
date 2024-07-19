import React, { useState } from "react";
import "./InputFieldModule.css";

const InputFieldModule = ({ image, placeholder, type }) => {
  const [clicked, setClicked] = useState(false);

  function setIconColor() {
    setClicked(true);
  }

  function removeIconColor() {
    setClicked(false);
  }

  return (
    <div
      className="inputModule"
      onClick={setIconColor}
      onMouseLeave={removeIconColor}
    >
      <img
        src={image}
        alt="login"
        style={{
          filter: clicked
            ? "invert(41%) sepia(50%) saturate(933%) hue-rotate(211deg) brightness(84%) contrast(100%)"
            : "none",
        }}
      />
      <input
        type={type}
        placeholder={placeholder}
        onClick={setIconColor}
        onMouseLeave={removeIconColor}
      />
    </div>
  );
};

export default InputFieldModule;
