export default function CartItem({ item, cart, setCart }) {
  const increase = () => {
    setCart(
      cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decrease = () => {
    if (item.qty === 1) {
      setCart(cart.filter(i => i.id !== item.id));
    } else {
      setCart(
        cart.map(i =>
          i.id === item.id ? { ...i, qty: i.qty - 1 } : i
        )
      );
    }
  };

  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>₹{item.price}</p>

      <div>
        <button onClick={decrease}>-</button>
        <span>{item.qty}</span>
        <button onClick={increase}>+</button>
      </div>

      <p>Subtotal: ₹{item.price * item.qty}</p>
    </div>
  );
}
