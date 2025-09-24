import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AboutMeCard(props) {
  const [ref, inView] = useInView();


  return (
    <div ref={ref} className={'card aboutMeCard ' + (inView?'enable':'')}>
      <div className="cardTitle">.Me</div>
      <div className="cardContent">
        방문해주셔서 감사합니다.<br/><br/>
        웹 개발자 <b>배준현</b>입니다.<br/><br/>
        저는 SI기업과 솔류션 기업에 종사하며 다양한 프로젝트에 참여 하였습니다.<br/><br/>
        사용자 친화적인 인터페이스를 구현하기 위해 React를, 안정적인 서버를 구축하기 위해 Express를 주로 사용했습니다.<br/><br/>
      </div>
    </div>
  );
}

export default AboutMeCard;
