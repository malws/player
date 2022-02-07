import React from "react";
import SongDuration from "../shared/SongDuration";

function SongsList({ songs }) {
  return (
    <ul className="songs-list">
      {songs &&
        songs.map((song, index) => (
          <li className="songs-list-element" key={index}>
            <span className="songs-list-element__number">{index + 1}.</span>
            <span className="songs-list-element__title">{song.title}</span>
            <SongDuration durationInSec={song.duration} />
          </li>
        ))}
    </ul>
  );
}

export default SongsList;
