import './HeroImage.scss';
import leftIcon from '../../assets/icons/left-icon.png';
import instaIcon from '../../assets/icons/Vector.svg';
import tiktokIcon from '../../assets/icons/Vector-1.svg';
import facebookIcon from '../../assets/icons/Vector-2.svg';
import twitterIcon from '../../assets/icons/Vector-4.svg';
import teamIcon from '../../assets/icons/team-icon.svg';
import heroExtender from '../../assets/images/hero-extender.png';
import defaultMedal from '../../assets/icons/default-medal.svg';
import variant1Medal from '../../assets/icons/variant1-medal.svg';
import variant2Medal from '../../assets/icons/variant2-medal.svg';


const HeroImage = () => {
  return (
    <main className='hero'>
      <div className='heroimage'>
        <div className='heroimage__wrapper'>
          <div className="heroimage__description">
            <div className="heroimage__intro">
              <h2 className="heroimage__number">#3</h2>
              <p className="heroimage__team">
                <img
                  className="heroimage__teamicon"
                  src={teamIcon}
                  alt="mercury pheonix"
                ></img>
                Phoenix Mercury
              </p>
              <h1 className="heroimage__name">
                Diana<span className="heroimage__secondname">TAURASI</span>
              </h1>
              <h2 className="heroimage__title">Guard</h2>
            </div>
          </div>
          <div className="heroimage__linkicons">
            <div className="heroimage__iconright">
              <a href="https://www.instagram.com/dianataurasi/" className="heroimage__link">
                <img
                  src={instaIcon}
                  alt="right-icon"
                  className="heroimage__instagram"
                ></img>
              </a>
              <a href="https://www.tiktok.com/@dianataurasiofficial?lang=en" className="heroimage__link">
                <img
                  src={tiktokIcon}
                  alt="right-icon"
                  className="heroimage__instagram"
                ></img>
              </a>
              <a href="https://www.facebook.com/dianataurasi" className="heroimage__link">
                <img
                  src={facebookIcon}
                  alt="right-icon"
                  className="heroimage__instagram"
                ></img>
              </a>
              <a href="https://twitter.com/DianaTaurasi" className="heroimage__link">
                <img
                  src={twitterIcon}
                  alt="right-icon"
                  className="heroimage__instagram"
                ></img>
              </a>
            </div>
            <div className="heroimage__iconleft">
              <button className="heroimage__bell"><img className='heroimage__bell-image' src={leftIcon} />Follow</button>
            </div>
            <div className="heroimage__medal" alt="medals">
              <img
                className="heroimage__medal1"
                src={defaultMedal}
                alt="default medal"
              ></img>
              <img
                className="heroimage__medal1 heroimage__medal1--featured"
                src={variant1Medal}
                alt="variant 1 medal"
              ></img>
              <img
                className="heroimage__medal1"
                src={variant2Medal}
                alt="variant 2 medal"
              ></img>
            </div>
          </div>
          <img className='heroimage__extender' src={heroExtender} />
        </div>
      </div>
      <div className='heroimage__divider'></div>
    </main>
  );
}

export default HeroImage