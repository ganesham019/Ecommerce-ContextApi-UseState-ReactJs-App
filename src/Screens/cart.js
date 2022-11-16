import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { CartState } from "../context";

import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartPage = () => {
  const {
    state: { cart },
    // dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((ac, curr) => ac + Math.round(Number(curr.price)), 0));
  }, [cart]);

  return (
    <>
      <Button className="btn btn-info list-unstyled float-left">
        <Link to="/">Back</Link>
      </Button>
      <div className="row p-0 m-0">
        <div className="col-8 p-2 m-0">
          <div className=" card text-left">
            {cart.length > 0 ? (
              <>
                {cart.map((e) => (
                  <>
                    <div className="row p-3 text-left">
                      <div className="col-3 ">
                        <img
                          src={e.image}
                          alt={e.title}
                          className="img-fluid"
                          width="150"
                        />
                      </div>
                      <div className="col-6 text-start">
                        <small className=" text-start mx-auto">
                          {e.description.substring(0, 100)}
                        </small>
                        <br />
                        <small className="text-success text-start">
                          in stock
                        </small>
                        <br />
                        <small className="text-start">
                          Eligible for FREE Shipping
                        </small>
                        {/* <Form.Control
                          as="select"
                          className="w-25"
                          value={e.count}
                          onchange={(f) =>
                            dispatch({
                              type: "Cart_qty_change",
                              payload: {
                                id: e.id,
                                qty: f.target.value,
                              },
                            })
                          }
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </Form.Control> */}
                        <div className="add-min-quantity">
                          <AiOutlineMinus />
                          <input type="text" className="" placeholder="1" />
                          <AiOutlinePlus />
                        </div>
                      </div>
                      <div
                        className="col-3 d-flex justify-content-center align-items-center"
                        id=""
                      >
                        <h4>{e.price}</h4>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <>
                <h5>Cart page is empty</h5>
              </>
            )}
          </div>
        </div>
        <div className="col-4 bg-info p-0 m-0 ">
          <div className="card p-3 m-2">
            <h4>Subitem Total ({cart.length})</h4>
            <h6>Total: {total} </h6>
            <button className="btn btn-danger">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
