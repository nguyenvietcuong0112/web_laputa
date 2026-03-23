import { useState, useRef, useEffect } from 'react';
import './Gallery.css';

// Import images from assets
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const thumbRef = useRef(null);

    // Minimum swipe distance (pixels)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Sync thumbnail scroll when activeIndex changes
    useEffect(() => {
        if (thumbRef.current) {
            const activeThumb = thumbRef.current.children[activeIndex];
            if (activeThumb) {
                const container = thumbRef.current;
                const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeIndex]);

    return (
        <div className="gallery-container">
            {/* Main View Slider */}
            <div
                className="main-view"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <button className="nav-arrow prev" onClick={handlePrev}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>

                <div className="slider-container">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="slide-item">
                                <img src={src} alt={`Menu ${index + 1}`} className="active-image" />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="nav-arrow next" onClick={handleNext}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>

            {/* Thumbnails View */}
            <div className="thumbnails-wrapper">
                <div className="thumbnails-scroll" ref={thumbRef}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
