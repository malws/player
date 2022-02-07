import { useState, useEffect } from "react";
import axios from "axios";
import "./scss/App.scss";
import Player from "./js/components/main/Player";
import ViewMore from "./js/components/viewMore/ViewMore";
import Playlist from "./js/components/playlist/Playlist";

var interval = null;
function App() {
  const [albums, setAlbums] = useState([]);
  const [currentAlbumNo, setCurrentAlbumNo] = useState(null);
  const [currentSongNo, setCurrentSongNo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [viewMoreVisible, setViewMoreVisible] = useState(false);
  const [playlistVisible, setPlaylistVisible] = useState(false);

  useEffect(() => {
    axios.get("/data/db.json").then((res) => {
      let albumsData = res.data.albums;
      setAlbums(albumsData);
      let firstAlbum = albumsData[0];
      if (!firstAlbum) return;
      setCurrentAlbumNo(0);
      if (firstAlbum.songs.length > 0) setCurrentSongNo(0);
    });
  }, []);

  function reset() {
    setCompleted(0);
    stopPlaying();
  }

  function playToggle() {
    let playState = playing;
    setPlaying(!playState);
    if (playState === false) play();
    else {
      stopPlaying();
    }
  }

  function stopPlaying() {
    setPlaying(false);
    clearInterval(interval);
    interval = null;
  }

  function play() {
    interval = setInterval(() => {
      setCompleted((completed) => completed + 1);
    }, 1000);
  }

  function toggleViewMore() {
    setViewMoreVisible((viewMoreVisible) => !viewMoreVisible);
  }

  function togglePlaylist() {
    setPlaylistVisible((playlistVisible) => !playlistVisible);
  }

  function getCurrentAlbum() {
    let album = null;
    if (currentAlbumNo !== null) return albums[currentAlbumNo];
    return album;
  }

  return (
    <div className="app">
      <ViewMore
        visible={viewMoreVisible}
        toggle={toggleViewMore}
        album={getCurrentAlbum()}
        currentSongNo={currentSongNo}
      />
      <Playlist
        visible={playlistVisible}
        toggle={togglePlaylist}
        album={getCurrentAlbum()}
        currentSongNo={currentSongNo}
        playing={playing}
        playToggle={playToggle}
      />
      <Player
        albums={albums}
        currentAlbumNo={currentAlbumNo}
        currentSongNo={currentSongNo}
        setCurrentAlbumNo={setCurrentAlbumNo}
        setCurrentSongNo={setCurrentSongNo}
        playing={playing}
        playToggle={playToggle}
        reset={reset}
        toggleViewMore={toggleViewMore}
        togglePlaylist={togglePlaylist}
        completed={completed}
      />
    </div>
  );
}

export default App;
