import './PlayerProfile.scss'
import profilePhoto from '../../assets/images/player-photo.png'
import boardContent from '../../assets/images/board-content.png'

const PlayerProfile = () => {
    return (
        <div className='playerprofile'>
            <div className='playerprofile__body'>
                <h1 className='playerprofile__title-top'>Player Profile</h1>
                <div className='playerprofile__top'>
                    <div className='playerprofile__photo-container'>
                        <img className='playerprofile__photo' src={profilePhoto} />
                        <h3>WNBA Debut: 2004</h3>
                    </div>
                    <div className='playerprofile__short-profile'>
                        <div className='playerprofile__short-profile-line--featured'>
                            <h3 className='playerprofile__short-profile-line-key'>Height</h3>
                            <h3 className='playerprofile__short-profile-line-value'>6'0"</h3>
                        </div>
                        <div className='playerprofile__short-profile-line'>
                            <h3 className='playerprofile__short-profile-line-key'>Weight</h3>
                            <h3 className='playerprofile__short-profile-line-value'>163 lbs / 73.9 kg</h3>
                        </div>
                        <div className='playerprofile__short-profile-line'>
                            <h3 className='playerprofile__short-profile-line-key'>Birthday</h3>
                            <h3 className='playerprofile__short-profile-line-value'>June 11th, 1982 (40 years)</h3>
                        </div>
                        <div className='playerprofile__short-profile-line'>
                            <h3 className='playerprofile__short-profile-line-key'>From</h3>
                            <h3 className='playerprofile__short-profile-line-value'>Connecticut</h3>
                        </div>
                    </div>
                    <div className='playerprofile__board'>
                        <div className='playerprofile__board-options'>
                            <h3 className='playerprofile__last-game'>Last Game</h3>
                            <h3 className='playerprofile__next-game'>next Game</h3>
                        </div>
                        <img className='playerprofile__board-content' src={boardContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfile