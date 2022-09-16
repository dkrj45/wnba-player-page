//axios installed as well :)
import HeroImage from "../../components/HeroImage/HeroImage";
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile";
import VideoSection from "../../components/VideoSection/VideoSection";

function PlayerPage() {

  return (
    <div className="player-page">
      <HeroImage />
      <PlayerProfile />
      <VideoSection/>
    </div>
  );
}

export default PlayerPage;