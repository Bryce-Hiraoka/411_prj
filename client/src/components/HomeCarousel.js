import Carousel from 'react-bootstrap/Carousel';
import FirstGen from '../assets/fall2023firstgen.JPG';
import Kyoudai from '../assets/kyoudai.jpg';
import Soran from '../assets/soran.jpg';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="position-relative" interval={3000}>
      <img className="d-block w-100 img-fluid" src={Soran} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="position-relative" interval={3000}>
      <img className="d-block w-100 img-fluid" src={FirstGen} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="position-relative" interval={3000}>
        <img className="d-block w-100 img-fluid" src={Kyoudai} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;