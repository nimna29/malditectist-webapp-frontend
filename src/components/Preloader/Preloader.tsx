import React from 'react';
import './Preloader.css';

interface PreloaderProps {
    message?: string | null;
}

const Preloader: React.FC<PreloaderProps> = ({ message }) => {
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
        </div>
    );
};

export default Preloader;
