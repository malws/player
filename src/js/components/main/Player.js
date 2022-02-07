import { React, useRef } from "react";
import Slider from "react-slick";
import ProgressBar from "./ProgressBar";
import AudioVisualizer from "./AudioVisualizer";
import TitleArtist from "../shared/TitleArtist";
import SongDuration from "../shared/SongDuration";
import Header from "./Header";
import Controls from "./Controls";
import Footer from "./Footer";
import * as viewHelper from "../../helpers/viewHelper";

function Player({
  albums,
  currentAlbumNo,
  currentSongNo,
  setCurrentAlbumNo,
  setCurrentSongNo,
  playing,
  playToggle,
  reset,
  toggleViewMore,
  togglePlaylist,
  completed,
}) {
  const slider = useRef();
  const sliderSettings = {
    arrows: false,
  };

  function getCurrentAlbumTitle() {
    let currentAlbum = albums[currentAlbumNo];
    return currentAlbum ? currentAlbum.name : "-";
  }

  function getAlbumsCovers() {
    let covers = [];
    albums.forEach((album) => {
      covers.push(
        <div key={album.id}>
          <img src={album.cover_url} alt={album.name} />
        </div>
      );
    });
    return covers;
  }

  function getCurrentAlbum() {
    let album = null;
    if (currentAlbumNo !== null) return albums[currentAlbumNo];
    return album;
  }

  function next() {
    slider.current.slickNext();
    nextAlbum();
  }
  function previous() {
    slider.current.slickPrev();
    previousAlbum();
  }

  function nextAlbum() {
    reset();
    setCurrentSongNo(0);
    let numbersOfAlbums = albums.length;
    if (numbersOfAlbums < 2) return;
    if (currentAlbumNo < numbersOfAlbums - 1) {
      setCurrentAlbumNo((currentAlbumNo) => currentAlbumNo + 1);
    } else {
      setCurrentAlbumNo(0);
    }
  }

  function previousAlbum() {
    reset();
    setCurrentSongNo(0);
    let numbersOfAlbums = albums.length;
    if (numbersOfAlbums < 2) return;
    if (currentAlbumNo > 0) {
      setCurrentAlbumNo((currentAlbumNo) => currentAlbumNo - 1);
    } else {
      setCurrentAlbumNo(numbersOfAlbums - 1);
    }
  }

  function getSongDurationSec() {
    if (currentAlbumNo !== null && currentSongNo !== null) {
      return albums[currentAlbumNo].songs[currentSongNo].duration;
    }
    return 0;
  }

  function playNextSong() {
    reset();
    if (currentAlbumNo === null || currentSongNo === null) return;
    let nextSong = viewHelper.getNextSongNo(
      albums[currentAlbumNo],
      currentSongNo
    );
    setCurrentSongNo(nextSong);
  }

  function getNextSong() {
    if (currentAlbumNo === null || currentSongNo === null) return "-";
    let nextSongNo = viewHelper.getNextSongNo(
      albums[currentAlbumNo],
      currentSongNo
    );
    return albums[currentAlbumNo].songs[nextSongNo];
  }

  return (
    <div className="player">
      <div className="player-content">
        <Header
          albumTitle={getCurrentAlbumTitle()}
          toggleViewMore={toggleViewMore}
        />
        <div className="player-content__slider">
          <Slider {...sliderSettings} ref={slider}>
            {getAlbumsCovers()}
          </Slider>
        </div>
        <TitleArtist album={getCurrentAlbum()} currentSongNo={currentSongNo} />
        <Controls
          previous={previous}
          playing={playing}
          playToggle={playToggle}
          next={next}
        />
        <div className="player-content__progress">
          <SongDuration durationInSec={completed} />
          <ProgressBar
            bgcolor={"#6a1b9a"}
            completed={completed}
            songDuration={getSongDurationSec()}
            playNextSong={playNextSong}
          />
          <SongDuration durationInSec={getSongDurationSec()} />
        </div>
      </div>
      <div className="player__footer">
        <AudioVisualizer
          completed={completed}
          songDuration={getSongDurationSec()}
        />
        <Footer togglePlaylist={togglePlaylist} nextSong={getNextSong()} />
      </div>
    </div>
  );
}

export default Player;
