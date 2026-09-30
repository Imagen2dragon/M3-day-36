import Link from "next/link";
import { notFound } from "next/navigation";
import DishActions from "@/components/DishActions";
import { getDish } from "@/lib/dishes";

export default async function DishPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dish = getDish(id);
  if (!dish) notFound();

  return (
    <article className="page-card">
      <h2>{dish.name} {dish.spicy && "🌶️"}</h2>
      <span className="category-pill">{dish.category}</span>
      <p className="dish-description">{dish.desc}</p>
      <p className="price-tag">{dish.price} ETB</p>
      <DishActions dish={dish} />
    </article>
  );
}
