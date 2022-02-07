import React from "react";
import GoBackButton from "../shared/GoBackButton";
import IconButton from "../shared/IconButton";

function Header({ albumTitle, toggleViewMore }) {
  return (
    <header className="player-header">
      <GoBackButton />
      <div className="player-header__album">
        <h3>Album</h3>
        <h2>{albumTitle}</h2>
      </div>
      <IconButton
        action={toggleViewMore}
        imgSrc={"/images/icons/more_ico.svg"}
        alt={"View more"}
      ></IconButton>
    </header>
  );
}

export default Header;
