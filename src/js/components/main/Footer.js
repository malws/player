import React from "react";
import IconButton from "../shared/IconButton";
import SongDuration from "../shared/SongDuration";

function Footer({ togglePlaylist, nextSong }) {
  return (
    <footer className="player-footer">
      <IconButton
        action={togglePlaylist}
        imgSrc={"/images/icons/playlist_ico.svg"}
        alt={"View playlist"}
      ></IconButton>
      <div className="player-footer__next-song">
        <h3>NEXT</h3>
        <span className="player-footer__next-song--title">
          {nextSong.title}
        </span>
      </div>
      <SongDuration key={"duration"} durationInSec={nextSong.duration} />
    </footer>
  );
}

export default Footer;
