import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Thinking About You", duration: "4:22" },
    { title: "Memories", duration: "3:15" },
    { title: "Yummy", duration: "1:45" },
    { title: "Bella Ciao", duration: "2:38" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
