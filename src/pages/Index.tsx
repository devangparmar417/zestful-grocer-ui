import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bannerImg from "@/assets/banner.jpg";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Index = () => {
  const navigate = useNavigate();

  const exclusiveOffers = products.slice(0, 4);
  const bestSelling = products.slice(4, 8);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-5 pt-6 pb-3 flex flex-col items-center">
        <img src="/favicon.ico" alt="Logo" className="h-6 w-6 mb-1" />
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 text-foreground" />
          <span className="font-medium text-foreground">Dhaka, Banassre</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 mb-4">
        <div className="bg-secondary rounded-2xl flex items-center gap-2 px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Store"
            className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground text-foreground"
          />
        </div>
      </div>

      {/* Banner */}
      <div className="px-5 mb-6">
        <div className="relative rounded-xl overflow-hidden h-32">
          <img src={bannerImg} alt="Fresh vegetables" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center px-5">
            <div>
              <p className="text-primary-foreground text-xs font-medium opacity-90">Fresh Vegetables</p>
              <h2 className="text-primary-foreground text-xl font-bold leading-tight">Get Up To<br />40% OFF</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Offer */}
      <section className="mb-6">
        <div className="flex justify-between items-center px-5 mb-3">
          <h2 className="text-lg font-bold text-foreground">Exclusive Offer</h2>
          <button className="text-sm font-medium text-primary">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-1 scrollbar-none">
          {exclusiveOffers.map(p => (
            <div key={p.id} className="min-w-[155px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling */}
      <section className="mb-6">
        <div className="flex justify-between items-center px-5 mb-3">
          <h2 className="text-lg font-bold text-foreground">Best Selling</h2>
          <button className="text-sm font-medium text-primary">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-1 scrollbar-none">
          {bestSelling.map(p => (
            <div key={p.id} className="min-w-[155px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-6">
        <div className="flex justify-between items-center px-5 mb-3">
          <h2 className="text-lg font-bold text-foreground">Groceries</h2>
          <button className="text-sm font-medium text-primary">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-5 pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => navigate(`/explore?category=${cat.id}`)}
              className={`flex items-center gap-2 ${cat.color} border ${cat.borderColor} rounded-xl px-4 py-3 min-w-[150px] shrink-0`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-foreground">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
