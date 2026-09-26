import Link from "next/link";

export default function MeetingsLayout({ children }: LayoutProps<"/meetings">) {
  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600 print:hidden">
        <ol className="flex gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/meetings" className="hover:underline">
              Meetings
            </Link>
          </li>
        </ol>
      </nav>
      {children}
    </div>
  );
}
