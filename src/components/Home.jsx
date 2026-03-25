import './Home.css';
import logo from '../assets/icon.jpg';
import bgHeader from '../assets/bg_header.jpg';

const Home = ({ onShowMenu }) => {
    const socialLinks = [
        {
            name: 'THE LAPUTA - SKY COCKTAIL BAR',
            icon: 'https://img.icons8.com/color/144/facebook-new.png',
            url: 'https://www.facebook.com/thelaputa.skypub',
            color: '#00000000'
        },
        {
            name: 'THELAPUTA.SKYPUB',
            icon: 'https://img.icons8.com/color/144/instagram-new.png',
            url: 'https://www.instagram.com/thelaputa.skypub/',
            color: '#00000000'
        },
        {
            name: 'THELAPUTA.SKYPUB',
            icon: 'https://img.icons8.com/color/144/tiktok.png',
            url: 'https://www.tiktok.com/@thelaputa.skypub',
            color: '#00000000'
        },
        {
            name: 'THE LAPUTA - SKY PUB & CHILL',
            icon: 'https://img.icons8.com/color/144/google-maps-new.png',
            url: 'https://maps.app.goo.gl/kVYKSd8cD1Ez78c19',
            color: '#00000000'
        },
        {
            name: 'WWW.THELAPUTA.VN',
            icon: 'https://img.icons8.com/color/144/domain.png',
            url: 'https://www.thelaputa.vn/',
            color: '#00000000'
        },
        {
            name: '037 868 6997 (ZALO)',
            icon: 'https://img.icons8.com/color/144/zalo.png',
            url: 'https://zalo.me/0378686997',
            color: '#00000000'
        },
        {
            name: '097 197 80 23',
            icon: 'https://img.icons8.com/color/144/phone.png',
            url: 'tel:0971978023',
            color: '#00000000'
        }
    ];

    return (
        <div className="home-container">
            {/* Top Banner Section */}
            <div className="home-header" style={{ backgroundImage: `url(${bgHeader})` }}>
                <div className="header-overlay"></div>
                <div className="logo-container">
                    <img src={logo} alt="The Laputa Logo" className="home-logo" />
                </div>
            </div>

            <div className="home-content-wrapper">
                <h1 className="home-title">THE LAPUTA</h1>
                <h2 className="home-subtitle">Sky Cocktail Bar</h2>

                <div className="home-links">
                    {/* Main Menu Button */}
                    <button className="menu-toggle-btn" onClick={onShowMenu}>
                        <div className="link-icon-bg" style={{ backgroundColor: '#ffbd59' }}>
                            <svg viewBox="0 0 1792 1896" fill="#fff" width="28" height="28">
                                <path d="M1699 186q0 35-43 78l-632 632v768h320q26 0 45 19t19 45-19 45-45 19H448q-26 0-45-19t-19-45 19-45 45-19h320V896L136 264q-43-43-43-78 0-23 18-36.5t38-17.5 43-4h1408q23 0 43 4t38 17.5 18 36.5z" />
                            </svg>
                        </div>
                        <span className="link-name">MENU COCKTAIL</span>
                    </button>

                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="home-link-card"
                        >
                            <div className="link-icon-bg" style={{ backgroundColor: link.color }}>
                                <img src={link.icon} alt={link.name} />
                            </div>
                            <span className="link-name">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Footer Info Section */}
                <div className="home-meta">
                    <p className="meta-line">⏰Time: 17H00 - 02H00</p>
                    <p className="meta-line">📍Tầng 9, 357 Nguyễn Khang, Cầu Giấy, Hà Nội.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
