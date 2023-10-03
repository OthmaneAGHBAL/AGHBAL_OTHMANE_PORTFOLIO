import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {PiStudentFill} from 'react-icons/pi'

export const Formation = () => {


  return (
    <section className=" py-3 shadow" id="formation" >
      <Container>
      <div className=" fs-1 align-content-center text-center fw-bold py-3">Formation</div>

      <VerticalTimeline className=" py-5 my-4">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#29138b' }}
                contentArrowStyle={{ borderRight: '7px solid #29138b' }}
                date="2021 - 2024"
                dateClassName=" text-white"
                iconStyle={{ background: '#29138b', color: '#96ff00' }}
                icon={<PiStudentFill/>}
            >
                <h3 className="vertical-timeline-element-title text-light">National School of Applied Sciences</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className="time_line_option">
                Engineering Cycle, Computer Science
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#29138b' }}
                contentArrowStyle={{ borderRight: '7px solid #29138b' }}
                date="2019 - 2021"
                iconStyle={{ background: '#29138b', color: '#96ff00' }}
                icon={<PiStudentFill/>}
            >
                <h3 className="vertical-timeline-element-title text-light">National School of Applied Sciences</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className="time_line_option">
                Preparatory cycle
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#29138b' }}
                contentArrowStyle={{ borderRight: '7px solid  #29138b' }}
                date="2018 - 2019"
                iconStyle={{ background: '#29138b', color: '#96ff00' }}
                icon={<PiStudentFill/>}
            >
                <h3 className="vertical-timeline-element-title text-light">Lycee Zineb Anefzaouia</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className="time_line_option">
                Bachelor of Science Mathematics - A
                </p>
            </VerticalTimelineElement>
   
            
            </VerticalTimeline>
      </Container>
    </section>
  )
}
