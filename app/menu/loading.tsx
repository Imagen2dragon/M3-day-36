export default function Loading() {
  return (
    <div className="dish-grid" aria-label="Loading menu">
      {[1, 2, 3, 4, 5].map((item) => <div className="dish-card skeleton" key={item}><div className="skeleton-line wide" /><div className="skeleton-line" /><div className="skeleton-button" /></div>)}
    </div>
  );
}
