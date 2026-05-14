export type Project = {
  slug: string;
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "tabel",
    title: "Табель",
    description:
      "Дизайн-система operational workspace для российских компаний 10–100 человек. Плотность > воздуха, RU-first, 152-ФЗ как визуальный слой.",
  },
  {
    slug: "project-1",
    title: "Project 1",
    description:
      "Пример пустого проекта. Скопируй структуру и добавь свой макет.",
  },
  {
    slug: "project-2",
    title: "Project 2",
    description:
      "Пример пустого проекта. Скопируй структуру и добавь свой макет.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
