import { WARD_NAME } from "./Header";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-slate-600">
        <p>{WARD_NAME} Sacrament Meeting Planner</p>
        <p>WDD 430 course project. Sample data for demonstration only.</p>
      </div>
    </footer>
  );
}
