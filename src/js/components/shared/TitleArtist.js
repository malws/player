import React from "react";
import * as viewHelper from "../../helpers/viewHelper";

function TitleArtist({ album, currentSongNo }) {
  return (
    <div className="title-artist">
      <h1>{viewHelper.getCurrentSongTitle(album, currentSongNo)}</h1>
      <h3>{viewHelper.getCurrentArtist(album)}</h3>
    </div>
  );
}

export default TitleArtist;
