import { FC, useState } from "react";
import { Button, Card, Modal, Badge } from "react-bootstrap";
import { CartItem } from "../App";
// import { Product } from "../App";
import { TfiShoppingCart } from "react-icons/Tfi";

interface Props {
  cartItems: CartItem[];
}

const CartPopup: FC<Props> = ({ cartItems }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <TfiShoppingCart size={30} />
        <Badge bg="success">{cartItems.length}</Badge>
      </Button>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item) => (
            <Card.Text style={{ textAlign: "left" }}>
              <strong>
                {item.quantity} x {item.product.title}
              </strong>
            </Card.Text>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Payment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CartPopup;
