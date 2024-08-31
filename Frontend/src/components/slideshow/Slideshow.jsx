import React, { useState, useEffect } from "react";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="photo-slideshow">
      <img src={images[currentIndex]} alt="slideshow" />
    </div>
  );
};

export default Slideshow;
