
import 'react-multi-carousel/lib/styles.css';
import { Row,Col } from 'react-bootstrap';
import {FaJava,FaPhp,FaC} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiSpring,
  SiIonic,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiVisualstudio,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiWix,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiPython,
  SiPycharm,
  SiIntellijidea,
  SiAdobeillustrator,
  SiCanva,
  SiMysql,
  SiFirebase,
  SiWordpress,
  SiHtml5,
  SiCss3
} from 'react-icons/si'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
        <div className="container" fluid="sm">
            <div className="row ">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn shadow">
                        <h2>Skills</h2>
                        <Row lg={2} md={2} sm={1}  >
                          <Col sm={20} className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                                Programming Langages
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiJavascript /></li>
                                <li className='list-inline-item'><SiTypescript /></li>
                                <li className='list-inline-item'><FaJava /></li>
                                <li className='list-inline-item'><FaPhp/></li>
                                <li className='list-inline-item'><SiCsharp/></li>
                                <li className='list-inline-item'><SiCplusplus/></li>
                                <li className='list-inline-item'><SiPython /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                                Frameworks
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiTailwindcss /></li>
                                <li className='list-inline-item'><SiBootstrap /></li>
                                <li className='list-inline-item'><SiReact /></li>
                                <li className='list-inline-item'><SiNodedotjs/></li>
                                <li className='list-inline-item'><SiAngular/></li>
                                <li className='list-inline-item'><SiSpring/></li>
                                <li className='list-inline-item'><SiIonic /></li>
                                <li className='list-inline-item'><SiNextdotjs /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                                Design
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiAdobeillustrator /></li>
                                <li className='list-inline-item'><SiCanva /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                                Database
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiMysql /></li>
                                <li className='list-inline-item'><SiFirebase /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                                Tools
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiPycharm /></li>
                                <li className='list-inline-item'><SiVisualstudio /></li>
                                <li className='list-inline-item'><SiVisualstudiocode /></li>
                                <li className='list-inline-item'><SiAndroidstudio /></li>
                                <li className='list-inline-item'><SiGit /></li>
                                <li className='list-inline-item'><SiGithub /></li>
                                <li className='list-inline-item'><SiIntellijidea /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                              CMS
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiWix /></li>
                                <li className='list-inline-item'><SiWordpress /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                              Markup Langages
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiHtml5 /></li>
                                <li className='list-inline-item'><SiCss3 /></li>
                              </ul>
                          </Col>
                          <Col sm={20}  className=' border border-1'>
                              <div className='title_skill py-2 fs-5'>
                              Office Tools
                              </div>
                              <ul className='list-inline list-icons'>
                                <li className='list-inline-item'><SiMicrosoftword /></li>
                                <li className='list-inline-item'><SiMicrosoftpowerpoint /></li>
                                <li className='list-inline-item'><SiMicrosoftexcel /></li>
                              </ul>
                          </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
