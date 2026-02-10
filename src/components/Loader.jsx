import { useState, useEffect } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">AY</div>
      </div>
    </div>
  );
};

export default Loader;
