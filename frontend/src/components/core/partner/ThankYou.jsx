import React, { useState, useEffect } from 'react';
import '../../css/ThankYou.css';

const ThankYou = () => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // TODO: Handle redirect to homepage
                    window.location.href = '/';
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleReturnHome = () => {
        // Handle return to homepage
        console.log('Returning to homepage...');
        // window.location.href = '/';
    };

    return (
        <div className="thank-you-container">
            <div className="thank-you-content">
                <h1 className="thank-you-title">
                    Thank You. Your response has been recorded,
                </h1>
                <h2 className="thank-you-subtitle">
                    Our Team will contact you soon!
                </h2>

                <button
                    className="return-button"
                    onClick={handleReturnHome}
                >
                    Return to Homepage
                </button>

                <p className="countdown-text">
                    You will be automatically redirected to home page in {countdown} sec.
                </p>
            </div>
        </div>
    );
};

export default ThankYou;