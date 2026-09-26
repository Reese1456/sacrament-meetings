// Shown while the meeting routes in this group wait on the database.
export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="space-y-4">
      <span className="sr-only">Loading meetings…</span>
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-28 animate-pulse rounded-lg bg-slate-200" />
      ))}
    </div>
  );
}
