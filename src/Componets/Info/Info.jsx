import React,{useRef} from 'react'
import Nav from "../Nav/Nav"
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img4.jpg';
import img2 from '../../img/img5.jpg';
import img3 from '../../img/img6.jpg';
import Logo from "../../img/logo.jpg"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
const Info = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tyslq7e', 'template_p79bakm', form.current, 'eGan-uNjIN4VZ5UI_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div>
      <Nav />
      <img src={Logo} alt="" style={{ height: "150px", marginLeft: "1000px", width: "200px" }} />
      <Carousel fade style={{ display: "flex", justifyContent: "center", width: "670px", position: "relative", top: "-150px" }}>
        <Carousel.Item style={{ height: "500px", width: "670px" }} >
          <img src={img1} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px", width: "670px" }} >
          <img src={img2} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px", width: "670px" }} >
          <img src={img3} alt="" style={{ height: "100%", width: "100%" }} />
          <Carousel.Caption >

          </Carousel.Caption >
        </Carousel.Item >
      </Carousel>

      <form ref={form} onSubmit={sendEmail}>
      <InputGroup className="mb-3" style={{ width: "500px", position: "relative", right: "-900px", top: "-450px" }}>
        <Form.Control name="user_name"
          placeholder="Name"
        />
      </InputGroup>
      <InputGroup className="mb-3" style={{ width: "500px", position: "relative", right: "-900px", top: "-450px" }}>
        <Form.Control name="user_email"
          placeholder="Mail"
        />
      </InputGroup>
      <InputGroup className="mb-3" style={{ width: "500px", position: "relative", right: "-900px", top: "-450px" }}>
        <Form.Control  name="phone_number"
          placeholder="PhoneNumber"
        />
      </InputGroup>
      <InputGroup className="mb-3" style={{ width: "500px", position: "relative", right: "-900px", top: "-450px" }}>
      <textarea name="message" placeholder='Message' style={{ width:"500px"}}/>
        
      <Button type="submit"value="Send" variant="primary">Send</Button>
      </InputGroup>

      </form>
    </div>
  )
}

export default Info