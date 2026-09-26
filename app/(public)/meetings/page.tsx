import type { Metadata } from "next";
import MeetingCard from "@/components/MeetingCard";
import MeetingSearch from "@/components/MeetingSearch";
import Pagination from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

export const metadata: Metadata = {
  title: "All Meetings",
};

export default async function MeetingsPage({ searchParams }: PageProps<"/meetings">) {
  const { query, page } = await searchParams;
  const searchTerm = typeof query === "string" ? query.trim() : "";
  // Anything that isn't a positive whole number (e.g. ?page=abc) falls back to page 1.
  const currentPage = Math.max(1, Math.floor(Number(page)) || 1);

  const [meetings, totalPages] = await Promise.all([
    getMeetings(searchTerm, currentPage),
    getMeetingsTotalPages(searchTerm),
  ]);

  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-semibold text-slate-900">Sacrament Meetings</h1>
      <MeetingSearch />
      {meetings.length === 0 ? (
        <p className="text-slate-600">
          {searchTerm ? `No meetings match "${searchTerm}".` : "No meetings have been planned yet."}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <MeetingCard meeting={meeting} />
            </li>
          ))}
        </ul>
      )}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
