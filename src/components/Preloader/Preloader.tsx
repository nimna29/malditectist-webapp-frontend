import React, { useState, useEffect } from 'react';
import './Preloader.css';

interface PreloaderProps {
    message?: string | null;
}

const Preloader: React.FC<PreloaderProps> = ({ message }) => {
    const [loadingTimeExceeded, setLoadingTimeExceeded] = useState(false);

    // Set the maximum loading time threshold (in milliseconds)
    const maxLoadingTime = 2 * 60 * 1000; // 2 minutes = 2 * 60 * 1000

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingTimeExceeded(true);
        }, maxLoadingTime);

        return () => clearTimeout(timer);
    }, [maxLoadingTime]);

    return (
        <div className="preloader" data-testid="preloader">
            <div className="malditectist-logo-icon" />
            <div className="pre-spinner">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {message && (
                <div className="preloader-message">
                    <span className="typing-text">{message}</span>
                </div>
            )}
            {loadingTimeExceeded && (
                <div className="loading-time-exceeded-box">
                    <div className="loading-time-exceeded">
                    😞 Took too long! 🔄️ Please refresh the page or Try again later.
                </div>
                    <div className="footer">
                        <div className="follow-for-more">
                            <div className="follow-for-more-text">Connect with the Developer</div>
                            <div className="follow-for-more-icons">
                                <a href="https://github.com/nimna29" className="github-logo" target="_blank" rel="noopener noreferrer">
                                    <span className="visually-hidden"></span>
                                </a>
                                <a href="https://www.linkedin.com/in/nimna-niwarthana" className="linkedin-logo" target="_blank" rel="noopener noreferrer">
                                    <span className="visually-hidden"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Preloader;
