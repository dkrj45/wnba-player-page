import './OffCourt.scss';
import offCourtPic from '../../assets/images/off-court.png'
import firrp from '../../assets/images/firrp.png'
import mda from '../../assets/images/mda.png'
const OffCourt = () => {
    return (
        <div className="offCourt">
            <h2 className="offCourt__title">Diana Off the Court</h2>
            <main className='offCourt__main'>
                <section className='offCourt__left'>
                    <img src={offCourtPic} alt="" />
                </section>
                <div className="offCourt__right">
                    <section className='offCourt__personal'>
                        <h2 className='offCourt__personal-title'>Personal</h2>
                        <ul className='offCourt__personal-list'>
                            <li className='offCourt__personal-item offCourt__personal-item-first'>
                                <p className='offCourt__personal-item-left'>Birth Name</p>
                                <p className='offCourt__personal-item-right'>Diana Laurena Taurasi</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Nickname</p>
                                <p className='offCourt__personal-item-right'>Dee</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Birth Place</p>
                                <p className='offCourt__personal-item-right'>Chino, California</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Ethnicity</p>
                                <p className='offCourt__personal-item-right'>Argentinian Italian</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Spouse</p>
                                <p className='offCourt__personal-item-right'>Penny Taylor</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Children</p>
                                <p className='offCourt__personal-item-right'>1 son, Leo Michael Taurasi-Taylor</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Siblings</p>
                                <p className='offCourt__personal-item-right'>1 sister, Jessika Taurasi</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Education</p>
                                <p className='offCourt__personal-item-right'>Sociology Major at University of Connecticut</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>WNBA Career</p>
                                <p className='offCourt__personal-item-right'>17 years</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Favorite Movie</p>
                                <p className='offCourt__personal-item-right'>Above the Rim</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>Favorite Pastime</p>
                                <p className='offCourt__personal-item-right'>Ironing</p>
                            </li>
                            <li className='offCourt__personal-item'>
                                <p className='offCourt__personal-item-left'>First Car</p>
                                <p className='offCourt__personal-item-right'>1986 Toyota Corolla</p>
                            </li>
                        </ul>
                    </section>
                    <section className='offCourt__charities'>
                        <h2 className='offCourt__charities-title'>Charitable Contributions</h2>
                        <p>Diana has a long history of giving back to their community</p>
                        <div className='offCourt__charities-images'>
                            <a className='offCourt__charities-item' href="http://www.momsdemandaction.org"><img src={mda} alt="mda" /></a>
                            <a className='offCourt__charities-item' href="http://www.firrp.org"><img src={firrp} alt="firrp" /></a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default OffCourt