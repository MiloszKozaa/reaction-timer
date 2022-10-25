import { SceneTypes } from '../types/App.types';
import expand_icon from '../svg/expand.svg';
import previous_icon from '../svg/previous.svg';
import average_icon from '../svg/average.svg';
import best_icon from '../svg/best.svg';
import './Scene.css';

// TRY SLICE ARRAY TO MAX 5 ELEMENTS

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
            <div className='title'>
              <img src={best_icon} /> Best
            </div>
            <div className='value'>{best} ms</div>
          </div>
          <div className='detail'>
            <div className='title'>
              <img src={average_icon} /> Average
            </div>
            <div className='value'>{averageReaction(previous)} ms</div>
          </div>
          <div className='detail'>
            <div className='title'>
              <img src={previous_icon} /> Previous
            </div>

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
