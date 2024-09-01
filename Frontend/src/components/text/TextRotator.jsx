import React from 'react';
import TypingEffect from './TypingEffect';

const LandingPage = () => {
    const texts = [
        "Need land to store harvested produce?",
        "Secure your storage with AgroVision.",
        "Find the perfect land for your crops.",
        "For the Farmers by AgroVision!",
    ];

    return (
        <div className="landing-page">
            <TypingEffect texts={texts} />
            {/* Other components */}
        </div>
    );
};

export default LandingPage;
