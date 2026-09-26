import Link from "next/link";
import { formatMeetingDate, meetingTypeLabels } from "@/lib/dates";
import type { SacramentMeeting } from "@/lib/types";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  const speakerCount = meeting.speakers.filter((s) => s.type === "speaker").length;

  return (
    <article className="rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-slate-900 hover:shadow-md">
      <Link href={`/meetings/${meeting.id}`} className="block p-5 focus:outline-none">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {meetingTypeLabels[meeting.meetingType]}
        </p>
        <h2 className="mt-1 font-serif text-lg font-semibold text-slate-900">
          {formatMeetingDate(meeting.date)}
        </h2>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-slate-700">
          <dt className="font-medium">Conducting</dt>
          <dd>{meeting.conducting}</dd>
          <dt className="font-medium">Speakers</dt>
          <dd>{speakerCount}</dd>
        </dl>
      </Link>
    </article>
  );
}
