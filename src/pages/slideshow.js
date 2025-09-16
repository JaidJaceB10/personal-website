import React, { useState } from "react";
import "./index.css";

export default function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <button className="left-arrow" onClick={goToPrevious}>
        🡰
      </button>
      
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx}`}
            className="slide-image"
          />
        ))}
      </div>

      <button className="right-arrow" onClick={goToNext}>
        🡲
      </button>
    </div>
  );
}
