//axios installed as well :)
import HeroImage from "../../components/HeroImage/HeroImage";
import OffCourt from "../../components/OffCourt/OffCourt";
import PlayerProfile from "../../components/PlayerProfile/PlayerProfile";
import VideoSection from "../../components/VideoSection/VideoSection";

function PlayerPage() {

  return (
    <div className="player-page">
      <HeroImage />
      <PlayerProfile />
      <VideoSection/>
      <OffCourt />
    </div>
  );
}

export default PlayerPage;