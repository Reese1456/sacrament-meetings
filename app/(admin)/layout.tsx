import type { ReactNode } from "react";

// Shared wrapper for the pages leaders use to plan meetings. The (admin) folder
// groups these routes without adding "/admin" to their URLs.
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <p className="rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900">
        Leader tools: changes here will update the ward&apos;s meeting programs.
      </p>
      {children}
    </div>
  );
}
