import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const information = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const products = response.data;
      setProducts(products);
      // console.log(products);
    });
  };
  useEffect(() => {
    information();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ products, state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};
export default Context;

export const CartState = () => {
  return useContext(Cart);
};
// useEffect(() => {
//   // GET request for remote image in node.js
//   axios
//     .get("https://dummyjson.com/products", {
//       params: {
//         limit: 10,
//       },
//     })
//     .then((res) => {
//       //  cl setProducts(res.data);
//       console.log(res.data);
//     });
// }, []);
// useEffect(() => {
//   axios({
//     method: "get",
//     url: "https://dummyjson.com/products",
//     params: {
//       limit: 10,
//     },

//     responseType: "json",
//   }).then((res) => {
//     // setProducts((res) => res.data);
//     const info = res.data;
//   });
// }, []);

// const context = () => {
//   this.setProducts(info);
// };
// function getEvents() {
//   // setIsLoading(true);
//   axios.get("https://dummyjson.com/products").then((response) => {
//     const
//     // setProducts(response.data.products.title);
//     // console.log(response.data.products.title);
//   });
// .then((data) => {
//   setProducts([
//     ...products,
//     data.map(() => ({
//       title: data.title,
//     })),
//   ]);
// });
// }
