import React from 'react';
import FeatureCard from '../FeatureCard';
import './index.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Multi-source data',
      description: 'Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.',
      icon: '📊',
    },
    {
      title: 'Stakeholder alignment',
      description: 'Stakeholders understand the “how,” “so what” and “now what,” leading to clear decision-making trade offs.',
      icon: '🤝',
    },
    {
      title: 'Internal capability building',
      description: 'We productize all our work, enhance them with the latest AI tech, and train your internal teams to leverage them.',
      icon: '🧠',
    },
    {
      title: 'Continuous engagement',
      description: 'We engage in the long-term to enhance, course-correct, and adopt new models.',
      icon: '🔁',
    },
    {
      title: 'Ready to Go Algos',
      description: 'Accelerators with learnings from past projects, generating actionable results.',
      icon: '🚀',
    },
    {
      title: 'Internal capability',
      description: 'Enhance them with the latest AI technology and build internal capability.',
      icon: '💡',
    },
  ];

  return (
    <section className="features-section">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

export default FeaturesSection;
