import type { ReactNode } from "react";
import { formatMeetingDate, meetingTypeLabels } from "@/lib/dates";
import type { Hymn, SacramentMeeting } from "@/lib/types";
import PrintButton from "./PrintButton";

function formatHymn(hymn: Hymn) {
  return `#${hymn.number}, "${hymn.title}"`;
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-slate-100 py-2 sm:grid-cols-[12rem_1fr]">
      <dt className="font-medium text-slate-600">{label}</dt>
      <dd className="text-slate-900">{children}</dd>
    </div>
  );
}

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  const announcements = meeting.announcements ?? [];

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm print:border-0 print:p-0 print:shadow-none">
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {meetingTypeLabels[meeting.meetingType]}
          </p>
          <h1 className="font-serif text-2xl font-semibold text-slate-900">
            {formatMeetingDate(meeting.date)}
          </h1>
        </div>
        <PrintButton />
      </header>

      <section aria-labelledby="leaders-heading" className="mt-4">
        <h2 id="leaders-heading" className="sr-only">
          Leadership
        </h2>
        <dl>
          <Row label="Presiding">{meeting.presiding}</Row>
          <Row label="Conducting">{meeting.conducting}</Row>
        </dl>
      </section>

      {announcements.length > 0 && (
        <section aria-labelledby="announcements-heading" className="mt-6">
          <h2 id="announcements-heading" className="font-serif text-lg font-semibold text-slate-900">
            Announcements
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-800">
            {announcements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="program-heading" className="mt-6">
        <h2 id="program-heading" className="font-serif text-lg font-semibold text-slate-900">
          Program
        </h2>
        <dl className="mt-2">
          <Row label="Opening Hymn">{formatHymn(meeting.openingHymn)}</Row>
          <Row label="Invocation">{meeting.openingPrayer}</Row>

          <Row label="Ward Business">
            {meeting.wardBusiness.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5">
                {meeting.wardBusiness.map((item) => (
                  <li key={item.description}>{item.description}</li>
                ))}
              </ul>
            ) : (
              <span className="text-slate-500">None</span>
            )}
          </Row>
          {meeting.stakeBusiness && <Row label="Stake Business">Conducted by the stake presidency</Row>}

          <Row label="Sacrament Hymn">{formatHymn(meeting.sacramentHymn)}</Row>
          <Row label="Administration of the Sacrament">Aaronic Priesthood</Row>

          <Row label="Speakers and Music">
            <ol className="space-y-2">
              {meeting.speakers.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.type === "musical-number" ? "Musical Number" : "Speaker"}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-slate-600"> — {item.topic}</span>
                </li>
              ))}
            </ol>
          </Row>

          <Row label="Closing Hymn">{formatHymn(meeting.closingHymn)}</Row>
          <Row label="Benediction">{meeting.closingPrayer}</Row>
        </dl>
      </section>
    </article>
  );
}
