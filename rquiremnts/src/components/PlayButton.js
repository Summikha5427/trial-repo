import { useState } from "react";
import "./PlayButton.css";
//customEvents ==>onSmash
//props ==> message,lable
function PlayButton({ children, onPlay, onPause }) {
  console.log('PlayButton Render');
  const [playing,setPlaying]= useState(false);
  function handleClick(e) {
    e.stopPropagation(); // Prevent event propagation

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }
  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "⏯️"}
    </button> //Event Handler
  );
}

export default PlayButton;
