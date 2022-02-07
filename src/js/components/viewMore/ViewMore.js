import React from "react";
import ViewMoreHeader from "./ViewMoreHeader";
import TitleArtist from "../shared/TitleArtist";
import IconButton from "../shared/IconButton";
import GoBackButton from "../shared/GoBackButton";
import Cover from "./Cover";
import ListElement from "../shared/ListElement";

const ViewMore = ({ visible, toggle, album, currentSongNo }) => {
  function getCoverUrl() {
    let cover = null;
    if (album) {
      cover = album.cover_url;
    }
    return cover;
  }

  return (
    <div
      className="view-more-container"
      style={{ width: visible ? "100%" : 0, opacity: visible ? "1" : 0 }}
    >
      <div className="view-more">
        <ViewMoreHeader toggle={toggle} />
        <div className="view-more__album">
          <Cover coverUrl={getCoverUrl()} />
          <TitleArtist album={album} currentSongNo={currentSongNo} />
        </div>
        <div className="view-more-content">
          <div className="view-more-content__line-break"></div>
          <ul className="view-more-content__list">
            <ListElement>Add to playlist</ListElement>
            <ListElement>Show album</ListElement>
            <ListElement>Share with friends</ListElement>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
