import { SceneTypes } from '../types/App.types';
import previous_icon from '../svg/previous.svg';
import average_icon from '../svg/average.svg';
import best_icon from '../svg/best.svg';
import Stats from './Stats';
import './Scene.css';

const Scene = ({ icon, text, boldText, click, storage, best }: SceneTypes) => {
  const previous = storage ? storage.filter(val => val !== 0) : [];

  const averageReaction = (prev: any[]) => {
    let all = 0;
    const averageSum = prev.reduce((prev, curr) => prev + curr, all);
    let avg = Math.round(averageSum / prev.length);
    return avg;
  };

  return (
    <div className={'wrapper'}>
      <div className='main'>
        <div className='content' onClick={click}>
          <img src={icon} />
          {boldText && <div className='boldText'>{boldText}</div>}
          <div>{text}</div>
        </div>
      </div>
      {previous.length !== 0 && (
        <div className='info'>
          <Stats icon={best_icon} title='Best' value={best} />
          <Stats
            icon={average_icon}
            title='Average'
            value={averageReaction(previous)}
          />
          <Stats icon={previous_icon} title='Previous' array={previous} />
        </div>
      )}
    </div>
  );
};

export default Scene;
