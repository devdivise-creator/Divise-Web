import React, { useRef, useState } from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Warship & Submarine\nProgrammes',
    image: '/service-bg-1.png',
    icon: '/service-icon-bg-1.png',
  },
  {
    id: 2,
    title: 'Make in India &\nIndigénisation',
    image: '/service-bg-2.png',
    icon: '/service-icon-bg-2.png',
  },
  {
    id: 3,
    title: 'Strategic Collaboration\nwith Indian & Foreign\nDefence Majors',
    image: '/service-bg-3.png',
    icon: '/service-icon-bg-3.png',
  },
  {
    id: 4,
    title: 'Business Strategy &\nDevelopment',
    image: '/service-bg-4.png',
    icon: '/service-icon-bg-4.png',
  },
  {
    id: 5,
    title: 'Identifying New\nBusiness Opportunities',
    image: '/service-bg-5.png',
    icon: '/service-icon-bg-5.png',
  },
  {
    id: 6,
    title: 'Collaboration with Indian\nShipyards & Defence\nIndustries',
    image: '/service-bg-6.png',
    icon: '/service-icon-bg-6.png',
  },
  {
    id: 7,
    title: 'Operations, Maintenance\n& Technology Management',
    image: '/service-bg-7.png',
    icon: '/service-icon-bg-7.png',
  },
  {
    id: 8,
    title: 'Mentoring & Advising\nIndustries in the Indian\nDefence Eco-System',
    image: '/service-bg-8.png',
    icon: '/service-icon-bg-8.png',
  },
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(25);

  const updateScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setThumbWidth(100);
      return;
    }
    
    setScrollProgress(scrollLeft / maxScroll);
    setThumbWidth((clientWidth / scrollWidth) * 100);
  };

  React.useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);
    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!scrollRef.current) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        {/* Header row */}
        <div className="services-header">
          <div className="services-heading-group">
            <span className="services-label">What we offer</span>
            <h2 className="services-title">Core Service<br/>Offerings</h2>
          </div>
          <p className="services-desc">
            End-to-end advisory across India's defence and marine ecosystem — from
            submarine programmes and Make in India indigenisation to strategic
            collaboration and business development.
          </p>
        </div>

        {/* 8-card swipeable carousel */}
        <div 
          className={`services-carousel ${isDown ? 'active' : ''}`}
          ref={scrollRef}
          onScroll={updateScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Services carousel"
        >
          {services.map((s) => (
            <div key={s.id} className="service-card">
              <div className="service-card-bg-wrap">
                <img src={s.image} alt={s.title} className="service-card-bg" loading="lazy" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h4 className="service-card-title">{s.title}</h4>
              </div>
              <div className="service-card-icon">
                <img src={s.icon} alt={`${s.title} icon`} />
              </div>
            </div>
          ))}
        </div>

        <div className="services-nav-container">
          <button className="carousel-arrow" onClick={scrollPrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="services-divider">
            <div 
              className="services-progress-thumb" 
              style={{ 
                width: `${thumbWidth}%`, 
                left: `${scrollProgress * (100 - thumbWidth)}%` 
              }}
            ></div>
          </div>

          <button className="carousel-arrow" onClick={scrollNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
