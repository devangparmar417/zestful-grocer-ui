import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const tabs = [
  { to: "/", icon: Home, label: "Shop" },
  { to: "/explore", icon: Search, label: "Explore" },
  { to: "/cart", icon: ShoppingCart, label: "Cart" },
  { to: "/favorites", icon: Heart, label: "Favorite" },
  { to: "/account", icon: User, label: "Account" },
];

const BottomNav = () => {
  const { cartCount } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16">
        {tabs.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 1.8} />
                  {label === "Cart" && cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
