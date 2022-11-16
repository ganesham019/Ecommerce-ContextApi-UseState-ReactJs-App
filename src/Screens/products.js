import React from "react";
import { CartState } from "../context";
import { Button } from "react-bootstrap";
const Products = () => {
  const {
    products,
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <>
      {products.map((user) => (
        <div className="card p-2 product-card">
          <div className="user text-center" key={user.id}>
            <img
              className="p-3 mx-auto text-center"
              src={user.image}
              alt={user.name}
              style={{ width: "", height: "", margin: "auto" }}
            />
          </div>
          <div className="tesc">
            <h6>{user.title.substring(0, 60)}</h6>
            <p>
              <strong>₹ {user.price}</strong>
            </p>

            <span>
              ({user.rating.count}) <span className="text-info">Reviews</span>
            </span>
          </div>

          <div className=" my-2">
            {cart.some((p) => p.id === user.id) ? (
              <Button
                variant="outline-danger"
                className="shadow-sm"
                size=""
                onClick={() => {
                  dispatch({
                    type: "Remove_from_cart",
                    payload: user,
                  });
                }}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                variant="outline-success"
                className="shadow-sm "
                onClick={() => {
                  dispatch({
                    type: "Add_to_cart",
                    payload: user,
                  });
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
