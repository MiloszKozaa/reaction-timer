import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import click_icon from '../svg/click.svg';
import wait_icon from '../svg/wait.svg';
import time_icon from '../svg/time.svg';
import repeat_icon from '../svg/repeat.svg';
import Scene from '../components/Scene';
import './ReactionTimer.css';

enum Screen {
  Home = '#0E1E2B',
  Wait = '#EA4A30',
  TooSoon = '#0E1E2A',
  Press = '#30EA64',
  Result = '#0E1E2C',
}

const ReactionTimer = () => {
  const [screen, screenSet] = useState<Screen>(Screen.Home);
  const [start, startSet] = useState(false);
  const [time, timeSet] = useState(0);
  const [bestTime, bestTimeSet] = useState(0);
  const [results, resultsSet] = useState<any[]>([]);

  const randomNumber = (min: number, max: number) => {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  };

  useEffect(() => {
    let interval: any;
    if (start && screen === Screen.Wait) {
      screenSet(Screen.Press);
      interval = setInterval(() => {
        timeSet(prev => prev + 3);
      }, 3);
    } else {
      startSet(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className='reactionTimer' style={{ backgroundColor: screen }}>
      <Header />
      {(() => {
        switch (screen) {
          case Screen.Home:
            return (
              <Scene
                icon={click_icon}
                text='Click to check your reaction time'
                click={() => {
                  setTimeout(() => {
                    startSet(true);
                  }, randomNumber(1000, 5000));
                  screenSet(Screen.Wait);
                }}
                storage={results}
                best={bestTime}
              />
            );
          case Screen.Wait:
            return (
              <Scene
                icon={wait_icon}
                text='Wait for green color...'
                click={() => {
                  startSet(false);
                  timeSet(0);
                  screenSet(Screen.TooSoon);
                }}
              />
            );
          case Screen.TooSoon:
            return (
              <Scene
                icon={repeat_icon}
                boldText='Too soon!'
                text='Click to try again'
                click={() => {
                  startSet(false);
                  timeSet(0);
                  screenSet(Screen.Home);
                }}
              />
            );
          case Screen.Press:
            return (
              <Scene
                icon={click_icon}
                text='Click!'
                click={() => {
                  startSet(false);
                  screenSet(Screen.Result);
                  resultsSet(oldRes => [time, ...oldRes]);
                  if (
                    Math.min(...results.filter(val => val !== 0)) > time ||
                    results.length === 0
                  ) {
                    bestTimeSet(time);
                  }
                }}
              />
            );
          case Screen.Result:
            return (
              <Scene
                icon={time_icon}
                boldText={`${time} ms`}
                text='Click to continue'
                click={() => {
                  screenSet(Screen.Home);
                  timeSet(0);
                }}
              />
            );
        }
      })()}
      <Footer />
    </div>
  );
};

export default ReactionTimer;
