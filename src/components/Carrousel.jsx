import Carousel from "react-bootstrap/Carousel";
import "../styles/Carrousel.css";

export const Carrousel = ({ imagen1, imagen2, imagen3 }) => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={imagen1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={imagen2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={imagen3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
