import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import TabelDesignSystem from "@/components/TabelDesignSystem";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (slug === "tabel") {
    return <TabelDesignSystem project={project} />;
  }

  return (
    <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-8 border-b border-black/10 dark:border-white/10 pb-6">
        <div className="text-xs font-mono opacity-50 mb-2">
          /projects/{project.slug}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="mt-2 text-sm opacity-70 max-w-2xl">
          {project.description}
        </p>
      </div>

      <div className="rounded-xl border border-dashed border-black/15 dark:border-white/15 p-12 text-center opacity-60">
        <p className="text-sm">Пустой холст для дизайна</p>
        <p className="mt-1 text-xs">
          Чтобы кастомизировать конкретный проект — раздели его по условию на
          slug либо вынеси макет в отдельный компонент
        </p>
      </div>
    </main>
  );
}
