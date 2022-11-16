import React from "react";
import Header from "./Layout/Header";
import Filterbar from "./Screens/Filterbar";
import Products from "./Screens/products";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="row m-0 p-0">
        <div className="col-md-3 p-0 m-0 bg-dark ">
          <Filterbar />
        </div>
        <div className="col-md-9 ">
          <div className="d-flex flex-1 flex-wrap align-items-start p-wth">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
