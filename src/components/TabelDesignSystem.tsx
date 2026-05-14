import type { Project } from "@/lib/projects";

/* ─────────────────────────────────────────────────────────────
   ДАННЫЕ ДИЗАЙН-СИСТЕМЫ
   ───────────────────────────────────────────────────────────── */

const COLORS = {
  neutral: [
    { name: "Background", hex: "#FAFAFA", token: "--tb-bg" },
    { name: "Surface", hex: "#FFFFFF", token: "--tb-surface" },
    { name: "Border", hex: "#E5E7EB", token: "--tb-border" },
    { name: "Border strong", hex: "#CBD5E1", token: "--tb-border-strong" },
    { name: "Text primary", hex: "#0F172A", token: "--tb-text" },
    { name: "Text secondary", hex: "#475569", token: "--tb-text-2" },
    { name: "Text tertiary", hex: "#94A3B8", token: "--tb-text-3" },
  ],
  semantic: [
    { name: "Primary", hex: "#2563EB", tint: "#DBEAFE", use: "основные действия, ссылки" },
    { name: "Success", hex: "#16A34A", tint: "#DCFCE7", use: "approve, sync ok" },
    { name: "Warning", hex: "#D97706", tint: "#FEF3C7", use: "unmask, scheduled, due" },
    { name: "Danger", hex: "#DC2626", tint: "#FEE2E2", use: "delete, reject" },
    { name: "Info", hex: "#0EA5E9", tint: "#E0F2FE", use: "sync running, hints" },
    { name: "AI", hex: "#8B5CF6", tint: "#F3E8FF", use: "AI-generated values only" },
  ],
};

const TYPE_GROUPS: {
  klass: string;
  klassName: string;
  types: { icon: string; name: string; desc: string }[];
}[] = [
  {
    klass: "A",
    klassName: "Primitive",
    types: [
      { icon: "T", name: "Text", desc: "Строка до 500 симв." },
      { icon: "¶", name: "Long Text", desc: "Markdown" },
      { icon: "R", name: "Rich Text", desc: "WYSIWYG" },
      { icon: "#", name: "Number", desc: "Целое / дробное" },
      { icon: "₽", name: "Currency", desc: "Multi-currency" },
      { icon: "%", name: "Percentage", desc: "0–100" },
      { icon: "☑", name: "Checkbox", desc: "true / false" },
      { icon: "★", name: "Rating", desc: "1–5 / 1–10" },
    ],
  },
  {
    klass: "B",
    klassName: "Structural",
    types: [
      { icon: "◉", name: "Single Select", desc: "Одно из списка" },
      { icon: "◎", name: "Multi Select", desc: "Несколько из списка" },
      { icon: "#", name: "Tags", desc: "Свободные теги" },
      { icon: "●", name: "Status", desc: "FSM с переходами" },
    ],
  },
  {
    klass: "C",
    klassName: "Date / Time",
    types: [
      { icon: "D", name: "Date", desc: "ДД.ММ.ГГГГ" },
      { icon: "Đ", name: "DateTime", desc: "Дата + время + TZ" },
      { icon: "⏱", name: "Duration", desc: "«2д 3ч 15м»" },
    ],
  },
  {
    klass: "D",
    klassName: "Identity",
    types: [
      { icon: "U", name: "User", desc: "Avatar + имя" },
      { icon: "U+", name: "Multi-User", desc: "Группа исполнителей" },
    ],
  },
  {
    klass: "E",
    klassName: "Russian-specific",
    types: [
      { icon: "☎", name: "Phone", desc: "+7 (***) ***-**-90" },
      { icon: "ИН", name: "ИНН", desc: "10 / 12 цифр" },
      { icon: "ОГ", name: "ОГРН", desc: "13 / 15 цифр" },
      { icon: "СН", name: "СНИЛС", desc: "XXX-XXX-XXX YY" },
      { icon: "@", name: "Address", desc: "ФИАС, нормализация" },
    ],
  },
  {
    klass: "F",
    klassName: "Linkage",
    types: [
      { icon: "↗", name: "Link to Record", desc: "Chip с превью" },
      { icon: "📎", name: "Attachment", desc: "Файлы + preview" },
    ],
  },
  {
    klass: "G",
    klassName: "Computed",
    types: [
      { icon: "ƒ", name: "Formula", desc: "Read-only, expr" },
      { icon: "↑", name: "Lookup", desc: "Из связи" },
      { icon: "Σ", name: "Rollup", desc: "Агрегат по связи" },
      { icon: "n", name: "Count", desc: "Кол-во связей" },
      { icon: "▲", name: "Counter", desc: "Auto-increment" },
    ],
  },
  {
    klass: "H",
    klassName: "Geo",
    types: [{ icon: "◯", name: "Geo-coords", desc: "Точка на карте" }],
  },
  {
    klass: "I",
    klassName: "Communication",
    types: [
      { icon: "✉", name: "Email", desc: "Открывает Composer" },
      { icon: "://", name: "URL", desc: "Кликабельная ссылка" },
    ],
  },
  {
    klass: "J",
    klassName: "AI",
    types: [{ icon: "✨", name: "AI Field", desc: "+ provenance tooltip" }],
  },
  {
    klass: "K",
    klassName: "System",
    types: [
      { icon: "+t", name: "Created At", desc: "Read-only" },
      { icon: "~t", name: "Updated At", desc: "Read-only" },
      { icon: "+u", name: "Created By", desc: "Actor + тип" },
      { icon: "~u", name: "Updated By", desc: "Actor + тип" },
      { icon: "id", name: "Record ID", desc: "Immutable" },
    ],
  },
];

