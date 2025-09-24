import { useEffect, useState } from "react";
import gsap from 'gsap';

function BackToTop(props) {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={'backToTop ' + (showButton ? 'show' : '')} onClick={scrollToTop}>
      TOP
    </div>
  );
}

export default BackToTop;
