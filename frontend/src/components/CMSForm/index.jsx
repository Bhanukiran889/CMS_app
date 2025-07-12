import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "./index.css";

const CMSForm = () => {
   const [newHeading, setNewHeading] = useState('');
  const [error, setError] = useState('');
  const [showHighlight, setShowHighlight] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Update Heading');

  const navigate = useNavigate();
  const highlightRefs = useRef([]);
  const timeoutRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!newHeading.trim()) {
      setError('Heading cannot be empty');
      return;
    }

    setIsSubmitting(true);
    setButtonText('Updating...');

    // Timeout for slow server simulation (cold start)
    timeoutRef.current = setTimeout(() => {
      setButtonText('Server cold starting...');
    }, 4000); // change text after 4s if not resolved

    try {
      await axios.post('https://cms-app-b9fg.onrender.com/api/heading', {
        content: newHeading,
      });

      clearTimeout(timeoutRef.current); // clear timeout if success
      setButtonText('Update Heading');
      setIsSubmitting(false);
      navigate('/');
    } catch (err) {
      console.error(err);
      clearTimeout(timeoutRef.current);
      setError('Failed to update heading. Please try again.');
      setButtonText('Update Heading');
      setIsSubmitting(false);
    }
  };

  const rawText =
    "Hyper boost your *Revenue Management*, *Marketing* and *Commercial Functions* with Business Ready AI";

  // Animate both directions
  useEffect(() => {
    if (highlightRefs.current.length === 0) return;

    if (showHighlight) {
      gsap.fromTo(
        highlightRefs.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "bounce.out",
        }
      );
    } else {
      gsap.fromTo(
        highlightRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.5)",
        }
      );
    }
  }, [showHighlight]);

  const renderHighlightedText = (text) => {
    highlightRefs.current = [];

    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const clean = part.slice(1, -1);
        return (
          <span
            key={index}
            ref={(el) => (highlightRefs.current[index] = el)}
            style={{
              color: showHighlight ? "#ffb02e" : "inherit",
              fontWeight: showHighlight ? "bold" : "normal",
              display: "inline-block",
            }}
          >
            {clean}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="cms-container">
      <h2 className="cms-title">Admin CMS Panel</h2>

      <div className="note-box">
        <p>
          <strong>Note:</strong> To highlight specific words in the heading,
          wrap them with <code>*</code>.<br />
          For example:{" "}
          {showHighlight ? (
            <span style={{ color: "#ffb02e", fontWeight: "bold" }}>
              *Revenue*
            </span>
          ) : (
            <span>Revenue</span>
          )}
        </p>
        <div className="preview">{renderHighlightedText(rawText)}</div>

        <button
          type="button"
          className="toggle-btn"
          onClick={() => setShowHighlight((prev) => !prev)}
        >
          {showHighlight ? "Hide Highlight" : "Show Highlight"}
        </button>
      </div>

      <form className="cms-form" onSubmit={handleSubmit}>
        <label htmlFor="headingInput">Edit Main Heading</label>
        <textarea
          id="headingInput"
          value={newHeading}
          onChange={(e) => setNewHeading(e.target.value)}
          rows="4"
          placeholder="Enter new heading here..."
        />
        <button
          type="submit"
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {buttonText}
        </button>
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default CMSForm;
