import { SceneTypes } from '../types/App.types';
import expand_icon from '../svg/expand.svg';
import wait_icon from '../svg/wait.svg';
import time_icon from '../svg/time.svg';
import repeat_icon from '../svg/repeat.svg';
import './Scene.css';

const Scene = ({ icon, text, boldText, click, storage, best }: SceneTypes) => {
  const previous = storage ? storage.filter(val => val !== 0) : [];

  const stats = previous.length < 10;

  const averageReaction = (prev: any[]) => {
    let all = 0;
    const averageSum = prev.reduce((prev, curr) => prev + curr, all);
    let avg = Math.round(averageSum / prev.length);
    return avg;
  };

  return (
    <div className={stats ? 'wrapper' : 'wrapper_mobile'}>
      {stats ? (
        <div className='main'>
          <div className='content' onClick={click}>
            <img src={icon} />
            {boldText && <div className='boldText'>{boldText}</div>}
            <div>{text}</div>
          </div>
        </div>
      ) : (
        <div className='main'>
          <div style={{ height: '136px' }}></div>
          <div className='content' onClick={click}>
            <img src={icon} />
            {boldText && <div className='boldText'>{boldText}</div>}
            <div>{text}</div>
          </div>
          <div>
            <a href='#info'>
              <img src={expand_icon} />
            </a>
          </div>
        </div>
      )}
      {previous.length !== 0 && (
        <div id='info'>
          <div className='detail'>
            Best
            <div className='value'>{best} ms</div>
          </div>
          <div className='detail'>
            Average
            <div className='value'>{averageReaction(previous)} ms</div>
          </div>
          <div className='detail'>
            Previous
            <div className='list'>
              {previous.map(res => {
                return <div key={res}>{res} ms</div>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scene;
