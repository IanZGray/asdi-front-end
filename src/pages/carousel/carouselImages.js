import Carousel from 'react-bootstrap/Carousel';
import cImage from '../../images/foodSecurity.jpg';
import bImage from '../../images/drone.jpg';
import aImage from '../../images/farming.jpeg';

import './carousel.css';

function CarouselImages() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 id="caro-title">Emerging Technology can Make a Lasting Impact on Global Agriculture</h1>
          <p>What can machine learning do for the future of agriculture?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cImage}
          alt="food Security"
        />

        <Carousel.Caption>
          <h1 id="caro-title">Environmental Sustainability is Key</h1>
          <p>What would a reduction in agricultural waste contribute towards sustainability?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 id="caro-title">Fertile Land is Ripe for the Picking</h1>
          <p>Organizing crop placement can maximize yield. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;