import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import features from "../../constants/features";
import "./index.css";

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = features.length;
  const percent = (currentIndex / (total - 1)) * 100;

  // Refs for each card
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = cardRefs.current[currentIndex];
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [currentIndex]);

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
              className={`feature-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`feature-card ${index % 2 === 1 ? "top" : "bottom"} ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <img src={feature.icon} className="feature-ico" alt={feature.title} />
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
