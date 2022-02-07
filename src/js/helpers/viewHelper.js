export const getNextSongNo = (album, currentSongNo) => {
  if (album.songs.length - 1 > currentSongNo) return currentSongNo + 1;
  else return 0;
};

export const getCurrentSongTitle = (album, currentSongNo) => {
  let songTitle = "-";
  if (album && album.songs[currentSongNo]) {
    songTitle = album.songs[currentSongNo].title;
  }
  return songTitle;
};

export const getCurrentArtist = (album) => {
  let artist = "-";
  if (album) {
    artist = album.artist;
  }
  return artist;
};
