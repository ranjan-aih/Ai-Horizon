import React from 'react';
import '../../css/WhoShouldPartner.css';

const WhoShouldPartner = () => {
    const partnerTypes = [
        'Consulting Firms',
        'Cloud Services Providers',
        'System Integrators (SIs)',
        'Independent Software Vendors (ISVs)',
        'Data & Analytics Companies',
        'Marketing & Growth Agencies'
    ];

    return (
        <div className="wsp-container">
            <div className="wsp-content">
                <h1 className="wsp-title">
                    Who should partner with us?
                </h1>

                <p className="wsp-description">
                    Our Partner Program is built for forward-thinking companies ready to lead
                    <br />
                    the GenAI revolution. Ideal partners include:
                </p>

                <div className="wsp-partner-list">
                    {partnerTypes.map((partnerType, index) => (
                        <div key={index} className="wsp-partner-item">
                            <span className="wsp-partner-text">{partnerType}</span>
                            <div className="wsp-partner-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhoShouldPartner;