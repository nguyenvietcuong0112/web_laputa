import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="menu-header">
                <p className="menu-hint">(Bạn vui lòng bấm từng ảnh để xem Menu chi tiết)</p>
                <div className="divider-small"></div>
                <div className="contact-info">
                    <p className="contact-item">⏰Time: 17H00 - 02H00</p>
                    <p className="contact-item">📍Tầng 9, 357 Nguyễn Khang, Cầu Giấy, Hà Nội.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
