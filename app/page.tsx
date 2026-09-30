import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-card home-hero">
      <h2>Welcome to Addis Eats</h2>
      <p>Authentic Ethiopian dishes, slow-simmered stews, and fresh injera.</p>
      <div className="mt-20"><Link href="/menu" className="btn-primary">View Full Menu</Link></div>
    </div>
  );
}
