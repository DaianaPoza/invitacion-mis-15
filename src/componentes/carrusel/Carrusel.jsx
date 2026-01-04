import Carousel from 'react-bootstrap/Carousel';
import aylin1 from "../../assets/aylin1.jpeg"; 
import aylin2 from "../../assets/aylin2.jpeg"; 
import './Carrusel.css';

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={aylin1} className="d-block w-100" alt="slide 1" />

        <Carousel.Caption>
          
          <p className='historia-texto'>Esta historia está por comenzar a sonar…
y tu presencia va a ser parte de cada nota </p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
      <img src={aylin2} className="d-block w-100" alt="slide 1" />

        <Carousel.Caption>
        <p className='historia-texto'>Esta historia está por comenzar a sonar…
y tu presencia va a ser parte de cada nota </p>
        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>
  );
}

export default Carrusel;

