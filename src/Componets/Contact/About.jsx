import React from 'react'
import Nav from "../Nav/Nav"
import img1 from '../../img/img7.jpg';
import img2 from '../../img/img8.jpg';
import img3 from '../../img/img9.jpg';
import Logo from '../../img/img10.jpg';

import Carousel from 'react-bootstrap/Carousel';

const About = () => {
  return (
    <div>
      <Nav />
      <img src={Logo} alt="" style={{ height: "150px", marginLeft: "1000px", width: "400px" }} />

      <Carousel fade style={{ width: "800px", position: "relative", top: "-150px" }}>
        <Carousel.Item style={{ height: "650px", width: "800px" }} >
          <img src={img1} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px", width: "800px" }} >
          <img src={img2} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "650px", width: "800px" }} >
          <img src={img3} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption >
        </Carousel.Item >
      </Carousel>
      <p style={{position:"relative",right:"-1050px",top:"-600px",width:"300px"}}>Taking a Stand</p>
      <div style={{position:"relative",right:"-1050px",top:"-550px",width:"300px"}}>
      <p >
        We are delighted to be official Corporate Partners of Shenzhen-based charity, Captivating International, as we support their mission to see underprivileged children reach a better tomorrow. Through two programs, the My First Job Program and Vocational School Scholarships, we hope to support over 300 young women back through education and give them a future they can look forward to.
      </p>
      </div>
      <h2> water_ballons_baku</h2>
       
    </div>
  )
}

export default About