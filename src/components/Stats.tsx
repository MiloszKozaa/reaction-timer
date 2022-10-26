import { StatsTypes } from '../types/App.types';
import './Stats.css';

const Stats = ({ title, value, icon, array }: StatsTypes) => {
  return (
    <div>
      <div className='title'>
        <img src={icon} /> {title}
      </div>
      {value && <div className='value'>{value} ms</div>}
      {array && (
        <div className='list'>
          {array.length < 5
            ? array.map((res, key) => {
                return <div key={key}>{res} ms</div>;
              })
            : array.slice(0, 5).map((res, key) => {
                return <div key={key}>{res} ms</div>;
              })}
        </div>
      )}
    </div>
  );
};

export default Stats;
