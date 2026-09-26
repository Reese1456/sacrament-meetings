import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan a Meeting",
};

// The form to create a meeting arrives in Week 04.
export default function NewMeetingPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900">Plan a Meeting</h1>
      <p className="text-slate-600">The meeting planning form is coming soon.</p>
    </div>
  );
}
