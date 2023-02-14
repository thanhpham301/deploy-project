import { useState, useEffect } from "react";

function ScrollUp() {
    const [showGoToTop, setShowGoToTop] = useState(false);
  
    useEffect(() => {
      const scrollHandleWindow = () => {
        if (window.scrollY >= 300) {
          setShowGoToTop(true);
        } else {
          setShowGoToTop(false);
        }
      };
      window.addEventListener('scroll', scrollHandleWindow);
      return () => window.removeEventListener('scroll', scrollHandleWindow);
    }, []);
  
    const handleScrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
  
    return (
      showGoToTop && (
        <div onClick={handleScrollUp}>
          <button className='fixed h-10 w-10 bg-gray-400 text-center bottom-20 right-5 rounded-full'>
            <i className='fas fa-arrow-up'></i>
          </button>
        </div>
      )
    );
}

export default ScrollUp;