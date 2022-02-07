import React from "react";
import IconButton from "./IconButton";

function PlayButton({ playing, playToggle }) {
  return (
    <IconButton
      buttonClass={" play"}
      action={playToggle}
      imgSrc={
        playing
          ? "/images/icons/play_active.png"
          : "/images/icons/play_inactive.png"
      }
      alt={"Play"}
    ></IconButton>
  );
}

export default PlayButton;
