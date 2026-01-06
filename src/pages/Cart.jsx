import CartItem from "../components/CartItem";

export default function Cart({ cart, setCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is Empty</h2>;
  }

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      ))}
      <h2>Total: ₹{total}</h2>
    </div>
  );
}
