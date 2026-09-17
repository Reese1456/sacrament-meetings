import Link from "next/link";
import { connection } from "next/server";
import NavLinks from "./NavLinks";

export const WARD_NAME = "Riverside 2nd Ward";

export default async function Header() {
  // Render at request time so the date shown is today, not the build date.
  await connection();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-slate-900 text-white print:hidden">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-serif text-xl font-semibold hover:underline">
            {WARD_NAME}
          </Link>
          <p className="text-sm text-slate-300">{today}</p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
