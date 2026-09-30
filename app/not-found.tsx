import Link from "next/link";

export default function NotFound() {
  return <div className="page-card not-found"><h2>404 — Page Not Found</h2><p>The screen you requested does not exist.</p><Link href="/" className="btn-primary">Return Home</Link></div>;
}
