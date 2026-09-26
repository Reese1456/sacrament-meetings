import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Meeting",
};

// The form to edit a meeting arrives in Week 04.
export default async function EditMeetingPage({ params }: PageProps<"/meetings/[id]/edit">) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <h1 className="font-serif text-3xl font-semibold text-slate-900">Edit Meeting {id}</h1>
      <p className="text-slate-600">The meeting editing form is coming soon.</p>
    </div>
  );
}
