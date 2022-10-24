import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import click_icon from '../svg/click.svg';
import wait_icon from '../svg/wait.svg';
import time_icon from '../svg/time.svg';
import './ReactionTimer.css';

const ReactionTimer = () => {
  const [color, colorSet] = useState('#0E1E2B');
  const [start, startSet] = useState(false);
  const [time, timeSet] = useState(0);

  useEffect(() => {
    let interval: any;
    if (start) {
      interval = setInterval(() => {
        timeSet(prev => prev + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className='reactionTimer' style={{ backgroundColor: color }}>
      <Header />
      {!start &&
      <div className='wrapper' onClick={() => startSet(true)}>
        <div className='homePage'>
          <img src={click_icon} />
          Click to check your reaction time
        </div>
      </div>}
      <div>
        <button onClick={() => startSet(true)}>start</button>
        <button onClick={() => startSet(false)}>stop</button>
        {time} ms
      </div>
      <Footer />
    </div>
  );
};

export default ReactionTimer;
