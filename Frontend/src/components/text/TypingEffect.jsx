import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, typingSpeed = 110, pauseDuration = 1500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < texts[currentTextIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, pauseDuration);

            return () => clearTimeout(timeoutId);
        }
    }, [charIndex, currentTextIndex, texts, typingSpeed, pauseDuration]);

    return (
        <h1>{displayedText}</h1>
    );
};

export default TypingEffect;
