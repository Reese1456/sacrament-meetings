"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const linkClass =
  "rounded-md border border-slate-300 bg-white px-4 py-2 font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  // Keeps the active search query in the link.
  function pageUrl(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages === 0) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-4 print:hidden">
      {currentPage > 1 ? (
        <Link href={pageUrl(currentPage - 1)} className={linkClass}>
          <span aria-hidden="true">←</span> Previous
        </Link>
      ) : (
        <span />
      )}
      <p className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </p>
      {currentPage < totalPages ? (
        <Link href={pageUrl(currentPage + 1)} className={linkClass}>
          Next <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
