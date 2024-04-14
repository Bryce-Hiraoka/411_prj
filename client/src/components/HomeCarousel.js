import Carousel from 'react-bootstrap/Carousel';
import FirstGen from '../assets/fall2023firstgen.jpg';
import Kyoudai from '../assets/kyoudai.jpg';
import Soran from '../assets/soran.jpg';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="position-relative">
      <img className="d-block w-100 img-fluid" src={Soran} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="position-relative">
      <img className="d-block w-100 img-fluid" src={FirstGen} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="position-relative">
        <img className="d-block w-100 img-fluid" src={Kyoudai} />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;