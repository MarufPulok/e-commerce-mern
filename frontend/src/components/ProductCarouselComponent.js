import { Carousel } from "react-bootstrap";
// import "../styles/Carousel.css";
import {LinkContainer} from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorPointer = {
    cursor: "pointer",
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          style={
            {height: "300px", objectFit: "cover"}
          }
          className="d-block w-100 carouselImg"
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
          <h3>Best seller demo category</h3>
          </LinkContainer>
          <p>Demo desc Lorem impsum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          style={
            {height: "300px", objectFit: "cover"}
          }
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorPointer} to="/product-details">
          <h3>Best seller demo1 category</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          style={
            {height: "300px", objectFit: "cover"}
          }
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorPointer} to="/product-details">
          <h3>Best seller demo2 category</h3>
          </LinkContainer>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
