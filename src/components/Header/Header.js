import headerImage from '../../assets/images/header.png';


function Header() {

  return (
    <div>
        <img className='header-image' src={headerImage} alt='header' />
    </div>
  );
}

export default Header;