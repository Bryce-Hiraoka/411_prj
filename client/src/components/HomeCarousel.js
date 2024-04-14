import Carousel from 'react-bootstrap/Carousel';
import FirstGen from '../assets/fall2023firstgen.jpg';
import Kyoudai from '../assets/kyoudai.jpg';
import Soran from '../assets/soran.jpg';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img className="d-block w-100" src={FirstGen} />
        <Carousel.Caption>
          <h3>First General Meeting</h3>
          <p>Awesome</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={Soran} />
        <Carousel.Caption>
          <h3>Soran Bushi (Converge 2024)</h3>
          <p>Mad Lit</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Kyoudai} />
        <Carousel.Caption>
          <h3>Kyoudai Program</h3>
          <p>
            As lit as it gets
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;