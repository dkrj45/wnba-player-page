import './PlayerProfile.scss'
import profilePhoto from '../../assets/images/player-photo.png'
import boardContent from '../../assets/images/board-content.png'
import dropDown from '../../assets/icons/dropdown.png'

const PlayerProfile = () => {
    return (
        <>
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
                <h1 className='playerprofile__player-highs-title'>Player Highs{' '}<img src={dropDown} /></h1>
                <div className='playerprofile__player-highs-wrapper'>
                    <div className='playerprofile__player-highs'>
                        <h2 className='playerprofile__player-highs-top'>Per Game Highs</h2>
                        <h2 className='playerprofile__player-highs-top'>Season Highs</h2>
                        <h2 className='playerprofile__player-highs-top'>Career Highs</h2>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Points</h3>
                        <p className='playerprofile__player-highs-top'>32 (Connecticut - 6/3/2022)</p>
                        <p className='playerprofile__player-highs-top'>47 (Houstin - 8/10/2006)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Rebounds</h3>
                        <p className='playerprofile__player-highs-top'>7 (3 times)</p>
                        <p className='playerprofile__player-highs-top'>13 (New York - 7/26/2009)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Defensive Rebounds</h3>
                        <p className='playerprofile__player-highs-top'>7 (2 times)</p>
                        <p className='playerprofile__player-highs-top'>11 (2 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Offensive Rebounds</h3>
                        <p className='playerprofile__player-highs-top'>2 (Minnesota - 7/12/2022)</p>
                        <p className='playerprofile__player-highs-top'>4 (2 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Assists</h3>
                        <p className='playerprofile__player-highs-top'>9 (Las Vegas - 5/6/2022)</p>
                        <p className='playerprofile__player-highs-top'>14 (2 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Blocks</h3>
                        <p className='playerprofile__player-highs-top'>2 (4 times)</p>
                        <p className='playerprofile__player-highs-top'>5 (3 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Steals</h3>
                        <p className='playerprofile__player-highs-top'>3 (2 times)</p>
                        <p className='playerprofile__player-highs-top'>7 (7 Minnesota - 8/8/2006)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Field Goals Made</h3>
                        <p className='playerprofile__player-highs-top'>10 (2 times)</p>
                        <p className='playerprofile__player-highs-top'>17 (Houston - 8/10/2006)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Field Goals Attempted</h3>
                        <p className='playerprofile__player-highs-top'>23 (Minnesota - 7/12/2022)</p>
                        <p className='playerprofile__player-highs-top'>33 (2 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Three-Point Field Goals Made</h3>
                        <p className='playerprofile__player-highs-top'>7 (Indiana - 6/27/2022)</p>
                        <p className='playerprofile__player-highs-top'>8 (4 times)</p>
                    </div><div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Three-Point Field Goals Attempted</h3>
                        <p className='playerprofile__player-highs-top'>17 (Minnesota - 7/12/2022)</p>
                        <p className='playerprofile__player-highs-top'>17 (2 times)</p>
                    </div>
                    <div className='playerprofile__player-highs'>
                        <h3 className='playerprofile__player-highs-top'>Minutes Played</h3>
                        <p className='playerprofile__player-highs-top'>43 (Minnesota - 7/12/2022)</p>
                        <p className='playerprofile__player-highs-top'>49 (Seattle - 7/14/2010)</p>
                    </div>
                </div>
                <h1 className='playerprofile__highlightreels-title'>Highlight Reels</h1>
                <div className="playerprofile__highlightreels">
                    <iframe className="playerprofile__highlightreels-item" width="286" height="160" src="https://www.youtube.com/embed/l6e7OfgptLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    <iframe className="playerprofile__highlightreels-item" width="286" height="160" src="https://www.youtube.com/embed/dVLpVxQoh3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    <iframe className="playerprofile__highlightreels-item" width="286" height="160" src="https://www.youtube.com/embed/kM4kUVVlF0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                    <iframe className="playerprofile__highlightreels-item" width="286" height="160" src="https://www.youtube.com/embed/cESRSTTo5hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div >
        </div>
        <div className='playerprofile__divider'></div>
        </>
    )
}

export default PlayerProfile