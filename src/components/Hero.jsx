import './Hero.css';
import bgHeader from '../assets/bg_header.jpg';
import iconLogo from '../assets/icon.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-bg-img" style={{ backgroundImage: `url(${bgHeader})` }}></div>
            </div>
            <div className="profile">
                <div className="profile-img-wrapper">
                    <img
                        src={iconLogo}
                        alt="The Laputa Logo"
                        className="profile-logo"
                    />
                </div>
            </div>
            <div className="hero-content">
                <div className="title-wrapper">
                    <h1 className="title">THE LAPUTA</h1>
                    <div className="verified-icon">
                        <svg viewBox="0 0 24 24" fill="#00c6ff">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                </div>
                <h2 className="subtitle">Sky Cocktail Bar</h2>
            </div>
        </section>
    );
};

export default Hero;
