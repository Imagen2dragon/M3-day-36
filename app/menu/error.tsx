"use client";

export default function MenuError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="page-card error-card">
      <h2>Unable to load the menu</h2>
      <p>Something went wrong while rendering this section.</p>
      <button type="button" className="btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  );
}
