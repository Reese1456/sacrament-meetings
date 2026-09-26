import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import MeetingDetail from "@/components/MeetingDetail";
import { formatMeetingDate } from "@/lib/dates";
import { getMeetingById } from "@/lib/meetings-db";

// Returns the meeting for a URL id, or null when the id isn't a whole number or doesn't exist.
// cache() lets generateMetadata and the page share one database query per request.
const findMeeting = cache(async (id: string) => {
  return /^\d+$/.test(id) ? getMeetingById(Number(id)) : null;
});

export async function generateMetadata({ params }: PageProps<"/meetings/[id]">): Promise<Metadata> {
  const meeting = await findMeeting((await params).id);
  return { title: meeting ? formatMeetingDate(meeting.date) : "Meeting not found" };
}

export default async function MeetingPage({ params }: PageProps<"/meetings/[id]">) {
  const meeting = await findMeeting((await params).id);
  if (!meeting) notFound();

  return <MeetingDetail meeting={meeting} />;
}
