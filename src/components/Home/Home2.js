import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myimg from "../../Assets/gokul.jpeg";
import leaf from "../../Assets/Projects/leaf.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 style={{ fontSize: "2.0em",textAlign: "center"}}>
            <span className="white">  LET ME <span className="purple"> INTRODUCE </span> MYSELF</span>
      </h1>
      <div class="raised-box">
        <div class="part-1">
          <div class="part-3">
            <img src={myimg} alt="Your Image" width="100" height="100"/> 
              <div class="user">
              <p ><b>Name:</b> Gokul Krishna</p>
              <p><b>Role:</b> Full stack developer</p>
              <p><b>Email:</b> gookul.krishna@gmail.com</p>
              </div>
          </div>
          <div class="part-4">
            <div class="part-4-heading"><h2 class="underline-on-hovers"><b>Skills</b></h2></div>
            <div class="part-4-box">
              <div class="skill-div">Spring MVC</div>
              <div class="skill-div">Spring Security</div>
              <div class="skill-div">Spring RestAPI</div>
              <div class="skill-div">Hibernate</div>
              <div class="skill-div">Microservices</div>
              <div class="skill-div">Docker</div>
              <div class="skill-div">Kubernetes</div>
              <div class="skill-div">Python</div>
              <div class="skill-div">Django</div>
              <div class="skill-div">Spring JPA</div>
              <div class="skill-div">Postman</div>
              <div class="skill-div">HTML</div>
              <div class="skill-div">CSS</div>
            </div>
          </div>
        </div>
        <div class="part-2">
          <h2 class="underline-on-hovers">About Me</h2>
          <p>Highly motivated and versatile programmer with a strong commitment to expanding technical knowledge and utilizing new technologies. Skilled in problem-solving and taking ownership of projects, with a proven track record of contributing to both individual and team goals.Dedicated to effective communication and collaboration, constantly staying ahead of industry trends and seeking new challenges to enhance skills and deliver exceptional outcomes</p>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br></br>

    <h1 className="project-heading" id="project">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black", textAlign:"center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div class="project-con" >
           <a href="https://github.com/gokul-24/Quiz-Application">
             <div class="flip-container">
               <div class="flipper">
                  <div class="front">
                    <img src={leaf} alt="Image Description"/>
                    <h2 class="proj-font">Quiz Application</h2>
                    <h5 class="proj-font">React, Spring, Docker, Netflix Eureka Server</h5>
                  </div>
                  <div class="back">
                    <p class="proj-font">A streamlined microservices-based Quiz app lets you build customized quizzes from a central question database. Add new questions, choose topics and difficulty levels, and share quizzes with fellow quiz enthusiasts – all seamlessly powered by Netflix Eureka for service discovery. Dive into a world of knowledge, one question at a time!</p>
                  </div>
               </div>
             </div>
           </a>
           <a href="https://github.com/gokul-24/URL-Shortner/">
             <div class="flip-container">
               <div class="flipper">
                  <div class="front">
                    <img src={leaf} alt="Image Description"/>
                    <h2 class="proj-font">URL Shortner</h2>
                    <h5 class="proj-font">Python,Django,HTML,CSS,SQLite3</h5>
                  </div>
                  <div class="back">
                    <p class="proj-font">Cramming long URLs into tweets or texts is a web-age struggle. This project is built on Django (backend).Generate a random 5-character string, tack it onto localhost:8000/, and boom! You've got a 20-character short URL redirecting to your long one. Clicks are tracked and displayed.All shortened URLs and their click counts are neatly organized in a table, giving you a clear picture of which links are getting the most love.</p>
                  </div>
               </div>
             </div>
           </a>
           <a href="https://github.com/gokul-24/E-waste">
             <div class="flip-container">
               <div class="flipper">
                  <div class="front">
                    <img src={leaf} alt="Image Description"/>
                    <h2 class="proj-font">E-Waste Management</h2>
                    <h5 class="proj-font">Django,HTML,CSS,SQL</h5>
                  </div>
                  <div class="back">
                    <p class="proj-font">Transform trash into treasure and build a sustainable future with [Website Name], your one-stop e-waste marketplace! Connect individuals, businesses, and responsible recycling agencies for seamless disposal and resource recovery. Sell your old gadgets to local buyers, find bulk raw materials directly from recycling factories, and empower small businesses with ethical sourcing options.</p>
                  </div>
               </div>
             </div>
           </a>
           <a href="https://github.com/gokul-24/E-Commerce">
             <div class="flip-container">
               <div class="flipper">
                  <div class="front">
                    <img src={leaf} alt="Image Description"/>
                    <h2 class="proj-font">E-Commerce</h2>
                    <h5 class="proj-font">Spring,Hibernate,MySQL</h5>
                  </div>
                  <div class="back">
                    <p class="proj-font">Dive into a seamless shopping experience where buyers browse diverse products, effortlessly manage carts, and track orders, all while a secure system empowers sellers to add, update, and manage their inventory with ease. Verified sellers hold the reins, controlling product listings and accessing valuable customer data, building a vibrant marketplace within a secure, one-hour session token framework – your e-commerce haven awaits!</p>
                  </div>
               </div>
             </div>
           </a>
      
      </div>
      <Container>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 style={{color:"black"}} >FIND ME ON</h1>
                <p style={{color:"black"}}>
                  Feel free to <span className="purple">contact me </span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/gokul-24"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/gokul-krishna-kompella-7bb37a176/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:gookul.krishna@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
      </Container>
    </Container>
  );
}
export default Home2;