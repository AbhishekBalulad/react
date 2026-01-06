import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header cart={cart} setPage={setPage} />
      {page === "home" ? (
        <Home cart={cart} setCart={setCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
}
