import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import type { SacramentMeeting } from "./types";

export const MEETINGS_PER_PAGE = 5;

// Created on first use so importing this module (e.g. during `next build`)
// doesn't throw when DATABASE_URL isn't set.
let client: NeonQueryFunction<false, false> | undefined;
function sql() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set. Run `vercel env pull .env.local` to get it.");
  }
  client ??= neon(process.env.DATABASE_URL);
  return client;
}

// Maps snake_case columns to the camelCase SacramentMeeting shape. `date::text`
// keeps dates as 'YYYY-MM-DD' strings instead of JS Dates that can shift by time zone.
const COLUMNS = `
  id,
  date::text          AS date,
  meeting_type        AS "meetingType",
  presiding,
  conducting,
  announcements,
  opening_hymn        AS "openingHymn",
  opening_prayer      AS "openingPrayer",
  ward_business       AS "wardBusiness",
  stake_business      AS "stakeBusiness",
  sacrament_hymn      AS "sacramentHymn",
  speakers,
  closing_hymn        AS "closingHymn",
  closing_prayer      AS "closingPrayer"
`;

// Wraps the search term for ILIKE, escaping % and _ so they match literally.
function likePattern(query: string) {
  return `%${query.replace(/[\\%_]/g, "\\$&")}%`;
}

// Newest first, filtered by presiding, conducting, meeting type, or any speaker's name.
export async function getMeetings(query = "", currentPage = 1): Promise<SacramentMeeting[]> {
  const db = sql();
  const pattern = likePattern(query);
  const offset = (currentPage - 1) * MEETINGS_PER_PAGE;

  const rows = await db`
    SELECT ${db.unsafe(COLUMNS)}
    FROM meetings
    WHERE presiding ILIKE ${pattern}
       OR conducting ILIKE ${pattern}
       OR meeting_type ILIKE ${pattern}
       OR EXISTS (
         SELECT 1 FROM jsonb_array_elements(speakers) AS s
         WHERE s->>'name' ILIKE ${pattern}
       )
    ORDER BY date DESC
    LIMIT ${MEETINGS_PER_PAGE} OFFSET ${offset}
  `;
  return rows as SacramentMeeting[];
}

export async function getMeetingsTotalPages(query = ""): Promise<number> {
  const db = sql();
  const pattern = likePattern(query);

  const [{ count }] = await db`
    SELECT COUNT(*) AS count
    FROM meetings
    WHERE presiding ILIKE ${pattern}
       OR conducting ILIKE ${pattern}
       OR meeting_type ILIKE ${pattern}
       OR EXISTS (
         SELECT 1 FROM jsonb_array_elements(speakers) AS s
         WHERE s->>'name' ILIKE ${pattern}
       )
  `;
  // COUNT(*) is a bigint, which the driver returns as a string.
  return Math.ceil(Number(count) / MEETINGS_PER_PAGE);
}

export async function getMeetingById(id: number): Promise<SacramentMeeting | null> {
  const db = sql();
  const rows = await db`SELECT ${db.unsafe(COLUMNS)} FROM meetings WHERE id = ${id}`;
  return (rows[0] as SacramentMeeting | undefined) ?? null;
}

// Dates are unique, so there is at most one meeting per Sunday.
export async function getMeetingByDate(date: string): Promise<SacramentMeeting | null> {
  const db = sql();
  const rows = await db`SELECT ${db.unsafe(COLUMNS)} FROM meetings WHERE date = ${date}`;
  return (rows[0] as SacramentMeeting | undefined) ?? null;
}

// Week 04: create, edit, and delete meetings from the admin pages.
export async function addMeeting(meeting: Omit<SacramentMeeting, "id">): Promise<SacramentMeeting> {
  throw new Error(`addMeeting is not implemented yet (Week 04): ${meeting.date}`);
}

export async function updateMeeting(id: number, meeting: Omit<SacramentMeeting, "id">): Promise<SacramentMeeting> {
  throw new Error(`updateMeeting is not implemented yet (Week 04): ${id}, ${meeting.date}`);
}

export async function deleteMeeting(id: number): Promise<void> {
  throw new Error(`deleteMeeting is not implemented yet (Week 04): ${id}`);
}
