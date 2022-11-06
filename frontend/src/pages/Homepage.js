import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardcomponent from "../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";

const Homepage = () => {
  const categories = [
    "Tablets",
    "Laptops",
    "Mobiles",
    "Accessories",
    "Headphones",
    "Speakers",
    "Cameras",
    "Smart Watches",
  ];

  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCardcomponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
