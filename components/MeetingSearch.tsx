"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Wait until typing pauses for 300ms so each keystroke doesn't hit the database.
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // a new search starts back on the first page
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="print:hidden">
      <input
        type="search"
        aria-label="Search meetings by presiding, conducting, meeting type, or speaker"
        placeholder="Search by leader, speaker, or meeting type"
        defaultValue={searchParams.get("query") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      />
    </div>
  );
}
