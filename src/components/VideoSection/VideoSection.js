import './VideoSection.scss';
import video1 from '../../assets/images/image-1.png';
import video2 from '../../assets/images/image-2.png';
import video3 from '../../assets/images/image-3.png';
import video4 from '../../assets/images/image-4.png';
import video5 from '../../assets/images/image-5.png';
import video6 from '../../assets/images/image-6.png';

const VideoSection = () => {
  return (
    <>
      <section className="videosection">
        <div className="videosection__wrapper">
          <div className="videosection__appearance">
            <h2 className="videosection__title">League Pass Appearances</h2>
            <p className="videosection__paragraph">
              See your favorite hoopers in action, on and off the court.
            </p>
            <div className="videosection__videos">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="videosection__videolink"
              >
                <img
                  className="videosection__videoimage"
                  src={video1}
                  alt="classic cuts"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="videosection__videolink"
              >
                <img
                  className="videosection__videoimage"
                  src={video2}
                  alt="classic cuts"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="videosection__videolink"
              >
                <img
                  className="videosection__videoimage--right"
                  src={video3}
                  alt="classic cuts"
                />
              </a>
            </div>
            <div className="videosection__linksection">
              <a href="https://leaguepass.wnba.com/home" className="videosection__link">
                Go to League Pass
              </a>
            </div>
          </div>
          <div className="videosection__fanreels">
            <h2 className="videosection__title">Fan Reels</h2>
            <p className="videosection__paragraph">
              Watch their best moment as told by fans like you.
            </p>
            <div className="videosection__videos">
              <iframe
                className="videosection__frame"
                width="388"
                height="184"
                src="https://www.youtube.com/embed/9VO7aFUMcWc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="videosection__frame"
                width="388"
                height="184"
                src="https://www.youtube.com/embed/u94jlOCNAIo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="videosection__frame"
                width="388"
                height="184"
                src="https://www.youtube.com/embed/bcPGRpXcclE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="videosection__linksection">
              <a href="/" className="videosection__link">
                Vote on Your Favorite
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="videosection__bottom"></div>
    </>
  );
}

export default VideoSection;