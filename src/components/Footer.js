import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import {SiGmail,SiInstagram,SiGithub,SiLinkedin} from "react-icons/si"

export const Footer = () => {
  return (
    <footer className="footer py-2">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="logo_img py-2">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/othmane-aghbal-2150141b0/" target="_blank"><span><SiLinkedin /></span></a>
                    <a href="https://github.com/OthmaneAGHBAL" target="_blank"><span><SiGithub  /></span></a>
                    <a href="mailto:aghbal.othmane9@gmail.com" ><span><SiGmail /></span></a>
                    <a href="https://www.instagram.com/othmane_aghbal/" target="_blank"><span><SiInstagram /></span></a>
                  </div>
            <p>Copyright &copy; 2023 AGHBAL Othmane</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
