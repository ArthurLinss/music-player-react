import { useRef, useState } from "react";
import { tracks } from "../data/tracks";

import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack {...{ handleNext, currentTrack, audioRef, setDuration, progressBarRef }} />
        <Controls {...{ handleNext, audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />{" "}
      </div>
    </div>
  );
};

export default AudioPlayer;
