import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { CartState } from "../context";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">Omezon</Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <CiShoppingCart size="30" />

            <small> {cart.length}</small>
          </Dropdown.Toggle>
          {cart.length > 0 ? (
            <Dropdown.Menu className="cart-town">
              {cart.map((e) => (
                <>
                  <>
                    <span className="row px-3 py-1 ">
                      <div className="col-2">
                        <img
                          alt={e.title}
                          src={e.image}
                          style={{ width: 50, height: 50 }}
                        />
                      </div>
                      <div className="col-8">
                        <h6>{e.title}</h6>
                        <strong>{e.price}</strong>
                      </div>
                      <div className="col-2">
                        <Button
                          variant="danger"
                          className="shadow-sm"
                          size=""
                          onClick={() => {
                            dispatch({
                              type: "Remove_from_cart",
                              payload: e,
                            });
                          }}
                        >
                          <AiOutlineDelete />
                        </Button>
                      </div>
                    </span>
                  </>
                </>
              ))}
              <Button
                variant="danger"
                className="shadow-sm text-center"
                size=""
              >
                <Link to="/cart">Go to cart</Link>
              </Button>
            </Dropdown.Menu>
          ) : (
            <Dropdown.Menu
              className="p-2 text-center mx-auto"
              style={{ minWidth: "220px" }}
            >
              <h6 className="text-danger">Cart is empty</h6>
            </Dropdown.Menu>
          )}
        </Dropdown>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="d-none d-md-block">
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
