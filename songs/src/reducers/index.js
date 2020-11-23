import { combineReducers } from "redux";

const songReducers = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Marcarena", duration: "2:35" },
    { title: "All Start", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ];
};

const selectedSongReducers = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducers,
});
