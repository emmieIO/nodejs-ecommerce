/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link className="text-light " to={`/product/${product._id}`}>
          <Card.Title as="small">{product.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
          text={`${product.numReviews} reviews`} 
          value={product.rating}
          color={'yellow'}>
          </Rating>
        </Card.Text>
        <Card.Text as="p">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product