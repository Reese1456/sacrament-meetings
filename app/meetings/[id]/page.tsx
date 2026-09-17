import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { formatMeetingDate } from "@/lib/dates";
import { getMeetingById } from "@/lib/meetings-db";

// Returns the meeting for a URL id, or null when the id isn't a whole number or doesn't exist.
function findMeeting(id: string) {
  return /^\d+$/.test(id) ? getMeetingById(Number(id)) : null;
}

export async function generateMetadata({ params }: PageProps<"/meetings/[id]">): Promise<Metadata> {
  const meeting = findMeeting((await params).id);
  return { title: meeting ? formatMeetingDate(meeting.date) : "Meeting not found" };
}

export default async function MeetingPage({ params }: PageProps<"/meetings/[id]">) {
  const meeting = findMeeting((await params).id);
  if (!meeting) notFound();

  return <MeetingDetail meeting={meeting} />;
}
