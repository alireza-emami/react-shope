import { FC, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { CartItem, Product } from "../App";

interface Props {
  product: Product;
  addToCart: (item: CartItem) => void;
}

const DetailsPopup: FC<Props> = ({ product, addToCart }) => {
  const [show, setShoww] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const onBuyButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    addToCart({ product, quantity });
    setShoww(false);
    toast.success("Your purchase has been successfully registered!")  };

  return (
    <Container>
      <div><Toaster/></div>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            className="d-flex"
            style={{ alignItems: "center", justifyContent: "end" }}
            variant="primary"
            onClick={() => setShoww(true)}
          >
            Details
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Modal
            size="lg"
            show={show}
            onHide={() => setShoww(false)}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Card.Text style={{ padding: 16 }}>
                    <strong>Category :</strong> {product.category}
                    <br />
                    <strong>Description</strong> : {product.description}
                    <br />
                    <strong>Price</strong> : {product.price}
                    <br />
                    <strong>Rrice</strong> : {product.rating.rate}
                    <br />
                    <strong>Count</strong> : {product.rating.count}
                    <br />
                    <strong>Quantity</strong> : &nbsp;
                    <input
                      style={{ width: 50 }}
                      type="number"
                      onChange={(e) => setQuantity(+e.target.value)}
                      value={quantity}
                    />
                  </Card.Text>
                </Col>
                <Col xs={6} md={4}>
                  <Image className="w-100" src={product.image} rounded />
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShoww(false)}>
                Close
              </Button>
              <Button onClick={onBuyButtonClick} variant="primary">
                buy
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPopup;
