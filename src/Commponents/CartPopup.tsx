import { FC, useState } from "react";
import {
  Button,
  Card,
  Modal,
  Badge,
  Image,
  Table,
} from "react-bootstrap";
import { CartItem } from "../App";
// import { Product } from "../App";
import { TfiShoppingCart } from "react-icons/Tfi";

interface Props {
  cartItems: CartItem[];
}

const CartPopup: FC<Props> = ({ cartItems }: Props) => {
  const [show, setShow] = useState<boolean>(false);


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        <Badge bg="success">{cartItems.length}</Badge>{" "}
        <TfiShoppingCart size={30} />
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length == 0 ? (
            <Card.Text style={{ textAlign: "center" }}>
              Please buy somethings
            </Card.Text>
          ) : (
            <Table responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr>
                    <td>
                      <Image style={{ width: 75 }} src={item.product.image} />
                    </td>
                    <td>
                      <b>{item.product.title}</b>
                    </td>
                    <td>
                      <b>{item.quantity}</b>
                    </td>
                    <td>
                      <b>{item.product.price} $</b>
                    </td>
                    <td>
                      <b>{item.product.price * item.quantity} $</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <Modal.Title>Total price: {totalPrice} $</Modal.Title>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">Payment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CartPopup;
