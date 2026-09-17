import type { NextRequest } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

// GET /api/meetings — all meetings, or only those matching ?date=YYYY-MM-DD
export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");
  return Response.json(getMeetings(date));
}
