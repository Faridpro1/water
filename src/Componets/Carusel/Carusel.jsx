import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

function CarouselFadeExample() {
  return (
    <div>

    <Carousel fade style={{display:"flex",justifyContent:"center",width:"800px" }}>
      <Carousel.Item style={{height:"650px",width:"800px"}} >
      <img src={img1} alt="" style={{height:"100%",width:"100%"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"650px",width:"800px"}} >
      <img src={img2} alt=""style={{height:"100%",width:"100%"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"650px",width:"800px"}} >
        <img src={img3} alt=""style={{height:"100%",width:"100%"}} />
        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption >
      </Carousel.Item >
    </Carousel>
    </div>

  );
}

export default CarouselFadeExample;