import React from 'react';
import useTimer from './useTimer';
import { formatTime } from './helper';

function Timer() {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset
  } = useTimer(0);

  return (
    <div>
      <h3>Stopwatch</h3>
      <p>{formatTime(timer)}</p>
      <div>
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
