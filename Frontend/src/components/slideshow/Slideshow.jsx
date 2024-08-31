import React, { useState, useEffect } from "react";

const Slideshow = ({ images, videoSrc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setFade(false); // Start fade-out
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setFade(true); // Start fade-in
        }, 500); // Duration of fade-out
      }
    }, 1500); // Change image every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length, isHovered]);

  return (
    <div
      className="photo-slideshow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video src={videoSrc} autoPlay loop muted />
      ) : (
        <img src={images[currentIndex]} alt="slideshow" className={fade ? "fade-in" : "fade-out"} />
      )}
    </div>
  );
};

export default Slideshow;
