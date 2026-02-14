import appleImg from "@/assets/apple.png";
import bananaImg from "@/assets/banana.png";
import orangeImg from "@/assets/orange.png";
import broccoliImg from "@/assets/broccoli.png";
import pepperImg from "@/assets/pepper.png";
import milkImg from "@/assets/milk.png";
import breadImg from "@/assets/bread.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  nutrition?: string;
}

export const products: Product[] = [
  { id: "1", name: "Red Apple", description: "Fresh organic red apples", price: 4.99, unit: "1kg", image: appleImg, category: "fruits" },
  { id: "2", name: "Banana", description: "Ripe yellow bananas", price: 2.99, unit: "dozen", image: bananaImg, category: "fruits" },
  { id: "3", name: "Orange", description: "Juicy navel oranges", price: 3.49, unit: "1kg", image: orangeImg, category: "fruits" },
  { id: "4", name: "Broccoli", description: "Fresh green broccoli crowns", price: 2.49, unit: "1pc", image: broccoliImg, category: "vegetables" },
  { id: "5", name: "Red Pepper", description: "Crispy red bell peppers", price: 1.99, unit: "1pc", image: pepperImg, category: "vegetables" },
  { id: "6", name: "Whole Milk", description: "Farm-fresh whole milk", price: 3.29, unit: "1L", image: milkImg, category: "dairy" },
  { id: "7", name: "White Bread", description: "Soft sliced white bread", price: 2.49, unit: "1 loaf", image: breadImg, category: "bakery" },
  { id: "8", name: "Banana", description: "Organic fair-trade bananas", price: 3.49, unit: "1kg", image: bananaImg, category: "fruits" },
];

export interface Category {
  id: string;
  name: string;
  color: string;
  borderColor: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "fruits", name: "Fresh Fruits", color: "bg-green-50", borderColor: "border-green-200", icon: "🍎" },
  { id: "vegetables", name: "Vegetables", color: "bg-orange-50", borderColor: "border-orange-200", icon: "🥦" },
  { id: "dairy", name: "Dairy & Eggs", color: "bg-yellow-50", borderColor: "border-yellow-200", icon: "🥛" },
  { id: "bakery", name: "Bakery", color: "bg-purple-50", borderColor: "border-purple-200", icon: "🍞" },
  { id: "beverages", name: "Beverages", color: "bg-blue-50", borderColor: "border-blue-200", icon: "🧃" },
  { id: "meat", name: "Meat & Fish", color: "bg-red-50", borderColor: "border-red-200", icon: "🥩" },
];
