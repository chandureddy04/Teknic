import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images = [], textSlides = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isTextMode = textSlides.length > 0; // If textSlides are passed, show text.

    const totalSlides = isTextMode ? textSlides.length : images.length;

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(timer);
    }, [currentIndex, totalSlides]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container" >
            {isTextMode ? (
                <div className="text-content">
                    <h2>{textSlides[currentIndex].heading}</h2>
                    <p>{textSlides[currentIndex].content}</p>
                </div>
            ) : (
                <>
                    <div className="carousel-slide">
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                    </div>
                </>
            )}

            {/* Arrows */}
            {totalSlides > 1 && (
                <>
                    <button className="left-arrow" onClick={prevSlide}>
                        ◀
                    </button>
                    <button className="right-arrow" onClick={nextSlide}>
                        ▶
                    </button>
                </>
            )}

            {/* Dots */}
            <div className="carousel-dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