const ACTORS = [
  { icon: "👤", label: "User", desc: "Действие человека" },
  { icon: "⚙", label: "Automation", desc: "Сценарий автоматизации" },
  { icon: "⚡", label: "Connector", desc: "Маркетплейс-интеграция" },
  { icon: "✱", label: "System", desc: "Платформа" },
  { icon: "✦", label: "Agent", desc: "AI-агент (reserved)" },
];

const APPROVAL_STATES: {
  key: string;
  label: string;
  symbol: string;
  fg: string;
  bg: string;
  border?: string;
}[] = [
  { key: "none", label: "Без согласования", symbol: "—", fg: "#64748B", bg: "#F1F5F9" },
  { key: "pending", label: "Ожидает", symbol: "○", fg: "#2563EB", bg: "#DBEAFE" },
  { key: "approved", label: "Согласовано", symbol: "✓", fg: "#16A34A", bg: "#DCFCE7" },
  { key: "rejected", label: "Отклонено", symbol: "✕", fg: "#DC2626", bg: "#FEE2E2" },
  { key: "escalated", label: "Эскалация", symbol: "↑", fg: "#D97706", bg: "#FEF3C7" },
  { key: "withdrawn", label: "Отозвано", symbol: "←", fg: "#64748B", bg: "#F1F5F9" },
  { key: "expired", label: "Истекло", symbol: "⊘", fg: "#475569", bg: "#E2E8F0", border: "#94A3B8" },
];

const TYPO_SCALE = [
  { name: "display", size: 36, lh: 44, weight: 600, sample: "Дизайн-система Табель" },
  { name: "h1", size: 28, lh: 36, weight: 600, sample: "Запись клиента" },
  { name: "h2", size: 22, lh: 30, weight: 600, sample: "Согласования" },
  { name: "h3", size: 18, lh: 26, weight: 600, sample: "Чувствительные данные" },
  { name: "body", size: 14, lh: 20, weight: 400, sample: "Иванов И. И., менеджер, +7 (***) ***-**-90" },
  { name: "body-sm", size: 13, lh: 18, weight: 400, sample: "Согласовано 14.05.2026, 14:23 МСК" },
  { name: "caption", size: 12, lh: 16, weight: 400, sample: "5 строк выбрано · сумма 124 580,50 ₽" },
  { name: "label", size: 11, lh: 14, weight: 500, sample: "ИНН · ОГРН · СНИЛС" },
];

const TOC = [
  { id: "principles", label: "Принципы" },
  { id: "colors", label: "Цвета" },
  { id: "typography", label: "Типографика" },
  { id: "field-types", label: "Иконки типов полей" },
  { id: "actors", label: "Авторы изменений" },
  { id: "approvals", label: "Согласования" },
  { id: "sensitivity", label: "152-ФЗ и маскирование" },
  { id: "ai-provenance", label: "AI provenance" },
  { id: "datagrid", label: "Плотность DataGrid" },
  { id: "layout", label: "Размеры layout" },
  { id: "ru-typography", label: "Русская типографика" },
  { id: "states", label: "Состояния" },
  { id: "anti", label: "Anti-patterns" },
];

