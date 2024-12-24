import React from 'react';

interface StartPromptProps {
  onStart: () => void;
  playAudio: () => void;
}

const StartPrompt: React.FC<StartPromptProps> = ({ onStart, playAudio }) => {
  const handleStart = () => {
    playAudio();
    onStart();
  };

  return (
    <div className="background-blur">
      <div className="start-prompt">
        <p className="start-message">Click to Start :P</p>
        <button onClick={handleStart} className="start-btn">
          ...
        </button>
      </div>
    </div>
  );
};

export default StartPrompt;