import './Header.css';
import Link from '../components/Link';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerLogo'>
        <Link link='https://github.com/MiloszKozaa/reaction-timer' linkTitle='reaction' />
        timer
      </div>
      <div className='headerMade'>
        Site made by
        <Link link='https://github.com/MiloszKozaa' linkTitle='Miłosz Koza' />
      </div>
    </div>
  );
};

export default Header;
