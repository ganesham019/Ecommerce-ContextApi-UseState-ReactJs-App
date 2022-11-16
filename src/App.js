import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CartPage from "./Screens/cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
