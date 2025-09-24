import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import TechItem from "../components/TechItem";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CardLabel from "../components/CardLabel";
import AboutMeCard from "../components/AboutMeCard";
import BackToTop from "../components/BackToTop";

import careerLogo_1 from "../assets/images/careerLogo_1.png";
import careerLogo_2 from "../assets/images/careerLogo_2.png";

import projectThumb_1 from "../assets/images/project/project_1.png";
import projectThumb_2 from "../assets/images/project/project_2.png";
import projectThumb_3 from "../assets/images/project/project_3.png";
import projectThumb_4 from "../assets/images/project/project_4.png";
import projectThumb_5 from "../assets/images/project/project_5.png";
import projectThumb_6 from "../assets/images/project/project_6.png";

function Home() {
  const [profileLineRef, profileLineInView] = useInView();
  const [profileRef, profileInView] = useInView();
  const [profileLineBottomRef, profileLineBottomInView] = useInView();
  const [aboutMeNameRef, aboutMeNameInView] = useInView();
  const [aboutMeBirthRef, aboutMeBirthInView] = useInView();
  
  const [aboutMeTitleRef, aboutMeTitleInView] = useInView();
  const [aboutMeCardRef, aboutMeCardInView] = useInView();


  const [career1Ref, career1InView] = useInView();
  const [career2Ref, career2InView] = useInView();
  
  const [project1Ref, project1InView] = useInView();
  const [project2Ref, project2InView] = useInView();
  const [project3Ref, project3InView] = useInView();
  const [project4Ref, project4InView] = useInView();
  const [project5Ref, project5InView] = useInView();
  const [project6Ref, project6InView] = useInView();

  const [profileEnableState, setProfileEnableState] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const trackScrollPosition = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    
  };

  useEffect(()=>{
    setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', trackScrollPosition);
  },[])

  useEffect(()=>{
    if(scrollPosition >= 400)
      setProfileEnableState(true);
    else
      setProfileEnableState(false);
  },[scrollPosition])

  return (
    <div className={'page'}>
      {/* <Navbar /> */}
      <div className={'profileSection'}>
        <div className={"profileContainer "} style={{transform: `translateY(${scrollPosition * 0.5}px)`}}>
          <div ref={profileLineRef} className={'profileLine ' + (profileLineInView?'enable ':'') + (profileEnableState?'disable ':'')}></div>
          <div ref={profileRef} className={"profileWrapper " + (profileInView?'enable ':'') + (profileEnableState?'disable ':'')}>
            <div className="profileHello">안녕하세요 저는<br/>웹 개발자&nbsp;<div className="profileName">배준현&nbsp;</div>입니다</div>
          </div>
          <div ref={profileLineBottomRef} className={'profileLineBottom ' + (profileLineBottomInView?'enable ':'') + (profileEnableState?'disable ':'')}></div>
        </div>
      </div>
      <div className={'profileBottomScrollBox ' + (profileEnableState?'disable ':'')}>
            <Scroll />
      </div>
      <div className="aboutMeContainer" id="aboutCon">
        <div className="aboutMeSection">
          <div className="row">
            <div ref={aboutMeTitleRef} className={"card titleCard " + (aboutMeTitleInView?'enable ':'')}>
              <h1>About</h1>
            </div>
          </div>
          <div className="row">
            <div ref={aboutMeCardRef} className={"card " + (aboutMeCardInView?'enable ':'')}>
                <div ref={aboutMeNameRef} className={"aboutMeName " + (aboutMeNameInView?'enable ':'')}>배준현 (Bae JunHyeon)</div>
                <div ref={aboutMeBirthRef} className={"aboutMeBirth " + (aboutMeBirthInView?'enable ':'')}>Birth - 2001.02.05</div>
                <CardLabel text={'Language'} />
                <div className="aboutMeTech">
                  <TechItem color={'#e96228'} name={'HTML'} transitionDelay={0} />
                  <TechItem color={'#159cd4'} name={'CSS'} transitionDelay={.25} />
                  <TechItem color={'#eab924'} name={'JavaScript'} transitionDelay={.5} />
                  <TechItem color={'#f0931c'} name={'Java'} transitionDelay={.75} />
                </div>
                <CardLabel text={'Frontend'} />
                <div className="aboutMeTech">
                  <TechItem color={'#212121'} fontColor={'#5ed3f3'} name={'React.js'} transitionDelay={0} />
                  <TechItem color={'#f73a02'} name={'Svelte'} transitionDelay={.25} />
                  <TechItem color={'#000000'} name={'NEXT.js'} transitionDelay={.5} />
                  <TechItem color={'#3fb27f'} name={'Vue.js'} transitionDelay={.5} />
                </div>
                <CardLabel text={'Backend'} />
                <div className="aboutMeTech">
                  <TechItem color={'#212121'} name={'Express.js'} transitionDelay={0} />
                  <TechItem color={'#77bc1f'} name={'Spring'} transitionDelay={.25} />
                  <TechItem color={'#7277af'} name={'Php'} transitionDelay={1} />
                </div>
                <CardLabel text={'Mobile'} />
                <div className="aboutMeTech">
                  <TechItem color={'#f57a37'} name={'Swift'} transitionDelay={0} />
                  <TechItem color={'#c921af'} name={'Kotlin'} transitionDelay={.25} />
                  <TechItem color={'#baa5cc'} name={'Objective-C'} transitionDelay={.5} />
                </div>
                <CardLabel text={'Tools'} />
                <div className="aboutMeTech">
                  <TechItem color={'#e84e31'} name={'Git'} transitionDelay={0} />
                  <TechItem color={'#4181e4'} name={'GCP'} transitionDelay={.25} />
                  <TechItem color={'#001d34'} fontColor={'#2fa3f7'} name={'Photoshop'} transitionDelay={.5} />
                  <TechItem color={'#310000'} fontColor={'#f79500'} name={'Illustrator'} transitionDelay={.75} />
                  <TechItem color={'#450135'} fontColor={'#f75eee'} name={'Xd'} transitionDelay={1} />
                  <TechItem color={'#207196'} name={'Wordpress'} transitionDelay={1.25} />
                </div>
            </div>
            <AboutMeCard />
          </div>
        </div>
      </div>
      <div className="careerSection">
        <div className="SectionTitle">Career</div>
        <div ref={career1Ref} className={"careerItem " + (career1InView?'enable ':'')} onClick={() => {window.open('https://www.sphereax.com/')}}>
          <div className="careerThumb"><img alt="careerLogo_1" src={careerLogo_1} /></div>
          <div className="careerContents">
            <div className="careerTitle">Sphere AX</div>
            <div className="careerPeriod">2022.05 ~ 2025.05</div>
            <div className="careerPosition">앱 유지보수 및 웹 프론트엔드</div>
            <div className="careerInfo">AI로 상황을 인식하여 위험상황일때 미리 예측하여 조치를 취할 수 있는 솔루션을 제작하며 이 회사에서 앱 유지보수 및 프론트엔드를 담당하였습니다.</div>
          </div>
        </div>
        <div ref={career2Ref} className={"careerItem " + (career2InView?'enable ':'')} onClick={() => {window.open('https://gryard.com/')}}>
          <div className="careerThumb"><img alt="careerLogo_2" src={careerLogo_2} /></div>
          <div className="careerContents">
            <div className="careerTitle">푸른들소프트</div>
            <div className="careerPeriod">2018.11 ~ 2022.05</div>
            <div className="careerPosition">앱, 웹 개발</div>
            <div className="careerInfo">SI업체로 다양한 프로젝트를 진행하였습니다 주로 앱 개발을 하였으며 React, Wordpress를 이용한 프론트엔드를 진행하였습니다.</div>
          </div>
        </div>
      </div>
      <div className="projectSection">
        <div className="SectionTitle">Major projects</div>
        <div className="row">
          <div ref={project1Ref} className={"projectItem " + (project1InView?'enable ':'')}>
            <div className="projectThumb"><img alt="projectThumb_1" src={projectThumb_1} /></div>
            <div className="projectContents">
            <div className="projectTitle">방탈출 힌트앱</div>
                <div className="aboutMeTech">
                  <TechItem color={'#63a014'} name={'Android'} transitionDelay={0} />
                  <TechItem color={'#f0931c'} name={'Java'} transitionDelay={.25} />
                </div>
            <div className="projectInfo">머더파커라는 방탈출게임에서 사용하는 힌트 어플입니다 전체 앱 제작하였습니다.<br/><br/>※ 방탈출 플레이시 확인 가능합니다</div>
            </div>
          </div>
          <div ref={project2Ref} className={"projectItem " + (project2InView?'enable ':'')} onClick={() => {window.open('https://play.google.com/store/apps/details?id=com.kosaf.gpsAttendance&hl=ko')}}>
            <div className="projectThumb white"><img alt="projectThumb_2" src={projectThumb_2} /></div>
            <div className="projectContents">
            <div className="projectTitle">한국장학재단 출근부</div>
                <div className="aboutMeTech">
                  <TechItem color={'#f0931c'} name={'Java'} transitionDelay={0} />
                  <TechItem color={'#baa5cc'} name={'Objective-C'} transitionDelay={.25} />
                  <TechItem color={'#212121'} fontColor={'#5ed3f3'} name={'React.js'} transitionDelay={.5} />
                </div>
            <div className="projectInfo">GPS로 사용자위치 판단 후 장학재단 안에 있을 시 출근처리 가능하게 처리한 출근부 어플리케이션입니다. 앱과 웹 프론트엔드를 담당하였습니다.</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div ref={project3Ref} className={"projectItem " + (project3InView?'enable ':'')}>
            <div className="projectThumb white"><img alt="projectThumb_3" src={projectThumb_3} /></div>
            <div className="projectContents">
            <div className="projectTitle">CrowdWatcher</div>
                <div className="aboutMeTech">
                  <TechItem color={'#63a014'} name={'Android'} transitionDelay={0} />
                  <TechItem color={'#f0931c'} name={'Java'} transitionDelay={.25} />
                </div>
            <div className="projectInfo">CCTV으로 군중이 밀집된 장소 영상으로 보낸 후 AI로 분석하여 경고를 보내는 솔루션입니다. AI 2명, 백엔드 1명, 프론트엔드 1명 중 프론트엔드를 담당하였습니다.</div>
            </div>
          </div>
          <div ref={project4Ref} className={"projectItem " + (project4InView?'enable ':'')} onClick={() => {window.open('https://www.gcs.co.kr/')}}>
            <div className="projectThumb"><img alt="projectThumb_4" src={projectThumb_4} /></div>
            <div className="projectContents">
            <div className="projectTitle">푸른방송</div>
                <div className="aboutMeTech">
                  <TechItem color={'#7277af'} name={'php'} transitionDelay={0} />
                  <TechItem color={'#e96228'} name={'Html'} transitionDelay={.25} />
                  <TechItem color={'#159cd4'} name={'CSS'} transitionDelay={.5} />
                  <TechItem color={'#eab924'} name={'JavaScript'} transitionDelay={.75} />
                </div>
            <div className="projectInfo">푸른방송 홈페이지의 프론트엔드를 담당했습니다.</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div ref={project5Ref} className={"projectItem " + (project5InView?'enable ':'')} onClick={() => {window.open('https://dmile.daegu.go.kr/')}}>
            <div className="projectThumb white"><img alt="projectThumb_5" src={projectThumb_5} /></div>
            <div className="projectContents">
            <div className="projectTitle">D마일</div>
                <div className="aboutMeTech">
                  <TechItem color={'#f0931c'} name={'Android'} transitionDelay={0} />
                  <TechItem color={'#f57a37'} name={'Swift'} transitionDelay={.25} />
                </div>
            <div className="projectInfo">대구에서 사용가능한 마일리지 D마일 웹 페이지 프론트엔드 및 앱 유지보수를 담당하였습니다.</div>
            </div>
          </div>
          <div ref={project6Ref} className={"projectItem " + (project6InView?'enable ':'')} onClick={() => {window.open('http://www.byul-byul.com/')}}>
            <div className="projectThumb white"><img alt="projectThumb_6" src={projectThumb_6} /></div>
            <div className="projectContents">
            <div className="projectTitle">별별 인권체험관</div>
                <div className="aboutMeTech">
                  <TechItem color={'#207196'} name={'Wordpress'} transitionDelay={0} />
                  <TechItem color={'#3fb27f'} name={'Vue.js'} transitionDelay={.25} />
                  <TechItem color={'#c921af'} name={'Kotlin'} transitionDelay={.5} />
                </div>
            <div className="projectInfo">교육용 별별인권체험관의 스템프투어 앱과 웹을 제작하였습니다.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSection">
        <div className="footerContents">
          <div className="footerEmail">qownsgus0205@gmail.com</div>
          <div className="footerCopyright">ⓒ 2025. JunHyeon Bae. All rights reserved.</div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default Home;
