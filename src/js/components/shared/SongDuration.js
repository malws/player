import React from "react";
import * as conv from "../../helpers/converters";

function SongDuration({ durationInSec }) {
  return (
    <span className="song-duration">
      {conv.convertDurationToMinSec(durationInSec)}
    </span>
  );
}

export default SongDuration;
