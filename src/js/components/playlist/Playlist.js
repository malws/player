import React from "react";
import TitleArtist from "../shared/TitleArtist";
import PlayButton from "../shared/PlayButton";
import GoBackButton from "../shared/GoBackButton";
import IconButton from "../shared/IconButton";
import SongsList from "./SongsList";
import * as viewHelper from "../../helpers/viewHelper";

const Playlist = ({
  visible,
  toggle,
  album,
  currentSongNo,
  playing,
  playToggle,
}) => {
  function getPlaylistSongs() {
    if (album === null || currentSongNo === null) return;
    let nextSongNo = viewHelper.getNextSongNo(album, currentSongNo);
    return album.songs.slice(nextSongNo);
  }

  return (
    <div
      className="playlist-container"
      style={{ height: visible ? "100%" : 0, opacity: visible ? "1" : 0 }}
    >
      <div className="playlist" style={{ height: "100%" }}>
        <header className="playlist__header">
          <GoBackButton />
          <TitleArtist album={album} currentSongNo={currentSongNo} />
          <PlayButton playing={playing} playToggle={playToggle} />
        </header>
        <div className="playlist__content">
          <SongsList songs={getPlaylistSongs()} />
        </div>
        <footer className="playlist__footer">
          <button className="playlist__footer--shuffle">Shuffle play</button>
          <IconButton
            action={toggle}
            imgSrc={"/images/icons/hide_ico.svg"}
            alt={"Hide playlist"}
          ></IconButton>
        </footer>
      </div>
    </div>
  );
};

export default Playlist;
