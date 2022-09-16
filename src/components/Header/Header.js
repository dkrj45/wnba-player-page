import './Header.scss'
import logo from '../../assets/images/logo.png';
import rightDiv from '../../assets/images/right-div.png';


function Header() {

  return (
    <div className='header'>
        <div className='header__left'>
          <div className='header__logo'></div>
          <div className='header__nav-container'>
            <h1 className='header__nav-title'>Fans</h1>
            <h1 className='header__nav-title'>Watch</h1>
            <h1 className='header__nav-title'>News</h1>
            <h1 className='header__nav-title'>Schedule</h1>
            <h1 className='header__nav-title'>Standings</h1>
            <h1 className='header__nav-title'>Players</h1>
            <h1 className='header__nav-title'>Stats</h1>
            <h1 className='header__nav-title'>Teams</h1>
            <h1 className='header__nav-title'>Tickets</h1>
            <h1 className='header__nav-title'>Events</h1>
          </div>
        </div>
        <div className='header__right'></div>
    </div>
  );
}

export default Header;