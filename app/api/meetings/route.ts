import type { NextRequest } from "next/server";
import { getMeetingByDate, getMeetings } from "@/lib/meetings-db";

// GET /api/meetings — one page of meetings (?query=&page=), or only the one on ?date=YYYY-MM-DD
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const date = searchParams.get("date");

  if (date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return Response.json({ error: "Date must be in YYYY-MM-DD format." }, { status: 400 });
    }
    const meeting = await getMeetingByDate(date);
    return Response.json(meeting ? [meeting] : []);
  }

  const query = searchParams.get("query") ?? "";
  const page = Math.max(1, Math.floor(Number(searchParams.get("page"))) || 1);
  return Response.json(await getMeetings(query, page));
}
