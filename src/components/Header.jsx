export default function Header({ cart, setPage }) {
  return (
    <header className="header">
      <h1 onClick={() => setPage("home")}>MyShop</h1>
      <button onClick={() => setPage("cart")}>
        Cart ({cart.length})
      </button>
    </header>
  );
}
