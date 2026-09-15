import React from 'react';
import './AboutHero.css';

const AboutHero: React.FC = () => {
  return (
    <>
      <section className="about-hero">
        <img src="/about-hero-bg.png" alt="Commander Dilip Jain overseeing naval operations" className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <div className="about-hero-profile">
            <div className="about-profile-circle">
              <img src="/photo.jpeg" alt="Commander Dilip Jain" className="about-profile-img" />
            </div>
          </div>
          <div className="about-hero-text">
            <h1 className="about-hero-name">Commander Dilip Jain<br />(Retd.)</h1>
            <p className="about-hero-years">37+ Years of Naval &amp; Shipbuilding Leadership</p>
            <p className="about-hero-tagline">VETERAN SUBMARINER | DEFENCE &amp; MARINE STRATEGIST</p>
            <p className="about-hero-contact">+91 88793 99828 &nbsp;|&nbsp; dilipjain@gmail.com</p>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE CARDS ── */}
      <section className="about-expertise">
        <div className="about-expertise-inner">
          <div className="about-expertise-card">
            <img src="/about-icon-1.png" alt="Submarine Icon" className="about-exp-icon" />
            <h3 className="about-exp-title">Submarine &amp; Warship<br />Programmes</h3>
            <p className="about-exp-body">
              Construction, Production, Outfitting, and Inspections, Testing &amp; Acceptance Trials
              across major submarine and warship programmes.
            </p>
          </div>
          <div className="about-expertise-card">
            <img src="/about-icon-2.png" alt="Strategic Planning Icon" className="about-exp-icon" />
            <h3 className="about-exp-title">Strategic &amp; Technical<br />Leadership</h3>
            <p className="about-exp-body">
              Strategic Planning, Project Management, Operations, and Indigenisation across
              India's defence manufacturing ecosystem.
            </p>
          </div>
          <div className="about-expertise-card">
            <img src="/about-icon-3.png" alt="Global Handshake Icon" className="about-exp-icon" />
            <h3 className="about-exp-title">Negotiations and<br />International Technology</h3>
            <p className="about-exp-body">
              Commercial and Technical Negotiations, and Management of International Defence
              Technologies applied to the Indian context.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
