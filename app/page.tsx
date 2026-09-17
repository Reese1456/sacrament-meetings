import Image from "next/image";
import Link from "next/link";
import { WARD_NAME } from "@/components/Header";

export default function Home() {
  return (
    <div className="space-y-8">
      <Image
        src="/chapel.svg"
        alt="Illustration of a white chapel with a steeple surrounded by trees"
        width={800}
        height={400}
        loading="eager"
        className="h-auto w-full rounded-lg border border-slate-200"
      />

      <section className="space-y-4">
        <h1 className="font-serif text-3xl font-semibold text-slate-900">{WARD_NAME} Sacrament Meeting Planner</h1>
        <p className="max-w-2xl text-lg text-slate-700">
          Leaders can review upcoming and past sacrament meetings: announcements, hymns, prayers, ward
          business, speakers, and musical numbers. Members can view and print the program for any week.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/meetings/current"
            className="rounded-md bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            View this Sunday&apos;s program
          </Link>
          <Link
            href="/meetings"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Browse all meetings
          </Link>
        </div>
      </section>
    </div>
  );
}
