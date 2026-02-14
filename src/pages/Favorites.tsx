import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useCart();
  const navigate = useNavigate();
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  if (favoriteProducts.length === 0)
    return (
      <div className="px-5 pt-10 text-center animate-fade-in">
        <div className="text-6xl mb-4">❤️</div>
        <h2 className="text-xl font-bold text-foreground mb-2">No favorites yet</h2>
        <p className="text-muted-foreground text-sm mb-6">Browse products and tap the heart to save them here.</p>
        <button onClick={() => navigate("/explore")} className="bg-primary text-primary-foreground rounded-2xl px-8 py-3 font-semibold">
          Explore Products
        </button>
      </div>
    );

  return (
    <div className="px-5 pt-6 animate-fade-in">
      <h1 className="text-xl font-bold text-foreground text-center mb-6">Favourites</h1>
      <div className="grid grid-cols-2 gap-3">
        {favoriteProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
