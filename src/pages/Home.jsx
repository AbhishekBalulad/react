import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ cart, setCart }) {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}
