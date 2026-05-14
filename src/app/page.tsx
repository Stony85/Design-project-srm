import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Page() {
  return (
    <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Дизайн-проекты
        </h1>
        <p className="mt-2 text-sm opacity-70">
          {projects.length}{" "}
          {projects.length === 1 ? "проект" : "проектов"} в коллекции
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group block h-full rounded-xl border border-black/10 dark:border-white/10 p-5 transition-colors hover:border-black/30 dark:hover:border-white/30 hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
            >
              <div className="aspect-[16/10] w-full rounded-lg bg-black/5 dark:bg-white/10 mb-4 flex items-center justify-center text-xs opacity-50">
                preview
              </div>
              <h2 className="font-medium tracking-tight">{p.title}</h2>
              <p className="mt-1 text-sm opacity-70 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-3 text-xs opacity-50 font-mono">
                /projects/{p.slug}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
