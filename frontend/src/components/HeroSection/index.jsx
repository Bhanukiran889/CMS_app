import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { highlightText } from '../../utils/highlightText'; // make sure to create this file

const HeroSection = () => {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    axios
      .get('https://cms-app-b9fg.onrender.com/api/heading')
      .then((res) => setHeading(res.data.content))
      .catch((err) => console.error('Error fetching heading:', err));
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-heading">{highlightText(heading)}</h1>
      <p className="hero-subtext">
        Powerful AI solutions that go beyond mere data sorting and exploration.
        Use our array of AI enabled solutions that understand your business and
        recommend the optimal way forward.
      </p>
      <button className="hero-button">Get started</button>
    </section>
  );
};

export default HeroSection;
