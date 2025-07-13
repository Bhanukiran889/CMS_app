import React, { useState } from "react";
import features from "../../constants/features";
import "./index.css";

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = features.length;
  const percent = (currentIndex / (total - 1)) * 100;

  return (
    <section className="feature-section">
      <div className="feature-wrapper">
        <div className="feature-line-bg" />
        <div className="feature-line-fill" style={{ width: `${percent}%` }} />

        {features.map((feature, index) => (
          <div
            className="feature-point"
            style={{ left: `${(index / (total - 1)) * 100}%` }}
            key={index}
          >
            <div
              className={`feature-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
            <div
              className={`feature-card ${index % 2 === 1 ? "top" : "bottom"} ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <img src={feature.icon} className="feature-ico" />
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
