import type { MeetingType } from "./types";

// Meeting dates are stored as 'YYYY-MM-DD'. `new Date("2026-09-13")` parses as
// UTC midnight, so format in UTC to keep the day from shifting in other time zones.
export function formatMeetingDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// The most recent Sunday (today if today is Sunday) as 'YYYY-MM-DD'.
// getDay() returns 0 for Sunday, so subtracting it walks back to Sunday.
export function getCurrentSundayIso(today: Date = new Date()): string {
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay());

  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, "0");
  const day = String(sunday.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const meetingTypeLabels: Record<MeetingType, string> = {
  testimony: "Fast and Testimony Meeting",
  regular: "Sacrament Meeting",
  stake: "Stake Visit",
  general: "General Conference",
  special: "Special Meeting",
};
