import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the document is already loaded, remove loader immediately or with a small delay
    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 500); // small delay to let logo animation run
    } else {
      const handleLoad = () => {
        setTimeout(() => setLoading(false), 500);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className={`loader-overlay ${!loading ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="loader-logo-wrapper">
        <img src="/logo.png" alt="DiViSe Logo" className="loader-logo" />
        <div className="loader-progress"></div>
      </div>
    </div>
  );
};

export default Loader;
