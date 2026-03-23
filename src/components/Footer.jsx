const Footer = () => {
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        fontSize: '15px',
        margin: '10px 0',
        width: '100%',
        display: 'block',
        fontFamily: 'sans-serif'
    };

    return (
        <footer style={{
            padding: '40px 20px 120px',
            backgroundColor: '#0d0908',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={textStyle}>
                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>(Bạn vui lòng bấm từng ảnh để xem Menu chi tiết)</p>
            </div>

            <div style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#555',
                margin: '20px auto'
            }}></div>

            <div style={textStyle}>
                <p>⏰Time: 17H00 - 02H00</p>
                <p>📍Tầng 9, 357 Nguyễn Khang, Cầu Giấy, Hà Nội.</p>
            </div>
        </footer>
    );
};

export default Footer;
