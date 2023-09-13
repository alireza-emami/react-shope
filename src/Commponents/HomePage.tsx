import { FC, useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { CartItem, Product } from "../App";
import DetailsPopup from "./DetailsPopup";

interface Props {
  addToCart: (item: CartItem) => void;
}

const HomePage: FC<Props> = ({ addToCart }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      ) : (
        <Container>
          <Row className="m-4">
            {products?.map((product) => (
              <Col>
                <Card
                  style={{
                    width: "18rem",
                    height: "40rem",
                  }}
                  className="mb-2 "
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: 350 }}
                  />
                  <Card.Body>
                    <Row>
                      <Col xs={12}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>Category : {product.category}</Card.Text>
                        <Card.Text>Price : {product.price} $</Card.Text>
                        <Card.Text>Rate : {product.rating.rate}</Card.Text>
                      </Col>
                      <Col
                        xs={12}
                      >
                        <DetailsPopup product={product} addToCart={addToCart} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default HomePage;
