import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ScrollHere(props) {
  const [slide1Ref, slide1InView] = useInView();


  return (
    <div ref={slide1Ref} className={'scrollHere ' + (slide1InView?'enable':'')}></div>
  );
}

export default ScrollHere;
