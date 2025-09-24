import { useInView } from "react-intersection-observer";

function TechItem(props) {
  const [techItemRef, techItemInView] = useInView();
  const color = props.color;
  const fontColor = props.fontColor;
  const name = props.name;
  const delay = props.transitionDelay;

  return (
    <div ref={techItemRef} className={'techItem ' + (techItemInView?'enable':'')} style={{backgroundColor: color, transitionDelay: delay + 's', color: fontColor}}>
      {name}
    </div>
  );
}

export default TechItem;
