import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TechTr from "../assets/img/TechTraining_img-01.png";
import Chu from "../assets/img/chu_img-01.png";
import Ebook from "../assets/img/e_book_img-01.png";
import HumanAc from "../assets/img/human_ai_academy_img-01.png";
import MemberCom from "../assets/img/memberCom_img-01.png";
import TaskMn from "../assets/img/task_manager_img-01.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';

export const Projects = () => {

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

  const projects = [
    {
      title: "TechTraining",
      description: "Mobile App E-learning ",
      imgUrl: TechTr,
    },
    {
      title: "Archive CHU",
      description: "Plateforme Management & Statistics",
      imgUrl: Chu,
    },
    {
      title: "E-Book",
      description: "Book Management",
      imgUrl: Ebook,
    },
    {
      title: "Human AI Academy",
      description: "E-learning Plateforme",
      imgUrl: HumanAc,
    },
    {
      title: "MemberCom",
      description: "Internal Communication between Members of Company ",
      imgUrl: MemberCom,
    },
    {
      title: "Task Manager",
      description: "Mobile App Task Management",
      imgUrl: TaskMn,
    },
  ];

  return (
    <section className="project shadow" id="projects">
      <Container>
        <Row>
                <div className="col-12">
                    <div className="">
                        <h2>Projects</h2>
                        <Carousel
                        responsive={responsive} 
                        infinite={true} 
                        autoPlaySpeed={3000}
                        arrows={false}
                        shouldResetAutoplay
                        showDots
                        itemClass=" d-flex align-items-center justify-items-center px-3 mb-5"
                        >
                          {
                          projects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Carousel>
                    </div>
                </div>
        </Row>
      </Container>
    </section>
  )
}
