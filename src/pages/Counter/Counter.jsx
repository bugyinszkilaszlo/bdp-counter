import { useEffect, useState } from 'react';
import * as style from './Counter.module.scss';

const WORKOUTS = {
  'six-count': {
    count: 50,
    time: 20,
  },
  'navy-seal': {
    count: 20,
    time: 20,
  },
};

export function Counter({ type } = props) {
  const workout = WORKOUTS[type];
  const interval = (workout.time * 60) / workout.count;

  const [currentCount, setCurrentCount] = useState(1);
  const [intervalCount, setIntervalCount] = useState(interval);

  const [intervalTimer, setIntervalTimer] = useState();
  const [isFinished, setIsFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  function startTimer() {
    setIntervalTimer(
      setInterval(() => {
        setIntervalCount((prevIntervalCount) => prevIntervalCount - 1);
      }, 1000)
    );
  }

  useEffect(() => {
    if (intervalCount === 0) {
      setCurrentCount((prevCurrentCount) => prevCurrentCount + 1);
      clearInterval(intervalTimer);
      setIntervalCount(interval);
      startTimer();
    }
  }, [intervalCount]);

  useEffect(() => {
    if (currentCount === workout.count + 1) {
      setIsFinished(true);
    }
  }, [currentCount]);

  useEffect(() => {
    clearInterval(intervalTimer);
  }, [isFinished]);

  const handleClick = () => {
    startTimer();
    setIsStarted(true);
  };

  return (
    <div className={style.Counter}>
      <div className={style.count}>
        {isFinished ? workout.count : currentCount}/{workout.count}
      </div>
      <div className={style.time} style={{ opacity: isStarted ? 1 : 0.5 }}>
        {isFinished ? 0 : intervalCount}
      </div>
      {!isStarted && <button onClick={handleClick}>START</button>}
    </div>
  );
}