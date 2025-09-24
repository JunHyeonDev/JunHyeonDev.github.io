import { useInView } from "react-intersection-observer";

function CardLabel(props) {
  const [ref, inView] = useInView();
  const text = props.text;

  return (
    <div ref={ref} className={'cardLabel ' + (inView?'enable':'')}>
      {text}
    </div>
  );
}

export default CardLabel;
