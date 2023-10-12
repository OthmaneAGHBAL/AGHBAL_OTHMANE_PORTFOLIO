import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import headerImg from "../assets/img/logo_hero-01.svg";
import {SiGmail,SiInstagram,SiGithub,SiLinkedin} from "react-icons/si"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software engineering Student","Full Stack Developer", "Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center mb-5">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility className="">
              <div className="text_and_social">
                <h1> <span className="banner_title1">{`Hi! I'm AGHBAL Othmane`}</span>
                <br/>
                <span className="banner_title2 txt-rotate fs-1" dataPeriod="1000" style={{color:"#96ff00"}} ><span className="wrap">{text}</span></span></h1>
                  <p>As a software engineering student, I've honed my technical skills and acquired a deep understanding of software development. Simultaneously, my passion for design has allowed me to bring aesthetics and user experience to the forefront of my work.</p>
                  <div className="social-icon mb-5" >
                    <a href="https://www.linkedin.com/in/othmane-aghbal-2150141b0/" target="_blank"><span><SiLinkedin /></span></a>
                    <a href="https://github.com/OthmaneAGHBAL" target="_blank"><span><SiGithub  /></span></a>
                    <a href="mailto:aghbal.othmane9@gmail.com" ><span><SiGmail /></span></a>
                    <a href="https://www.instagram.com/othmane_aghbal/" target="_blank"><span><SiInstagram /></span></a>
                  </div>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                <div className="animate__animated animate__zoomIn">
                  <img src={headerImg} alt="Header Img"/>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
