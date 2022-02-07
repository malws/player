import React from "react";
import PlayButton from "../shared/PlayButton";
import IconButton from "../shared/IconButton";

function Controls({ previous, next, playing, playToggle }) {
  return (
    <div className="controls">
      <IconButton
        imgSrc={"/images/icons/shuffle_ico.svg"}
        alt={"Shuffle"}
      ></IconButton>
      <IconButton
        action={previous}
        imgSrc={"/images/icons/previous_ico.svg"}
        alt={"Previous"}
      ></IconButton>
      <PlayButton playing={playing} playToggle={playToggle} />
      <IconButton
        action={next}
        imgSrc={"/images/icons/next_ico.svg"}
        alt={"Next"}
      ></IconButton>
      <IconButton
        imgSrc={"/images/icons/repeat_ico.svg"}
        alt={"Repeat"}
      ></IconButton>
    </div>
  );
}

export default Controls;
