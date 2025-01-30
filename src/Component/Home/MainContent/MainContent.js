import React, { useState, useEffect } from 'react';
import './MainContent.css'; // Import your CSS file for styling

function MainContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this effect will only run once when component mounts

  return (
    <div className="parallax-container">
      <div className="parallax" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className='contentSection'>
          <div className='contentText'>
            <p>WE ARE A LEADING MANUFACTURER, SUPPLIER AND EXPORTER OF SAFETY SHOES, NON-SAFETY PVC BOOTS, SAFETY GUMBOOTS, ETC. AT AFFORDABLE PRICE.</p>
          </div>
          <div className='contentImage'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;