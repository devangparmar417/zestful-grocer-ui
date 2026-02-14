import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0)
    return (
      <div className="px-5 pt-10 text-center animate-fade-in">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground text-sm mb-6">Start adding some delicious groceries!</p>
        <button onClick={() => navigate("/")} className="bg-primary text-primary-foreground rounded-2xl px-8 py-3 font-semibold">
          Start Shopping
        </button>
      </div>
    );

  return (
    <div className="px-5 pt-6 animate-fade-in">
      <h1 className="text-xl font-bold text-foreground text-center mb-6">My Cart</h1>

      <div className="space-y-0 divide-y divide-border">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center gap-4 py-4">
            <img src={product.image} alt={product.name} className="h-16 w-16 object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{product.name}</h3>
                  <p className="text-xs text-muted-foreground">{product.unit}</p>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-foreground p-1">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="border border-border rounded-lg w-8 h-8 flex items-center justify-center"
                  >
                    <Minus className="h-3 w-3 text-muted-foreground" />
                  </button>
                  <span className="font-semibold text-foreground text-sm w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="border border-primary bg-primary/5 rounded-lg w-8 h-8 flex items-center justify-center"
                  >
                    <Plus className="h-3 w-3 text-primary" />
                  </button>
                </div>
                <span className="font-bold text-foreground">${(product.price * quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout button */}
      <button className="w-full bg-primary text-primary-foreground rounded-2xl py-4 text-lg font-semibold mt-6 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
        Go to Checkout
        <span className="bg-primary-foreground/20 rounded-md px-2 py-0.5 text-sm">${cartTotal.toFixed(2)}</span>
      </button>
    </div>
  );
};

export default Cart;
