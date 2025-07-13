import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import "./index.css";

import sideTexure from "../../assets/heroSideTexture.png";
import searchBg from "../../assets/heroSearchBgTexture.png";
import { highlightText } from "../../utils/highlightText";

const HeroSection = () => {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(true);

  const headingRef = useRef();
  const subtextRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    axios
      .get("https://cms-app-b9fg.onrender.com/api/heading")
      .then((res) => {
        setHeading(res.data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching heading:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && heading) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.6 }
      );
    }
  }, [loading, heading]);

  return (
    <section className="hero">
      {/* Decorative Backgrounds */}
      <img src={sideTexure} alt="side texture" className="bg-side" />
      <img src={searchBg} alt="search texture" className="bg-search" />

      {/* Main Content */}
      <div className="hero-content">
        {loading ? (
          <>
            <div className="skeleton-container">
              <div className="skeleton-heading head-width1" />
              <div className="skeleton-heading head-width2" />
              <div className="skeleton-heading head-width3" />
              <div className="skeleton-heading head-width4" />
            </div>
            <div>
              <div className="skeleton-subtext subtext-width1" />
              <div className="skeleton-subtext subtext-width2" />
              <div className="skeleton-subtext subtext-width3" />
            </div>
            <div className="skeleton-button" />
          </>
        ) : (
          <>
            <h1 ref={headingRef} className="hero-heading">
              {highlightText(heading)}
            </h1>
            <p ref={subtextRef} className="hero-subtext">
              Powerful AI solutions that go beyond mere data sorting and
              exploration. Use our array of AI enabled solutions that understand
              your business and recommend the optimal way forward.
            </p>
            <button ref={buttonRef} className="hero-button">
              Get started
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
