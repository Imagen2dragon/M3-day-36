import Link from "next/link";

export default function DishNotFound() {
  return (
    <div className="page-card">
      <h2>Dish Not Found</h2>
      <p className="dish-description">No dish exists with the requested ID.</p>
      <Link href="/menu" className="btn-primary">Back to Menu</Link>
    </div>
  );
}
