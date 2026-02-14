import { Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col border border-border rounded-lg p-3 cursor-pointer hover:grocery-shadow transition-shadow animate-fade-in bg-card"
    >
      <div className="flex items-center justify-center h-28 mb-2">
        <img src={product.image} alt={product.name} className="h-24 w-24 object-contain" />
      </div>
      <h3 className="font-semibold text-sm text-foreground leading-tight">{product.name}</h3>
      <p className="text-xs text-muted-foreground mt-0.5">{product.unit}</p>
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="font-bold text-sm text-foreground">${product.price.toFixed(2)}</span>
        <button
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="bg-primary text-primary-foreground rounded-lg w-9 h-9 flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
