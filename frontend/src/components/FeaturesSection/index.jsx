import React, { useState } from 'react';
import features from '../../constants/features';
import './index.css';

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = features.length;
  const percent = (currentIndex / (total - 1)) * 100;

  return (
    <section className="timeline-section">
      <div className="timeline-wrapper">
        <div className="progress-line-background" />
        <div
          className="progress-line-filled"
          style={{ width: `${percent}%` }}
        />

        {features.map((feature, index) => (
          <div
            className="timeline-point"
            style={{ left: `${(index / (total - 1)) * 100}%` }}
            key={index}
          >
            {/* Dot */}
            <div
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />

            {/* Card */}
            <div className={`card ${index % 2 === 0 ? 'top' : 'bottom'}`}>
              <div className="icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
