import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Heart, Minus, Plus, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [detailOpen, setDetailOpen] = useState(false);

  if (!product) return <div className="p-5 text-center text-muted-foreground">Product not found</div>;

  const fav = isFavorite(product.id);

  return (
    <div className="animate-fade-in">
      {/* Image area */}
      <div className="bg-secondary rounded-b-3xl pt-4 pb-6 px-5 mb-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate(-1)} className="p-1" aria-label="Go back">
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button className="p-1" aria-label="Share">
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" /></svg>
          </button>
        </div>
        <div className="flex justify-center">
          <img src={product.image} alt={product.name} className="h-48 w-48 object-contain" />
        </div>
      </div>

      {/* Details */}
      <div className="px-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            <p className="text-muted-foreground text-sm">{product.unit}</p>
          </div>
          <button onClick={() => toggleFavorite(product.id)} aria-label="Toggle favorite">
            <Heart className={`h-6 w-6 transition-colors ${fav ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
          </button>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="border border-border rounded-lg w-10 h-10 flex items-center justify-center"
            >
              <Minus className="h-4 w-4 text-muted-foreground" />
            </button>
            <span className="font-bold text-lg text-foreground w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="border border-primary bg-primary/5 rounded-lg w-10 h-10 flex items-center justify-center"
            >
              <Plus className="h-4 w-4 text-primary" />
            </button>
          </div>
          <span className="text-2xl font-bold text-foreground">${(product.price * quantity).toFixed(2)}</span>
        </div>

        <hr className="border-border" />

        {/* Product detail accordion */}
        <button
          onClick={() => setDetailOpen(!detailOpen)}
          className="flex justify-between items-center w-full py-4"
        >
          <span className="font-semibold text-foreground">Product Detail</span>
          <ChevronDown className={`h-5 w-5 text-foreground transition-transform ${detailOpen ? "rotate-180" : ""}`} />
        </button>
        {detailOpen && (
          <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{product.description}. Sourced from the finest local farms, this product is guaranteed fresh and full of flavor. Perfect for everyday meals and special occasions.</p>
        )}

        <hr className="border-border" />

        {/* Add to basket */}
        <button
          onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); navigate("/cart"); }}
          className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-lg font-semibold mt-6 hover:opacity-90 transition-opacity"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
