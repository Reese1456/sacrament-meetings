import type { Metadata } from "next";
import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export const metadata: Metadata = {
  title: "All Meetings",
};

export default function MeetingsPage() {
  // Newest first so the upcoming meetings are at the top.
  const meetings = [...getMeetings()].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl font-semibold text-slate-900">Sacrament Meetings</h1>
      {meetings.length === 0 ? (
        <p className="text-slate-600">No meetings have been planned yet.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <MeetingCard meeting={meeting} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
