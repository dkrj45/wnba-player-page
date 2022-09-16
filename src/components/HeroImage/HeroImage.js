import './HeroImage.scss';
import leftIcon from '../../assets/icons/left-icon.svg';
import instaIcon from '../../assets/icons/Vector.svg';
import tiktokIcon from '../../assets/icons/Vector-1.svg';
import facebookIcon from '../../assets/icons/Vector-2.svg';
import snapchatIcon from '../../assets/icons/Vector-3.svg';
import twitterIcon from '../../assets/icons/Vector-4.svg';

const HeroImage = () => {
  return (
    <main className="heroimage">
      <div className="heroimage__linkicons">
        <div className="heroimage__iconleft">
          <a href="/" className="heroimage__link">
            <img
              src={leftIcon}
              alt="bell-icon"
              className="heroimage__bell"
            ></img>
          </a>
        </div>
        <div className="heroimage__iconright">
          <a href="/" className="heroimage__link">
            <img
              src={instaIcon}
              alt="right-icon"
              className="heroimage__instagram"
            ></img>
          </a>
          <a href="/" className="heroimage__link">
            <img
              src={tiktokIcon}
              alt="right-icon"
              className="heroimage__instagram"
            ></img>
          </a>
          <a href="/" className="heroimage__link">
            <img
              src={facebookIcon}
              alt="right-icon"
              className="heroimage__instagram"
            ></img>
          </a>
          <a href="/" className="heroimage__link">
            <img
              src={snapchatIcon}
              alt="right-icon"
              className="heroimage__instagram"
            ></img>
          </a>
          <a href="/" className="heroimage__link">
            <img
              src={twitterIcon}
              alt="right-icon"
              className="heroimage__instagram"
            ></img>
          </a>
        </div>
      </div>
      <div className="heroimage_">

      </div>
    </main>
  );
}

export default HeroImage