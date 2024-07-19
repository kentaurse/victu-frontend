import React, { useState } from "react";
import "./InputFieldModule.css";

const InputFieldModule = (props) => {
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
      {props?.image && (
        <img
          src={props.image}
          alt="login"
          style={{
            filter: clicked
              ? "invert(41%) sepia(50%) saturate(933%) hue-rotate(211deg) brightness(84%) contrast(100%)"
              : "none",
          }}
        />
      )}

      <input {...props} />
    </div>
  );
};

export default InputFieldModule;
