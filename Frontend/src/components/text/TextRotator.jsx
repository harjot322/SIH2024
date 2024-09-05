import React from 'react';
import TypingEffect from './TypingEffect';

const LandingPage = () => {
    const texts = [
        "Secure your contracts with ease.",
        "Partner with trusted buyers.",
        "Guarantee stable income today.",
        "AgroPact: farming simplified.",
    ];

    return (
        <div className="landing-page">
            <TypingEffect texts={texts} />
            {/* Other components */}
        </div>
    );
};

export default LandingPage;
