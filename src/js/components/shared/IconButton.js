import React from "react";

function IconButton({ action, imgSrc, alt, buttonClass }) {
  return (
    <button
      className={"icon-button" + (buttonClass ? buttonClass : "")}
      onClick={action && action}
    >
      <img className="icon" src={imgSrc} alt={alt} />
    </button>
  );
}

export default IconButton;
