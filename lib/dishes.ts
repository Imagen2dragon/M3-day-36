export type Dish = {
  id: number;
  name: string;
  price: number;
  category: "Main" | "Vegetarian" | "Sides";
  spicy: boolean;
  desc: string;
};

export const DISHES: Dish[] = [
  { id: 1, name: "Doro Wat", price: 240, category: "Main", spicy: true, desc: "Slow-simmered chicken stew with berbere, garlic, and boiled egg." },
  { id: 2, name: "Shiro Wat", price: 120, category: "Vegetarian", spicy: false, desc: "Savory ground chickpea flour stew simmered with garlic and ginger." },
  { id: 3, name: "Beef Tibs", price: 280, category: "Main", spicy: true, desc: "Sautéed beef sirloin cubes with rosemary, onions, and jalapenos." },
  { id: 4, name: "Veggie Beyaynetu", price: 180, category: "Vegetarian", spicy: false, desc: "Combination of yellow split peas, red lentils, collard greens, and cabbage." },
  { id: 5, name: "Injera Basket", price: 50, category: "Sides", spicy: false, desc: "Fresh sourdough flatbread made from pure organic teff flour." }
];

export const CATEGORIES = ["All", "Main", "Vegetarian", "Sides"] as const;

export function getDish(id: string): Dish | undefined {
  return DISHES.find((dish) => dish.id === Number(id));
}
