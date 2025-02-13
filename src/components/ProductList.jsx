import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductList = () => {
  // Initial state with product list
  const [products, setProducts] = useState([
    {
      name: "PC Lenovo",
      price: 1400,
      img: "/event1.jpg",  // Image in public folder
      like: 0,
      quantity: 10,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
    {
      name: "Mouse",
      price: 30,
      img: "/event2.jpg",  // Image in public folder
      like: 0,
      quantity: 0,  // Out of stock
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
    {
      name: "Keyboard",
      price: 70,
      img: "/event3.jpg",  // Image in public folder
      like: 0,
      quantity: 20,
      description:
        "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    },
  ]);

  // Function to toggle Like state (but don't change like count)
  const handleLike = (index) => {
    const updatedProducts = [...products];
    // Toggle the like state (without changing the count)
    updatedProducts[index].like = updatedProducts[index].like === 0 ? 1 : 0;
    setProducts(updatedProducts);
  };

  // Function to toggle Dislike state (but don't change like count)
  const handleDislike = (index) => {
    const updatedProducts = [...products];
    // Toggle the dislike state (without changing the count)
    updatedProducts[index].like = updatedProducts[index].like === 0 ? -1 : 0;
    setProducts(updatedProducts);
  };

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <Row className="d-flex justify-content-center">
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.img}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/default-image.jpg";  // Optional: provide fallback image
                }}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> {product.price}€
                </Card.Text>
                <Card.Text>
                  <strong>Stock:</strong> {product.quantity > 0 ? product.quantity : "Out of stock"}
                </Card.Text>

                {/* Like & Dislike Buttons */}
                <div className="like-section d-flex justify-content-between align-items-center">
                  <Button variant="success" onClick={() => handleLike(index)}>
                    👍 Like
                  </Button>
                  <span>{product.like === 1 ? "Liked" : product.like === -1 ? "Disliked" : "No Reaction"}</span>
                  <Button variant="danger" onClick={() => handleDislike(index)}>
                    👎 Dislike
                  </Button>
                </div>

                {/* Buy Button (disabled when out of stock) */}
                <Button
                  variant="primary"
                  disabled={product.quantity === 0}
                  className="w-100 mt-3"
                >
                  {product.quantity === 0 ? "Sold Out" : "Buy Now"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
