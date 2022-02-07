import React from "react";

function Cover({ coverUrl }) {
  return coverUrl ? (
    <img className="album-cover" src={coverUrl} alt="cover" />
  ) : (
    "-"
  );
}

export default Cover;
