import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardcomponent = ({category, idx}) => {
  const images = [
    "/images/tablets-category.jpg",
    "/images/laptops.jpg",
    "/images/mobiles.jpg",
    "/images/accessories.jpg",
    "/images/headphones.jpg",
    "/images/speakers.jpg",
    "/images/cameras.jpg",
    "/images/watches.jpg",
  ]
    return (
        <Card>
      <Card.Img crossOrigin="anonymous" variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
        <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>

    )
}

export default CategoryCardcomponent;