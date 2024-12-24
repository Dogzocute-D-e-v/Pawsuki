import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'react-feather';

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>; // Accept audioRef from parent
  songName: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioRef, songName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.ontimeupdate = updateProgress;
    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);

    return () => {
      audio.ontimeupdate = null;
      audio.onplay = null;
      audio.onpause = null;
    };
  }, [audioRef]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current) audioRef.current.currentTime = newProgress;
  };

  return (
    <div className="music-player">
      <div className="song-name">{songName}</div>
      <div className="controls">}
        <button onClick={togglePlay} className="play-pause">
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <div className="progress-container">
          <input
            type="range"
            className="progress-bar"
            value={progress}
            max={duration || 1}
            step="0.1"
            onChange={handleProgressChange}
          />
          <div className="time">
            <span>{new Date(progress * 1000).toISOString().substr(14, 5)}</span>
            <span>{new Date((duration || 0) * 1000).toISOString().substr(14, 5)}</span>
          </div>
        </div>

        <div className="volume-container">
          <Volume2 size={16} className="volume-icon" />
          <input
            type="range"
            className="volume-bar"
            value={volume}
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;