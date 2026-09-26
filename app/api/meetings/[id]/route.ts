import type { NextRequest } from "next/server";
import { getMeetingById } from "@/lib/meetings-db";

// GET /api/meetings/[id] — 200 with the meeting, 400 for a bad id, 404 if missing
export async function GET(_request: NextRequest, ctx: RouteContext<"/api/meetings/[id]">) {
  const { id } = await ctx.params;

  if (!/^\d+$/.test(id)) {
    return Response.json({ error: "Meeting id must be a positive whole number." }, { status: 400 });
  }

  const meeting = await getMeetingById(Number(id));
  if (!meeting) {
    return Response.json({ error: `No meeting found with id ${id}.` }, { status: 404 });
  }

  return Response.json(meeting);
}
