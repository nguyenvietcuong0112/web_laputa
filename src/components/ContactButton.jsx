import { useState } from 'react';
import './ContactButton.css';

const ContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Facebook, Zalo, Instagram only
    const contacts = [
        {
            name: 'Facebook',
            icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
            link: 'https://web.facebook.com/thelaputa.skypub',
            color: '#1877F2'
        },
        {
            name: 'Zalo',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png',
            link: 'https://zalo.me/0378686997',
            color: '#0068ff'
        },
        {
            name: 'Instagram',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
            link: 'https://www.instagram.com/thelaputa.skybar?fbclid=IwY2xjawQt_g9leHRuA2FlbQIxMABicmlkETEybmxkdjVxam82dDh4TG45c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrpbMe1vgo8XLlbemdUT3UQ4DrX-4Lv4-xqc_8O83J29_DO7jIZFl1NZ5dgK_aem_1COWhfHGRJTaiwUf6Mw0aw',
            color: '#E4405F'
        }
    ];

    return (
        <div className={`contact-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="contact-menu">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                        style={{ '--delay': `${index * 0.1}s` }}
                    >
                        {/* Horizontal flow: Icon (Left) -> Text (Right) */}
                        <div className="contact-icon-bg">
                            <img src={contact.icon} alt={contact.name} />
                        </div>
                        <span className="contact-label">{contact.name}</span>
                    </a>
                ))}
            </div>
            <button
                className="contact-fab"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Contact Us"
            >
                <div className="fab-icon">
                    {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
};

export default ContactButton;
