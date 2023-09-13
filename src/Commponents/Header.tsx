import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FC } from "react";
// import { Product } from "../App";
import CartPopup from "./CartPopup";
import { CartItem } from "../App";

interface Props {
  cartItems: CartItem[];
}
const Header: FC<Props> = ({ cartItems }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>AliReza Emami</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="./">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <CartPopup cartItems={cartItems} />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
