import { redirect } from "next/navigation";
import { connection } from "next/server";
import { getCurrentSundayIso } from "@/lib/dates";
import { getMeetingByDate } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  // Wait for a real request; otherwise "today" would be frozen at build time.
  await connection();

  const meeting = await getMeetingByDate(getCurrentSundayIso());

  // No meeting this Sunday (e.g. general conference): fall back to the list.
  redirect(meeting ? `/meetings/${meeting.id}` : "/meetings");
}