/* ─────────────────────────────────────────────────────────────
   ВСПОМОГАТЕЛЬНЫЕ ПРИМИТИВЫ
   ───────────────────────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
  intro,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 mb-16">
      <div className="mb-5 pb-3 border-b border-gray-200">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {intro && (
          <p className="mt-1.5 text-sm text-slate-600 max-w-2xl">{intro}</p>
        )}
      </div>
      {children}
    </section>
  );
}

function TypeChip({ icon }: { icon: string }) {
  return (
    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded px-1 font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200" style={{ fontSize: 11 }}>
      {icon}
    </span>
  );
}

function StateBadge({ state }: { state: (typeof APPROVAL_STATES)[number] }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        background: state.bg,
        color: state.fg,
        border: state.border ? `1px solid ${state.border}` : undefined,
      }}
    >
      <span aria-hidden style={{ fontSize: 11, lineHeight: 1 }}>{state.symbol}</span>
      {state.label}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   ОСНОВНОЙ КОМПОНЕНТ
   ───────────────────────────────────────────────────────────── */

export default function TabelDesignSystem({ project }: { project: Project }) {
  return (
    <div className="flex-1 bg-neutral-50 text-slate-900">
      {/* HERO */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-10">
          <div className="text-xs font-mono text-slate-400 mb-2">
            /projects/{project.slug}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.title} · Дизайн-система
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl leading-relaxed">
            Operational workspace для российских компаний 10–100 человек. Этот
            документ фиксирует визуальный язык продукта: токены, иконографию,
            правила работы с чувствительными данными по 152-ФЗ, AI provenance,
            плотность DataGrid и русские типографические правила. Phase 1,
            desktop-first, light theme.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                t: "Плотность > воздуха",
                d: "Excel-уровень плотности, Linear-уровень polish. Не consumer SaaS.",
              },
              {
                t: "RU-first",
                d: "Кириллица, ДД.ММ.ГГГГ, 1 234,56, «ёлочки», ru_RU collation.",
              },
              {
                t: "152-ФЗ как UI-слой",
                d: "Sensitivity-маркеры, reveal с countdown, AI provenance — всегда видимы.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-lg border border-gray-200 bg-neutral-50 p-3"
              >
                <div className="text-sm font-medium">{p.t}</div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COL LAYOUT */}
      <div className="mx-auto max-w-7xl px-8 py-10 flex gap-10">
        {/* TOC */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-20">
            <div className="uppercase tracking-wider text-slate-400 font-medium mb-2" style={{ fontSize: 11 }}>
              Содержание
            </div>
            <ul className="space-y-1 text-sm">
              {TOC.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="block py-1 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">
          {/* 1. ПРИНЦИПЫ */}
          <Section
            id="principles"
            title="Принципы"
            intro="Любое UI-решение проверяется этими тремя правилами. Если конфликтуют — побеждает первое."
          >
            <ol className="space-y-3 text-sm">
              {[
                ["Плотность важнее воздуха на рабочих экранах.",
                  "Пользователь живёт в продукте 4–8 часов в день. DataGrid — 32–36px строки compact. Whitespace оставляем для онбординга, settings и редко используемых поверхностей."],
                ["Запись — центр всего.",
                  "Все 8 типов сущностей вокруг записи: коммуникации, письма, согласования, файлы, история, ссылки, комментарии. Слайдер/модалка/full-screen — три формата одной карточки."],
                ["Security-сигналы постоянно видны, но не криком.",
                  "Lock-иконка, sensitive badge, AI ✨, sync-индикатор — присутствуют на каждой релевантной ячейке. Цвет приглушённый, размер мелкий, но 100% узнаваемые."],
                ["Keyboard-first.",
                  "Cmd+K везде. Tab по DataGrid. Hotkeys видны в tooltip каждого действия. Mouse — fallback."],
                ["Никаких consumer SaaS-приёмов.",
                  "Без onboarding-турова на 20 шагов, без gamification, без больших иллюстраций в empty states, без эмодзи в системных сообщениях."],
              ].map(([head, body], i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white text-xs font-mono">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-medium">{head}</div>
                    <div className="text-slate-600 leading-relaxed mt-0.5">
                      {body}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {/* 2. ЦВЕТА */}
          <Section
            id="colors"
            title="Цвета"
            intro="Палитра намеренно сдержанная. Семантические токены — единственный способ задать цвет в продукте; прямые hex-ы в компонентах запрещены."
          >
            <div className="mb-6">
              <div className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                Нейтрали
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {COLORS.neutral.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-md border border-gray-200 bg-white overflow-hidden"
                  >
                    <div className="h-12 border-b border-gray-200" style={{ background: c.hex }} />
                    <div className="px-2.5 py-1.5">
                      <div className="text-xs font-medium">{c.name}</div>
                      <div className="font-mono text-slate-400" style={{ fontSize: 11 }}>
                        {c.hex}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">
                Семантические
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {COLORS.semantic.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-stretch rounded-md border border-gray-200 bg-white overflow-hidden"
                  >
                    <div className="w-14 shrink-0" style={{ background: c.hex }} />
                    <div className="w-10 shrink-0 border-r border-gray-200" style={{ background: c.tint }} />
                    <div className="px-3 py-2 flex-1">
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="font-mono text-slate-400" style={{ fontSize: 11 }}>
                        {c.hex} · tint {c.tint}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">{c.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-md bg-amber-100 border border-amber-300 px-3 py-2 text-xs text-amber-900">
              <strong>Dark theme</strong> — Phase 2. Операционные инструменты в РФ
              работают в light по умолчанию; перенос dark откладываем до стабилизации
              light-палитры на реальных данных.
            </div>
          </Section>

          {/* 3. ТИПОГРАФИКА */}
          <Section
            id="typography"
            title="Типографика"
            intro="Шкала из 8 уровней. Шрифт — кириллическо-aware (рекомендую PT Root UI, Manrope или YS Text). Не Inter без подправленных кириллических вариантов."
          >
            <div className="rounded-md border border-gray-200 bg-white divide-y divide-gray-200">
              {TYPO_SCALE.map((t) => (
                <div
                  key={t.name}
                  className="grid grid-cols-12 gap-4 px-4 py-3 items-baseline"
                >
                  <div className="col-span-3">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="font-mono text-slate-400" style={{ fontSize: 11 }}>
                      {t.size}/{t.lh} · {t.weight}
                    </div>
                  </div>
                  <div
                    className="col-span-9 text-slate-900"
                    style={{
                      fontSize: t.size,
                      lineHeight: `${t.lh}px`,
                      fontWeight: t.weight,
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              Проверка кириллицы: длинные строчные «д», «л», «и», «р» не должны
              разъезжаться по бейзлайну на 14px/20 в DataGrid с 12–15 строками
              в видимой области. Если шрифт ломается — он не подходит.
            </p>
          </Section>

          {/* 4. ИКОНКИ ТИПОВ ПОЛЕЙ */}
          <Section
            id="field-types"
            title="Иконки типов полей"
            intro="29 типов в 11 классах. Каждый тип имеет уникальный визуальный маркер в заголовке колонки DataGrid и в шапке поля Record Panel. Пользователь должен распознавать тип за < 200 мс."
          >
            <div className="space-y-5">
              {TYPE_GROUPS.map((g) => (
                <div key={g.klass}>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-white font-mono" style={{ fontSize: 11 }}>
                      {g.klass}
                    </span>
                    <span className="text-sm font-medium">{g.klassName}</span>
                    <span className="text-slate-400 font-mono" style={{ fontSize: 11 }}>
                      {g.types.length} {g.types.length === 1 ? "тип" : "типов"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {g.types.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-center gap-2.5 rounded-md border border-gray-200 bg-white px-2.5 py-2"
                      >
                        <TypeChip icon={t.icon} />
                        <div className="min-w-0">
                          <div className="text-xs font-medium truncate">
                            {t.name}
                          </div>
                          <div className="text-slate-400 truncate" style={{ fontSize: 11 }}>
                            {t.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 5. АВТОРЫ */}
          <Section
            id="actors"
            title="Авторы изменений"
            intro="Каждая правка несёт actor + actor_type. В колонках Created/Updated By — иконка типа автора. Это часть аудита и compliance handshake."
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {ACTORS.map((a) => (
                <div
                  key={a.label}
                  className="rounded-md border border-gray-200 bg-white px-3 py-3 text-center"
                >
                  <div className="text-2xl leading-none mb-1.5">{a.icon}</div>
                  <div className="text-sm font-medium">{a.label}</div>
                  <div className="text-slate-400 mt-0.5" style={{ fontSize: 11 }}>
                    {a.desc}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 6. СОГЛАСОВАНИЯ */}
          <Section
            id="approvals"
            title="Состояния согласований"
            intro="7 значений computed-поля _approval_state. Badge в заголовке Record Panel, в DataGrid-колонке, в Approval Inbox. Терминология фиксирована: «Согласовать», «Резолюция», «Заявка». Никогда «Подпись», «Подписать», «Виза»."
          >
            <div className="flex flex-wrap gap-2">
              {APPROVAL_STATES.map((s) => (
                <StateBadge key={s.key} state={s} />
              ))}
            </div>

            <div className="mt-5 rounded-md border border-gray-200 bg-white overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-200 bg-neutral-50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    Record · Заявка на закупку #4821
                  </div>
                  <div className="text-sm font-medium mt-0.5">
                    Принтер HP LaserJet · 18 400,00 ₽
                  </div>
                </div>
                <StateBadge state={APPROVAL_STATES[1]} />
              </div>
              <div className="px-4 py-3 text-xs text-slate-600 space-y-1">
                <div>
                  Заявка → Иванов И. И. (одобрил, 14.05.2026 11:32) → Петров С. В. (ожидает)
                </div>
                <div className="text-slate-400">
                  Напоминания 3+1+1 · Reminder 1 отправлен 13.05.2026 14:00
                </div>
              </div>
            </div>
          </Section>

          {/* 7. SENSITIVITY */}
          <Section
            id="sensitivity"
            title="152-ФЗ · маскирование и reveal"
            intro="Чувствительные данные — постоянный визуальный слой. 4 класса sensitivity, каждый со своим UI-поведением. Phone reveal — отдельный pattern с обратным отсчётом."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
              {[
                {
                  klass: "standard",
                  label: "Стандартное",
                  example: "Иванов Иван Иванович",
                  note: "Без специальных мер",
                  borderColor: "#E5E7EB",
                  tag: null,
                },
                {
                  klass: "sensitive",
                  label: "Чувствительное (по умолчанию маскируется)",
                  example: "+7 (***) ***-**-90",
                  note: "Иконка 🔒 на ячейке, reveal по клику на 30 сек",
                  borderColor: "#E5E7EB",
                  tag: { text: "🔒 sensitive", fg: "#475569", bg: "#F1F5F9" },
                },
                {
                  klass: "specially_protected",
                  label: "Особо защищённое",
                  example: "Группа крови: II Rh+",
                  note: "Permanent badge, предупреждение при создании поля",
                  borderColor: "#FCD34D",
                  tag: { text: "152-ФЗ · особо защ.", fg: "#78350F", bg: "#FEF3C7" },
                },
                {
                  klass: "biometric_identification",
                  label: "Биометрия",
                  example: "— запрещено в Phase 1–3 —",
                  note: "Создание поля заблокировано, error при API-вызове",
                  borderColor: "#FCA5A5",
                  tag: { text: "запрещено", fg: "#991B1B", bg: "#FEE2E2" },
                },
              ].map((s) => (
                <div
                  key={s.klass}
                  className="rounded-md bg-white px-3.5 py-3"
                  style={{ border: `1px solid ${s.borderColor}` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="text-xs font-mono text-slate-400">{s.klass}</div>
                    {s.tag && (
                      <span
                        className="font-medium rounded px-1.5 py-0.5"
                        style={{ color: s.tag.fg, background: s.tag.bg, fontSize: 10 }}
                      >
                        {s.tag.text}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium">{s.label}</div>
                  <div className="mt-2 font-mono text-sm text-slate-900">
                    {s.example}
                  </div>
                  <div className="text-slate-600 mt-1.5 leading-relaxed" style={{ fontSize: 11 }}>
                    {s.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
              <div className="px-4 py-2.5 border-b border-gray-200 bg-neutral-50">
                <div className="text-sm font-medium">Phone reveal flow</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Reveal — только по клику (никогда по hover). 15 / 30 / 60 / 120 сек, default 30. Audit-событие phone.reveal.
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="px-4 py-4 text-center">
                  <div className="text-slate-400 mb-2" style={{ fontSize: 11 }}>1 · masked</div>
                  <div className="font-mono text-sm inline-flex items-center gap-2">
                    +7 (***) ***-**-90
                    <span className="text-xs">🔒</span>
                  </div>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: "#FEF3C7" }}>
                  <div className="text-amber-900 mb-2" style={{ fontSize: 11 }}>
                    2 · revealed
                  </div>
                  <div className="font-mono text-sm inline-flex items-center gap-2">
                    +7 (916) 123-45-90
                    <span className="font-medium rounded px-1.5 py-0.5 text-white tabular-nums" style={{ background: "#D97706", fontSize: 10 }}>
                      28с
                    </span>
                  </div>
                </div>
                <div className="px-4 py-4 text-center">
                  <div className="text-slate-400 mb-2" style={{ fontSize: 11 }}>3 · auto-mask</div>
                  <div className="font-mono text-sm inline-flex items-center gap-2">
                    +7 (***) ***-**-90
                    <span className="text-xs">🔒</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-200 text-red-900" style={{ background: "#FEE2E2", fontSize: 11 }}>
                Bulk alert: &gt; 10 phone reveal за 5 мин · &gt; 100 sensitive reveal за час → security event.
              </div>
            </div>
          </Section>

          {/* 8. AI PROVENANCE */}
          <Section
            id="ai-provenance"
            title="AI provenance"
            intro="Ни одно AI-сгенерированное значение в продукте не появляется без ✨-иконки и provenance-tooltip. Это compliance-обязательство, не косметика."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs text-slate-400 mb-2 font-mono">
                  DataGrid cell
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-neutral-50 text-sm">
                  <span className="text-violet-500">✨</span>
                  <span>Высокий приоритет</span>
                </div>
                <div className="text-slate-600 mt-2 leading-relaxed" style={{ fontSize: 11 }}>
                  Sparkle в начале значения. Цвет — AI-фиолетовый #8B5CF6. На
                  manually_edited значениях sparkle тускнеет до 40% opacity.
                </div>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs text-slate-400 mb-2 font-mono">
                  Tooltip on hover
                </div>
                <div className="rounded-md text-white p-3 text-xs space-y-1" style={{ background: "#0F172A", border: "1px solid #0F172A" }}>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-400">Provider</span>
                    <span className="font-mono">YandexGPT 4 Pro</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-400">Confidence</span>
                    <span className="font-mono">0.87</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-400">Generated</span>
                    <span className="font-mono">14.05.2026 12:34</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-400">Edited</span>
                    <span className="font-mono">нет</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-md border border-amber-300 bg-amber-100 px-3 py-2.5 text-xs text-amber-900">
              <strong>Cross-border badge.</strong> Если workspace включает
              OpenAI / Anthropic / DeepSeek — на AI-функциях постоянный visible badge
              «Данные отправляются за пределы РФ». Badge нельзя свернуть.
            </div>
          </Section>

          {/* 9. DATAGRID */}
          <Section
            id="datagrid"
            title="Плотность DataGrid"
            intro="Главный экран продукта. Compact 32px — default. Comfort 44px — переключатель в settings view. До 200 колонок × 100 000 записей, виртуализация обязательна."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { mode: "Compact · 32px", height: 32 },
                { mode: "Comfort · 44px", height: 44 },
              ].map((m) => (
                <div
                  key={m.mode}
                  className="rounded-md border border-gray-200 bg-white overflow-hidden"
                >
                  <div className="px-3 py-2 bg-neutral-50 border-b border-gray-200 text-xs font-medium">
                    {m.mode}
                  </div>
                  <div className="text-xs">
                    <div
                      className="grid bg-neutral-50 border-b border-gray-200 text-slate-600"
                      style={{ gridTemplateColumns: "24px 1fr 90px 100px" }}
                    >
                      <div className="px-2 py-1.5 border-r border-gray-200 text-center">#</div>
                      <div className="px-2 py-1.5 border-r border-gray-200 flex items-center gap-1.5">
                        <TypeChip icon="T" />
                        Клиент
                      </div>
                      <div className="px-2 py-1.5 border-r border-gray-200 flex items-center gap-1.5">
                        <TypeChip icon="●" />
                        Статус
                      </div>
                      <div className="px-2 py-1.5 flex items-center gap-1.5">
                        <TypeChip icon="₽" />
                        Сумма
                      </div>
                    </div>
                    {[
                      ["ООО «Восход»", "В работе", "124 580,50 ₽", "#16A34A"],
                      ["ИП Иванов И. И.", "Ожидает", "8 200,00 ₽", "#2563EB"],
                      ["АО «Север-Авто»", "Согласовано", "456 000,00 ₽", "#16A34A"],
                      ["ООО «Дельта-М»", "Отклонено", "12 350,00 ₽", "#DC2626"],
                    ].map(([name, status, sum, color], i) => (
                      <div
                        key={i}
                        className="grid border-b border-slate-100 last:border-b-0"
                        style={{ gridTemplateColumns: "24px 1fr 90px 100px", height: m.height }}
                      >
                        <div className="px-2 flex items-center justify-center text-slate-400 border-r border-slate-100 tabular-nums">
                          {i + 1}
                        </div>
                        <div className="px-2 flex items-center border-r border-slate-100 truncate">
                          {name}
                        </div>
                        <div className="px-2 flex items-center border-r border-slate-100">
                          <span
                            className="inline-flex items-center gap-1"
                            style={{ color: color as string, fontSize: 11 }}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: color as string }}
                            />
                            {status}
                          </span>
                        </div>
                        <div className="px-2 flex items-center justify-end tabular-nums" style={{ fontSize: 11 }}>
                          {sum}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-3 py-1.5 bg-neutral-50 border-t border-gray-200 flex items-center justify-between text-slate-600" style={{ fontSize: 11 }}>
                    <span>4 записи</span>
                    <span className="font-mono tabular-nums">
                      Σ 601 130,50 ₽
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 10. LAYOUT */}
          <Section
            id="layout"
            title="Размеры layout"
            intro="Сетка 8px. Минимум 1366×768, sweet spot 1920×1080. Все ключевые поверхности — десктоп."
          >
            <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-slate-600 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium">Поверхность</th>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium">Размер</th>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium">Поведение</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Sidebar", "240–280 px", "Collapsible до 56 px (icon-only)"],
                    ["Record Panel · slide-out", "480–640 px", "Drag-resize, sticky tabs, full-screen toggle"],
                    ["Record Panel · modal", "min(900 px, 70vw)", "Для углублённой работы"],
                    ["Email Composer · docked", "600 × 500 px", "В правом нижнем углу, multi-instance"],
                    ["Email Composer · full-screen", "100 % – sidebar", "AI-панель 280 px справа"],
                    ["Dashboard grid", "12 колонок · 60 px step", "Виджет минимум 2×2"],
                    ["DataGrid row · compact", "32 px", "Default · sticky header · frozen left"],
                    ["DataGrid row · comfort", "44 px", "Toggle в settings view"],
                    ["Command Palette", "640 × auto", "Center · max 60vh"],
                  ].map(([a, b, c]) => (
                    <tr key={a}>
                      <td className="px-4 py-2 font-medium">{a}</td>
                      <td className="px-4 py-2 font-mono text-xs tabular-nums">{b}</td>
                      <td className="px-4 py-2 text-slate-600 text-xs">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* 11. РУССКАЯ ТИПОГРАФИКА */}
          <Section
            id="ru-typography"
            title="Русская типографика"
            intro="Сводка обязательных правил. Линтер на CI должен ловить нарушения в продуктовых строках."
          >
            <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-slate-600 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium">Правило</th>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium text-red-600">Нет</th>
                    <th className="text-left px-4 py-2 border-b border-gray-200 font-medium text-green-600">Да</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-xs">
                  {[
                    ["Кавычки primary", `"Восход"`, "«Восход»"],
                    ["Кавычки nested", "«офис «Север»»", "«офис „Север“»"],
                    ["Дефис vs тире", "клиент - партнёр", "клиент — партнёр"],
                    ["Многоточие", "...", "…"],
                    ["Число + единица", "25 МБ (обычный пробел)", "25 МБ (неразрывный)"],
                    ["Телефон + код", "+7 916", "+7 916"],
                    ["Дата", "05/14/2026", "14.05.2026"],
                    ["Время", "14:23 PM", "14:23 МСК"],
                    ["Десятичная дробь", "1,234.56", "1 234,56"],
                    ["Тысячи", "1,234,567", "1 234 567"],
                    ["Валюта", "$124.50", "124,50 ₽"],
                    ["Сортировка", "Ё в конце алфавита", "ru_RU collation — Ё после Е"],
                  ].map(([rule, bad, good]) => (
                    <tr key={rule}>
                      <td className="px-4 py-2 font-sans text-slate-900">{rule}</td>
                      <td className="px-4 py-2 text-red-600">{bad}</td>
                      <td className="px-4 py-2 text-green-600">{good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 text-xs text-slate-600 leading-relaxed">
              Внутренние коды (Tenant, Entity, Attribute, RLS) — только в admin-панели и логах.
              В продуктовом UI: «Запись», «Поле», «Таблица», «Представление», «Согласование», «Заявка».
            </div>
          </Section>

          {/* 12. СОСТОЯНИЯ */}
          <Section
            id="states"
            title="Шаблоны состояний"
            intro="Empty / Loading / Error / Permission — четыре класса состояний с разным визуальным языком. Permission states разводятся на два разных паттерна."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">empty</div>
                <div className="text-sm font-medium mb-1">Нет записей</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Actionable, не «empty, sorry». Seed-кнопка или seed-template.
                </div>
                <div className="flex gap-2">
                  <button className="text-xs px-2.5 py-1 rounded bg-blue-600 text-white">
                    Создать запись
                  </button>
                  <button className="text-xs px-2.5 py-1 rounded border border-gray-200 text-slate-600">
                    Загрузить шаблон CRM
                  </button>
                </div>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">error</div>
                <div className="text-sm font-medium mb-1">Не удалось загрузить данные</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Recovery suggestion + retry. Никаких generic «no data».
                </div>
                <button className="text-xs px-2.5 py-1 rounded border border-gray-200 text-slate-900">
                  Повторить
                </button>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">
                  permission · hidden field
                </div>
                <div className="text-sm font-medium mb-1">RLS-honest</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Колонки нет совсем — как будто её не существует. Пользователь
                  не должен догадываться о наличии скрытого поля.
                </div>
                <div className="font-mono text-slate-400 bg-neutral-50 rounded px-2 py-1.5 border border-gray-200" style={{ fontSize: 11 }}>
                  Имя · Телефон · Сумма
                </div>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">
                  permission · restricted action
                </div>
                <div className="text-sm font-medium mb-1">Видно, но недоступно</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Кнопка disabled, tooltip объясняет «Недостаточно прав».
                </div>
                <button
                  disabled
                  className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-400 cursor-not-allowed"
                >
                  Удалить запись
                </button>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">
                  sync · synced table
                </div>
                <div className="text-sm font-medium mb-1">Записи из коннектора</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Locked-поля, индикатор «синхронизировано N мин назад».
                </div>
                <div className="inline-flex items-center gap-1.5 text-sky-500" style={{ fontSize: 11 }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
                  Синхронизировано 2 мин назад · Ozon
                </div>
              </div>

              <div className="rounded-md border border-gray-200 bg-white p-4">
                <div className="text-xs font-mono text-slate-400 mb-1">
                  152-ФЗ · masked cell
                </div>
                <div className="text-sm font-medium mb-1">Скрыто (152-ФЗ)</div>
                <div className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Не «no data», не «—». Явное указание причины.
                </div>
                <div className="font-mono inline-flex items-center gap-1.5 bg-neutral-50 rounded px-2 py-1.5 border border-gray-200" style={{ fontSize: 11 }}>
                  🔒 Скрыто (152-ФЗ)
                </div>
              </div>
            </div>
          </Section>

          {/* 13. ANTI-PATTERNS */}
          <Section
            id="anti"
            title="Anti-patterns"
            intro="Что не делать. Если в макете встречается что-то из этого списка — переделать."
          >
            <ul className="space-y-2 text-sm">
              {[
                "Большие иллюстрации на empty states. Это рабочий инструмент, не landing.",
                "Onboarding tour на 20 шагов. Максимум — coach-mark на пустой DataGrid: «Tab для следующей ячейки».",
                "Gamification, streaks, achievements, эмодзи в системных сообщениях.",
                "AI-значение без ✨ и без provenance-tooltip.",
                "Sensitive поле без 🔒-иконки или без аудита reveal.",
                "Reveal по hover вместо клика. Hover не оставляет audit-следа.",
                "Approval state, который читается только по цвету. Цвет + символ + текст всегда.",
                "Bounce-springy анимации. Только functional motion (slide-in, fade, sync spinner).",
                "Slack-like чат для внутренней коммуникации. Только comments + @mentions на записи.",
                "BPMN-диаграмма согласований. Только список + вкладка на записи.",
                "Папки в файлах. Файлы всегда прикреплены к записям.",
                "Терминология «Подпись», «Подписать», «Виза» — это УКЭП по 63-ФЗ, не наш домен.",
                "Natural-language automation builder в Phase 1. Только визуальный конструктор шагов.",
                "Универсально-красивый SaaS-стартап лук. Цель — Linear polish + Excel density.",
              ].map((s, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 text-red-600 text-base leading-tight">×</span>
                  <span className="text-slate-900 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="text-xs text-slate-400 pt-6 border-t border-gray-200">
            Документ сжат до того, что нужно дизайнеру для UI Kit. Расширенный
            контекст по бизнесу и архитектуре — в PRD v6.1, product-depth
            доках, компендиуме и anti-vision документе.
          </div>
        </div>
      </div>
    </div>
  );
}
