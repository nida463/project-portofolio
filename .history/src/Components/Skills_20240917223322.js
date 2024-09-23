import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {/* Skill Card 1 */}
        <div className="skills-card">
          <div className="skills-icon">
            <img src="/img/ProductDesign.png" alt="Product Design Icon" />
          </div>
          <div className="skills-content">
            <h3 className="skills-title">Product</h3>
            <p className="skills-subtitle">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
        </div>

        {/* Skill Card 2 */}
        <div className="skills-card">
          <div className="skills-icon">
            <img src="/img/VisualDesign.png" alt="Visual Design Icon" />
          </div>
          <div className="skills-content">
            <h3 className="skills-title">Visual Design</h3>
            <p className="skills-subtitle">
              Designing visuals for digital interfaces with creativity and precision.
            </p>
          </div>
        </div>

        {/* Skill Card 3 */}
        <div className="skills-card">
          <div className="skills-icon">
            <img src="/img/ArtDirection.png" alt="Art Direction Icon" />
          </div>
          <div className="skills-content">
            <h3 className="skills-title">Art Direction</h3>
            <p className="skills-subtitle">
              Guiding visual creativity for compelling visual narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
