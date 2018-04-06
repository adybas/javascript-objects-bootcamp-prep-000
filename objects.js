var playlist =  {
  artistName: "songTitle",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songName;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
