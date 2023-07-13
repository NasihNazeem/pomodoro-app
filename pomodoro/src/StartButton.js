import React from "react";

function StartButton({ isPlaying, setIsPlaying }) {
  return (
    <div className="button-base">
      <button
        className={`start ${isPlaying ? "play" : "pause"}`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <p className="play-title">{isPlaying ? "Stop" : "Start"}</p>
      </button>
    </div>
  );
}

export default StartButton;
