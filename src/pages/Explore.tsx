import { Search } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [selected, setSelected] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = products.filter(p => {
    const matchCategory = !selected || p.category === selected;
    const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="px-5 pt-6 animate-fade-in">
      <h1 className="text-xl font-bold text-foreground mb-4">Find Products</h1>

      <div className="bg-secondary rounded-2xl flex items-center gap-2 px-4 py-3 mb-5">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search Store"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="bg-transparent text-sm flex-1 outline-none placeholder:text-muted-foreground text-foreground"
        />
      </div>

      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto mb-5 scrollbar-none">
        <button
          onClick={() => setSelected("")}
          className={`px-4 py-2 rounded-xl text-sm font-medium shrink-0 border transition-colors ${
            !selected ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border"
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium shrink-0 border transition-colors ${
              selected === cat.id ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-3 pb-4">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-16 text-muted-foreground">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Explore;
