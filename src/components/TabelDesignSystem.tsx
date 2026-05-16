import type { Project } from "@/lib/projects";
import {
  // type-of-field icons
  LetterLinear,
  DocumentTextLinear,
  DocumentLinear,
  HashtagLinear,
  RubleLinear,
  ChartSquareLinear,
  CheckSquareLinear,
  StarLinear,
  RadioLinear,
  ChecklistLinear,
  TagLinear,
  PulseLinear,
  CalendarLinear,
  CalendarMinimalisticLinear,
  ClockCircleLinear,
  ClockSquareLinear,
  UserLinear,
  UsersGroupRoundedLinear,
  PhoneLinear,
  PassportLinear,
  BuildingsLinear,
  UserIdLinear,
  MapPointLinear,
  LinkLinear,
  PaperclipLinear,
  CalculatorMinimalisticLinear,
  MagniferLinear,
  ChartLinear,
  HashtagCircleLinear,
  AltArrowUpLinear,
  GlobalLinear,
  MailboxLinear,
  LinkRoundLinear,
  MagicStick3Linear,
  RefreshLinear,
  UserPlusLinear,
  UserCircleLinear,
  DatabaseLinear,
  // actors
  SettingsLinear,
  PlugCircleLinear,
  ServerLinear,
  CPUBoltLinear,
  // approval states
  MinusCircleLinear,
  HourglassLinear,
  CheckCircleLinear,
  CloseCircleLinear,
  AltArrowLeftLinear,
  ForbiddenCircleLinear,
  // sensitivity
  LockLinear,
  LockKeyholeLinear,
  EyeLinear,
  EyeClosedLinear,
  ForbiddenLinear,
  // module/nav
  ChatRoundDotsLinear,
  InboxLinear,
  DocumentsLinear,
  BellLinear,
} from "solar-icon-set";

type IconCmp = (props: { size?: number; color?: string }) => React.JSX.Element;

/* ──────────────────────────────────────────────────────────────────────
   ЦВЕТА
   ────────────────────────────────────────────────────────────────────── */

const NEUTRALS = [
  { name: "Background", hex: "#FAFAFA", text: "#0F172A" },
  { name: "Surface", hex: "#FFFFFF", text: "#0F172A" },
  { name: "Border", hex: "#E5E7EB", text: "#0F172A" },
  { name: "Border strong", hex: "#CBD5E1", text: "#0F172A" },
  { name: "Text primary", hex: "#0F172A", text: "#FFFFFF" },
  { name: "Text secondary", hex: "#475569", text: "#FFFFFF" },
  { name: "Text tertiary", hex: "#94A3B8", text: "#FFFFFF" },
];

const SEMANTIC = [
  { name: "Primary", hex: "#2563EB", tint: "#DBEAFE", use: "Основные действия, ссылки, focus" },
  { name: "Success", hex: "#16A34A", tint: "#DCFCE7", use: "Одобрено, sync ok, success-состояния" },
  { name: "Warning", hex: "#D97706", tint: "#FEF3C7", use: "Unmask, due, эскалация, scheduled" },
  { name: "Danger", hex: "#DC2626", tint: "#FEE2E2", use: "Удаление, отклонение, ошибки" },
  { name: "Info", hex: "#0EA5E9", tint: "#E0F2FE", use: "Sync running, подсказки" },
  { name: "AI", hex: "#8B5CF6", tint: "#F3E8FF", use: "Только AI-генерация — ничего другого" },
];

/* ──────────────────────────────────────────────────────────────────────
   ТИПОГРАФИКА
   ────────────────────────────────────────────────────────────────────── */

const TYPO = [
  { name: "Display", size: 32, line: 40, weight: 600, sample: "Дизайн-система" },
  { name: "Heading 1", size: 24, line: 32, weight: 600, sample: "Согласования и одобрения" },
  { name: "Heading 2", size: 18, line: 26, weight: 600, sample: "Данные и таблицы" },
  { name: "Heading 3", size: 15, line: 22, weight: 600, sample: "Поля записи" },
  { name: "Body", size: 14, line: 20, weight: 400, sample: "Operational workspace для российских команд 10–100 человек." },
  { name: "Body small", size: 13, line: 18, weight: 400, sample: "Плотность важнее воздуха на основных экранах." },
  { name: "Caption", size: 12, line: 16, weight: 400, sample: "Скрыто (152-ФЗ) · Синхронизировано 2 мин назад" },
  { name: "Label", size: 11, line: 14, weight: 500, sample: "ОБНОВЛЕНО · ОТКЛОНЕНО · ОЖИДАЕТ" },
  { name: "Mono", size: 12, line: 16, weight: 400, sample: "+7 (916) 123-45-67 · 7707083893", mono: true },
];

/* ──────────────────────────────────────────────────────────────────────
   ТИПЫ ПОЛЕЙ — 29 типов в 11 классах
   ────────────────────────────────────────────────────────────────────── */

type FieldType = { Icon: IconCmp; name: string; desc: string };
const FIELD_GROUPS: { klass: string; title: string; types: FieldType[] }[] = [
  {
    klass: "A",
    title: "Primitive",
    types: [
      { Icon: LetterLinear, name: "Text", desc: "Строка до 500 символов" },
      { Icon: DocumentTextLinear, name: "Long Text", desc: "Markdown без форматирования" },
      { Icon: DocumentLinear, name: "Rich Text", desc: "WYSIWYG-редактор" },
      { Icon: HashtagLinear, name: "Number", desc: "Целое или дробное" },
      { Icon: RubleLinear, name: "Currency", desc: "Multi-currency, ₽/$/€" },
      { Icon: ChartSquareLinear, name: "Percentage", desc: "Значение 0–100%" },
      { Icon: CheckSquareLinear, name: "Checkbox", desc: "true / false" },
      { Icon: StarLinear, name: "Rating", desc: "1–5 или 1–10" },
    ],
  },
  {
    klass: "B",
    title: "Structural",
    types: [
      { Icon: RadioLinear, name: "Single Select", desc: "Одно из фиксированного списка" },
      { Icon: ChecklistLinear, name: "Multi Select", desc: "Несколько из списка" },
      { Icon: TagLinear, name: "Tags", desc: "Свободные ярлыки" },
      { Icon: PulseLinear, name: "Status", desc: "FSM с цветами и переходами" },
    ],
  },
  {
    klass: "C",
    title: "Date / Time",
    types: [
      { Icon: CalendarLinear, name: "Date", desc: "DD.MM.YYYY" },
      { Icon: CalendarMinimalisticLinear, name: "DateTime", desc: "С таймзоной" },
      { Icon: ClockCircleLinear, name: "Duration", desc: "INT64 секунд, «2д 3ч 15м»" },
    ],
  },
  {
    klass: "D",
    title: "Identity",
    types: [
      { Icon: UserLinear, name: "User", desc: "Один пользователь воркспейса" },
      { Icon: UsersGroupRoundedLinear, name: "Multi-User", desc: "Несколько пользователей" },
    ],
  },
  {
    klass: "E",
    title: "Russian-specific",
    types: [
      { Icon: PhoneLinear, name: "Phone", desc: "Маска +7, sensitive по умолч." },
      { Icon: PassportLinear, name: "ИНН", desc: "10 или 12 цифр с КС" },
      { Icon: BuildingsLinear, name: "ОГРН", desc: "13 или 15 цифр" },
      { Icon: UserIdLinear, name: "СНИЛС", desc: "specially_protected" },
      { Icon: MapPointLinear, name: "Address", desc: "ФИАС-нормализация" },
    ],
  },
  {
    klass: "F",
    title: "Linkage",
    types: [
      { Icon: LinkLinear, name: "Link to Record", desc: "Ссылка на другую запись" },
      { Icon: PaperclipLinear, name: "Attachment", desc: "Файл с превью" },
    ],
  },
  {
    klass: "G",
    title: "Computed",
    types: [
      { Icon: CalculatorMinimalisticLinear, name: "Formula", desc: "Read-only, ƒ" },
      { Icon: MagniferLinear, name: "Lookup", desc: "Значение из связанной записи" },
      { Icon: ChartLinear, name: "Rollup", desc: "Агрегация по связи" },
      { Icon: HashtagCircleLinear, name: "Count", desc: "Кол-во связанных" },
      { Icon: AltArrowUpLinear, name: "Counter", desc: "Auto-increment" },
    ],
  },
  {
    klass: "H",
    title: "Geo",
    types: [{ Icon: GlobalLinear, name: "Geo-coords", desc: "Карта в Record Panel" }],
  },
  {
    klass: "I",
    title: "Communication",
    types: [
      { Icon: MailboxLinear, name: "Email", desc: "Открывает Composer" },
      { Icon: LinkRoundLinear, name: "URL", desc: "Внешняя ссылка" },
    ],
  },
  {
    klass: "J",
    title: "AI",
    types: [{ Icon: MagicStick3Linear, name: "AI Field", desc: "Provenance обязателен" }],
  },
  {
    klass: "K",
    title: "System",
    types: [
      { Icon: ClockSquareLinear, name: "Created At", desc: "Read-only" },
      { Icon: RefreshLinear, name: "Updated At", desc: "Read-only" },
      { Icon: UserPlusLinear, name: "Created By", desc: "Actor + actor_type" },
      { Icon: UserCircleLinear, name: "Updated By", desc: "Actor + actor_type" },
      { Icon: DatabaseLinear, name: "Record ID", desc: "Системный идентификатор" },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────────────
   ACTORS — кто менял запись
   ────────────────────────────────────────────────────────────────────── */

const ACTORS: { Icon: IconCmp; name: string; desc: string; color: string; bg: string }[] = [
  { Icon: UserLinear, name: "User", desc: "Действие пользователя", color: "#475569", bg: "#F1F5F9" },
  { Icon: SettingsLinear, name: "Automation", desc: "Workspace-автоматизация", color: "#0EA5E9", bg: "#E0F2FE" },
  { Icon: PlugCircleLinear, name: "Connector", desc: "Маркетплейс-интеграция", color: "#D97706", bg: "#FEF3C7" },
  { Icon: ServerLinear, name: "System", desc: "Системная операция", color: "#475569", bg: "#F1F5F9" },
  { Icon: CPUBoltLinear, name: "Agent", desc: "AI-агент (reserved)", color: "#8B5CF6", bg: "#F3E8FF" },
];

/* ──────────────────────────────────────────────────────────────────────
   APPROVAL STATES — 7 состояний _approval_state
   ────────────────────────────────────────────────────────────────────── */

const APPROVAL_STATES: {
  Icon: IconCmp;
  state: string;
  label: string;
  color: string;
  bg: string;
}[] = [
  { Icon: MinusCircleLinear, state: "none", label: "Нет согласования", color: "#94A3B8", bg: "#F1F5F9" },
  { Icon: HourglassLinear, state: "pending", label: "Ожидает", color: "#2563EB", bg: "#DBEAFE" },
  { Icon: CheckCircleLinear, state: "approved", label: "Одобрено", color: "#16A34A", bg: "#DCFCE7" },
  { Icon: CloseCircleLinear, state: "rejected", label: "Отклонено", color: "#DC2626", bg: "#FEE2E2" },
  { Icon: AltArrowUpLinear, state: "escalated", label: "Эскалация", color: "#D97706", bg: "#FEF3C7" },
  { Icon: AltArrowLeftLinear, state: "withdrawn", label: "Отозвано", color: "#64748B", bg: "#F1F5F9" },
  { Icon: ForbiddenCircleLinear, state: "expired", label: "Истекло", color: "#334155", bg: "#E2E8F0" },
];

/* ──────────────────────────────────────────────────────────────────────
   ОБЩИЕ КОМПОНЕНТЫ
   ────────────────────────────────────────────────────────────────────── */

function Section({
  id,
  num,
  title,
  desc,
  children,
}: {
  id: string;
  num: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-[#E5E7EB] pt-10 pb-2 first:border-t-0 first:pt-0">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#94A3B8] tabular-nums">{num}</span>
        <h2 className="text-[20px] font-semibold tracking-tight text-[#0F172A]">{title}</h2>
      </div>
      {desc && <p className="-mt-3 mb-6 max-w-2xl text-[13px] leading-[20px] text-[#475569]">{desc}</p>}
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-[#E5E7EB] bg-white ${className}`}>{children}</div>
  );
}

function FieldChip({ Icon, name, desc }: FieldType) {
  return (
    <div className="flex items-center gap-2.5 rounded-md border border-[#E5E7EB] bg-white px-2.5 py-2 transition-colors hover:border-[#CBD5E1]">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F1F5F9] text-[#475569]">
        <Icon size={16} color="currentColor" />
      </span>
      <div className="min-w-0">
        <div className="text-[13px] font-medium leading-tight text-[#0F172A]">{name}</div>
        <div className="truncate text-[11px] leading-tight text-[#94A3B8]">{desc}</div>
      </div>
    </div>
  );
}

function StateBadge({
  Icon,
  label,
  color,
  bg,
}: {
  Icon: IconCmp;
  label: string;
  color: string;
  bg: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-medium leading-none"
      style={{ background: bg, color }}
    >
      <Icon size={13} color={color} />
      {label}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   ГЛАВНЫЙ КОМПОНЕНТ
   ────────────────────────────────────────────────────────────────────── */

export default function TabelDesignSystem({ project }: { project: Project }) {
  return (
    <div className="flex-1 bg-[#FAFAFA] text-[#0F172A]">
      {/* HERO */}
      <div className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-8 py-10">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
            /projects/{project.slug} · Design system v0.1
          </div>
          <h1 className="mt-3 text-[32px] font-semibold leading-[40px] tracking-tight">
            Табель — дизайн-система
          </h1>
          <p className="mt-3 max-w-3xl text-[14px] leading-[22px] text-[#475569]">
            Operational workspace для российских компаний 10–100 человек. Excel-плотность с современным
            визуальным языком, RU-first, 152-ФЗ как видимый слой интерфейса. Документ описывает
            словарь, который должны разделять дизайн и фронтенд.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Density > whitespace", "RU-first", "Desktop-first 1366+", "Keyboard-first", "152-ФЗ as UI"].map((t) => (
              <span key={t} className="rounded-md border border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-1 text-[11px] font-medium text-[#475569]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TWO-COLUMN: TOC + CONTENT */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-8 py-10 lg:grid-cols-[200px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-20 space-y-1 text-[12px]">
            {[
              ["01", "principles", "Принципы"],
              ["02", "colors", "Цвета"],
              ["03", "typography", "Типографика"],
              ["04", "field-types", "Типы полей"],
              ["05", "actors", "Авторы операций"],
              ["06", "approvals", "Состояния согласований"],
              ["07", "sensitivity", "Чувствительные данные"],
              ["08", "ai", "AI provenance"],
              ["09", "datagrid", "Плотность DataGrid"],
              ["10", "layout", "Размеры layout"],
              ["11", "modules", "Иконки модулей"],
              ["12", "ru-typo", "Русская типографика"],
              ["13", "states", "Шаблоны состояний"],
              ["14", "anti", "Anti-patterns"],
            ].map(([n, id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex gap-2 rounded px-2 py-1.5 text-[#475569] transition-colors hover:bg-white hover:text-[#0F172A]"
              >
                <span className="font-mono text-[#94A3B8] tabular-nums">{n}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* CONTENT */}
        <div className="min-w-0 space-y-2">
          {/* 01 ПРИНЦИПЫ */}
          <Section
            id="principles"
            num="01"
            title="Принципы"
            desc="Три правила, из которых выводятся все остальные решения. Каждое решение в системе должно проходить эту проверку."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  num: "I",
                  title: "Плотность > воздуха",
                  body: "На основных экранах пользователь сидит по 6 часов в день. Это не Notion с «breathing whitespace». Это Excel-плотность с современным polish.",
                },
                {
                  num: "II",
                  title: "RU-first",
                  body: "Кириллица как first-class: правильный шрифт, кавычки-«ёлочки», тире, неразрывные пробелы, DD.MM.YYYY, запятая в десятичных, ru_RU collation.",
                },
                {
                  num: "III",
                  title: "152-ФЗ как UI",
                  body: "Sensitivity — постоянный визуальный слой, не баннер согласия. Reveal по клику с countdown и аудитом, не по hover.",
                },
              ].map((p) => (
                <Card key={p.num} className="p-4">
                  <div className="font-mono text-[11px] text-[#94A3B8]">{p.num}</div>
                  <div className="mt-1 text-[14px] font-semibold leading-tight">{p.title}</div>
                  <p className="mt-2 text-[12px] leading-[18px] text-[#475569]">{p.body}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* 02 ЦВЕТА */}
          <Section id="colors" num="02" title="Цвета" desc="Light-палитра (Phase 1). Семантика — что важно: цвет AI отделён от primary, чтобы AI-сигнал никогда не сливался с действиями.">
            <div className="space-y-5">
              <div>
                <div className="mb-2 text-[12px] font-medium text-[#475569]">Нейтральные</div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                  {NEUTRALS.map((c) => (
                    <div key={c.name} className="overflow-hidden rounded-md border border-[#E5E7EB] bg-white">
                      <div className="h-14" style={{ background: c.hex }} />
                      <div className="border-t border-[#E5E7EB] px-2.5 py-1.5">
                        <div className="text-[11px] font-medium leading-tight text-[#0F172A]">{c.name}</div>
                        <div className="font-mono text-[10px] leading-tight text-[#94A3B8]">{c.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-[12px] font-medium text-[#475569]">Семантические</div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {SEMANTIC.map((c) => (
                    <div key={c.name} className="rounded-md border border-[#E5E7EB] bg-white p-2.5">
                      <div className="flex items-center gap-2">
                        <span className="h-7 w-7 rounded-md border border-[#E5E7EB]" style={{ background: c.hex }} />
                        <span className="h-7 w-7 rounded-md border border-[#E5E7EB]" style={{ background: c.tint }} />
                        <div className="ml-1">
                          <div className="text-[12px] font-medium leading-tight">{c.name}</div>
                          <div className="font-mono text-[10px] leading-tight text-[#94A3B8]">
                            {c.hex} · {c.tint}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] leading-[16px] text-[#475569]">{c.use}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* 03 ТИПОГРАФИКА */}
          <Section
            id="typography"
            num="03"
            title="Типографика"
            desc="9 уровней. Рекомендуемый шрифт — PT Root UI, Manrope или YS Text: они корректно рендерят кириллические д, л, и, я в строчном. Inter — только с поправленными кириллическими вариантами."
          >
            <Card className="divide-y divide-[#E5E7EB]">
              {TYPO.map((t) => (
                <div key={t.name} className="grid grid-cols-[140px_60px_1fr] items-center gap-4 px-4 py-3">
                  <div>
                    <div className="text-[12px] font-medium text-[#0F172A]">{t.name}</div>
                    <div className="font-mono text-[10px] text-[#94A3B8]">
                      {t.size}/{t.line} · {t.weight}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-[#94A3B8]">{t.size}px</div>
                  <div
                    className={`min-w-0 truncate ${t.mono ? "font-mono" : ""}`}
                    style={{ fontSize: t.size, lineHeight: `${t.line}px`, fontWeight: t.weight }}
                  >
                    {t.sample}
                  </div>
                </div>
              ))}
            </Card>
          </Section>

          {/* 04 ТИПЫ ПОЛЕЙ */}
          <Section
            id="field-types"
            num="04"
            title="Типы полей"
            desc="29 типов в 11 классах. Каждый имеет distinct иконку — пользователь должен с одного взгляда отличить Number от Currency, Phone от ИНН, AI от Formula."
          >
            <div className="space-y-5">
              {FIELD_GROUPS.map((g) => (
                <div key={g.klass}>
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="font-mono text-[11px] text-[#94A3B8]">{g.klass}.</span>
                    <span className="text-[13px] font-semibold text-[#0F172A]">{g.title}</span>
                    <span className="text-[11px] text-[#94A3B8]">— {g.types.length} тип{g.types.length === 1 ? "" : g.types.length > 4 ? "ов" : "а"}</span>
                  </div>
                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {g.types.map((t) => (
                      <FieldChip key={t.name} {...t} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 05 ACTORS */}
          <Section
            id="actors"
            num="05"
            title="Авторы операций"
            desc="В колонках Created By / Updated By показывается не только субъект, но и тип субъекта. Это часть аудита и визуальной attribution."
          >
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {ACTORS.map((a) => (
                <div key={a.name} className="rounded-md border border-[#E5E7EB] bg-white p-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md"
                    style={{ background: a.bg, color: a.color }}
                  >
                    <a.Icon size={18} color="currentColor" />
                  </span>
                  <div className="mt-2 text-[13px] font-medium text-[#0F172A]">{a.name}</div>
                  <div className="text-[11px] leading-tight text-[#94A3B8]">{a.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* 06 APPROVAL STATES */}
          <Section
            id="approvals"
            num="06"
            title="Состояния согласований"
            desc="7 значений системного поля _approval_state. Цвет + иконка + текст — всегда вместе, никогда отдельно. По цвету одного состояние читаться не должно."
          >
            <div className="flex flex-wrap gap-2">
              {APPROVAL_STATES.map((s) => (
                <StateBadge key={s.state} Icon={s.Icon} label={s.label} color={s.color} bg={s.bg} />
              ))}
            </div>
            <Card className="mt-4 p-3 font-mono text-[11px] text-[#475569]">
              _approval_state: {APPROVAL_STATES.map((s) => `'${s.state}'`).join(" | ")}
            </Card>
          </Section>

          {/* 07 SENSITIVITY */}
          <Section
            id="sensitivity"
            num="07"
            title="Чувствительные данные"
            desc="4 класса. Это не баннер согласия — это постоянный визуальный слой на ячейках, в виджетах, в экспортах. Phone имеет специальный UX reveal-flow с обратным отсчётом и аудитом."
          >
            <div className="space-y-4">
              {/* классы */}
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { Icon: null as IconCmp | null, label: "standard", desc: "Без специальных мер", color: "#94A3B8", bg: "#F1F5F9", sample: "Иван Петров" },
                  { Icon: LockLinear, label: "sensitive", desc: "Маскирование по умолч., reveal по клику", color: "#D97706", bg: "#FEF3C7", sample: "+7 (***) ***-**-67" },
                  { Icon: LockKeyholeLinear, label: "specially_protected", desc: "Permanent badge + warning при создании", color: "#DC2626", bg: "#FEE2E2", sample: "***-***-*** 12" },
                  { Icon: ForbiddenLinear, label: "biometric", desc: "Запрещено создавать (Phase 1–3)", color: "#334155", bg: "#E2E8F0", sample: "— запрещено —" },
                ].map((s) => (
                  <Card key={s.label} className="p-3">
                    <div className="flex items-center gap-2">
                      {s.Icon ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded" style={{ background: s.bg, color: s.color }}>
                          <s.Icon size={14} color="currentColor" />
                        </span>
                      ) : (
                        <span className="h-6 w-6 rounded border border-dashed border-[#CBD5E1]" />
                      )}
                      <span className="font-mono text-[11px] font-medium" style={{ color: s.color }}>
                        {s.label}
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] leading-[16px] text-[#475569]">{s.desc}</div>
                    <div className="mt-2 rounded border border-[#E5E7EB] bg-[#FAFAFA] px-2 py-1.5 font-mono text-[12px] text-[#0F172A]">
                      {s.sample}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Phone reveal flow */}
              <Card className="p-4">
                <div className="mb-3 flex items-center gap-2">
                  <PhoneLinear size={16} color="#475569" />
                  <span className="text-[13px] font-semibold text-[#0F172A]">Phone reveal flow</span>
                  <span className="rounded bg-[#FEF3C7] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#D97706]">
                    специфично для Phone
                  </span>
                </div>
                <div className="grid gap-2 sm:grid-cols-4">
                  {[
                    {
                      title: "off",
                      sample: "+7 (916) 123-45-67",
                      hint: "Полностью видно — для роли с разрешением",
                      Icon: EyeLinear,
                      color: "#16A34A",
                      bg: "#DCFCE7",
                    },
                    {
                      title: "partial (default)",
                      sample: "+7 (***) ***-**-67",
                      hint: "Идентификация без раскрытия",
                      Icon: LockLinear,
                      color: "#D97706",
                      bg: "#FEF3C7",
                    },
                    {
                      title: "full",
                      sample: "•••••••••••",
                      hint: "Extra-strict, только последние 0 цифр",
                      Icon: EyeClosedLinear,
                      color: "#DC2626",
                      bg: "#FEE2E2",
                    },
                    {
                      title: "revealed · countdown",
                      sample: "+7 (916) 123-45-67",
                      hint: "Audit-событие phone.reveal, авто-скрытие",
                      Icon: ClockCircleLinear,
                      color: "#2563EB",
                      bg: "#DBEAFE",
                      badge: "28с",
                    },
                  ].map((r) => (
                    <div key={r.title} className="rounded-md border border-[#E5E7EB] bg-[#FAFAFA] p-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded" style={{ background: r.bg, color: r.color }}>
                          <r.Icon size={12} color="currentColor" />
                        </span>
                        <span className="font-mono text-[10px] font-medium text-[#475569]">{r.title}</span>
                        {r.badge && (
                          <span className="ml-auto rounded-full px-1.5 py-0.5 font-mono text-[10px] font-medium" style={{ background: r.bg, color: r.color }}>
                            {r.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 font-mono text-[13px] text-[#0F172A]">{r.sample}</div>
                      <div className="mt-1 text-[10px] leading-tight text-[#94A3B8]">{r.hint}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[11px] text-[#475569]">
                  Reveal только по клику — никогда по hover (hover не оставляет audit-следа). Default —{" "}
                  <span className="font-mono">30с</span>, доступны{" "}
                  <span className="font-mono">15 / 30 / 60 / 120с</span>. Bulk reveal &gt; 10 за 5 минут — security alert.
                </div>
              </Card>
            </div>
          </Section>

          {/* 08 AI PROVENANCE */}
          <Section
            id="ai"
            num="08"
            title="AI provenance"
            desc="Каждое AI-значение имеет ✨ маркер и tooltip с provenance. AI без пометки — anti-pattern."
          >
            <div className="grid gap-3 sm:grid-cols-[1fr_280px]">
              {/* sample cell */}
              <Card className="p-4">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                  AI cell в DataGrid
                </div>
                <div className="overflow-hidden rounded-md border border-[#E5E7EB]">
                  <div className="grid grid-cols-[24px_180px_1fr] items-center gap-2 border-b border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-1.5 text-[11px] font-medium text-[#94A3B8]">
                    <span></span>
                    <span>Запись</span>
                    <span>Приоритет (AI)</span>
                  </div>
                  {["Заказ #4521", "Заказ #4522", "Заказ #4523"].map((rec, i) => (
                    <div key={rec} className="grid grid-cols-[24px_180px_1fr] items-center gap-2 border-b border-[#E5E7EB] px-2.5 py-1.5 text-[13px] last:border-b-0">
                      <span className="font-mono text-[11px] text-[#94A3B8]">{i + 1}</span>
                      <span className="text-[#0F172A]">{rec}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MagicStick3Linear size={13} color="#8B5CF6" />
                        <span className="text-[#0F172A]">{["Высокий", "Средний", "Низкий"][i]}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* provenance tooltip mock */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
                  Provenance tooltip
                </div>
                <Card className="p-3 shadow-sm">
                  <div className="flex items-center gap-1.5 border-b border-[#E5E7EB] pb-2">
                    <MagicStick3Linear size={14} color="#8B5CF6" />
                    <span className="text-[12px] font-semibold text-[#0F172A]">AI Field</span>
                  </div>
                  {[
                    ["Provider", "YandexGPT 4 Pro"],
                    ["Confidence", "87%"],
                    ["Generated", "14.05.2026 12:34"],
                    ["Manually edited", "нет"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between pt-1.5 text-[11px]">
                      <span className="text-[#94A3B8]">{k}</span>
                      <span className="font-mono text-[#0F172A]">{v}</span>
                    </div>
                  ))}
                </Card>
                <div className="flex items-center gap-1.5 rounded-md border border-[#FEF3C7] bg-[#FEF3C7]/40 px-2.5 py-1.5">
                  <GlobalLinear size={13} color="#D97706" />
                  <span className="text-[11px] text-[#92400E]">
                    Cross-border AI — permanent badge на поле, когда provider за пределами РФ
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* 09 DATAGRID */}
          <Section
            id="datagrid"
            num="09"
            title="Плотность DataGrid"
            desc="Compact — 32px строка, default. Comfort — 40px, переключатель в settings. Пользователь видит на 30–40% больше за прокрутку — это ценнее, чем «воздух»."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {([
                { mode: "Compact", h: 32, pad: "py-[7px]", label: "32px · default" },
                { mode: "Comfort", h: 40, pad: "py-[11px]", label: "40px · optional" },
              ] as const).map((m) => (
                <Card key={m.mode}>
                  <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2">
                    <span className="text-[12px] font-semibold text-[#0F172A]">{m.mode}</span>
                    <span className="font-mono text-[10px] text-[#94A3B8]">{m.label}</span>
                  </div>
                  <div className="text-[12px]">
                    <div className="grid grid-cols-[28px_1fr_120px_80px] items-center gap-2 border-b border-[#E5E7EB] bg-[#FAFAFA] px-2.5 py-1.5 text-[11px] font-medium text-[#94A3B8]">
                      <span></span>
                      <span>Клиент</span>
                      <span>Телефон</span>
                      <span>Сумма, ₽</span>
                    </div>
                    {[
                      ["Иван Петров", "+7 (***) ***-**-67", "12 500"],
                      ["Мария Соколова", "+7 (***) ***-**-12", "47 800"],
                      ["ООО «Маяк»", "+7 (***) ***-**-04", "184 200"],
                      ["Алексей Кузнецов", "+7 (***) ***-**-91", "9 040"],
                    ].map(([name, phone, sum], i) => (
                      <div key={i} className={`grid grid-cols-[28px_1fr_120px_80px] items-center gap-2 border-b border-[#E5E7EB] px-2.5 last:border-b-0 ${m.pad}`}>
                        <span className="font-mono text-[10px] text-[#94A3B8]">{i + 1}</span>
                        <span className="truncate text-[#0F172A]">{name}</span>
                        <span className="inline-flex items-center gap-1 font-mono text-[#475569]">
                          <LockLinear size={11} color="#D97706" />
                          {phone}
                        </span>
                        <span className="text-right font-mono tabular-nums text-[#0F172A]">{sum}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* 10 LAYOUT */}
          <Section
            id="layout"
            num="10"
            title="Размеры layout"
            desc="Шаг сетки — 8px. Все размеры контейнеров — кратные 8."
          >
            <Card className="divide-y divide-[#E5E7EB]">
              {[
                ["Sidebar", "240–280px", "Collapsible до 56px (icon-only)"],
                ["Record Panel", "480–640px", "Slide-out / modal / full-screen"],
                ["Email Composer", "600 × 500px", "Docked в углу + full-screen опция"],
                ["Workspace breakpoint min", "1366 × 768", "Phase 1 desktop-first floor"],
                ["Sweet spot", "1920 × 1080", "Целевое разрешение"],
                ["Dashboard grid", "12 колонок", "Шаг 60px по высоте"],
                ["DataGrid row", "32 / 40px", "Compact / Comfort"],
              ].map(([k, v, hint]) => (
                <div key={k} className="grid grid-cols-[220px_140px_1fr] items-center gap-3 px-4 py-2.5">
                  <span className="text-[13px] font-medium text-[#0F172A]">{k}</span>
                  <span className="font-mono text-[12px] text-[#2563EB]">{v}</span>
                  <span className="text-[12px] text-[#475569]">{hint}</span>
                </div>
              ))}
            </Card>
          </Section>

          {/* 11 MODULES */}
          <Section
            id="modules"
            num="11"
            title="Иконки модулей"
            desc="Структурные секции сайдбара — пользователь не может удалить или переставить. Только pinned внутри."
          >
            <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { Icon: DatabaseLinear, name: "Tables", path: "/tables" },
                { Icon: ChatRoundDotsLinear, name: "Communications", path: "/communications" },
                { Icon: InboxLinear, name: "Email", path: "/email" },
                { Icon: DocumentsLinear, name: "Files", path: "/files" },
                { Icon: CheckCircleLinear, name: "Approvals", path: "/approvals" },
                { Icon: ChartLinear, name: "Dashboards", path: "/dashboards" },
                { Icon: BellLinear, name: "Inbox", path: "/inbox" },
                { Icon: SettingsLinear, name: "Settings", path: "/settings" },
              ].map((m) => (
                <div key={m.name} className="flex items-center gap-2.5 rounded-md border border-[#E5E7EB] bg-white px-3 py-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#F1F5F9] text-[#475569]">
                    <m.Icon size={16} color="currentColor" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium leading-tight text-[#0F172A]">{m.name}</div>
                    <div className="font-mono text-[10px] text-[#94A3B8]">{m.path}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* 12 RU TYPO */}
          <Section
            id="ru-typo"
            num="12"
            title="Русская типографика"
            desc="Не косметика — часть продукта. Нарушение этих правил сразу делает интерфейс «иностранным» на восприятие."
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-[160px_1fr_1fr] gap-0 border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-[#94A3B8]">
                <span>Правило</span>
                <span className="text-[#DC2626]">Неправильно</span>
                <span className="text-[#16A34A]">Правильно</span>
              </div>
              {[
                ["Кавычки primary", '"Заказ #4521"', "«Заказ №4521»"],
                ["Кавычки nested", '«Проект "Север"»', "«Проект „Север“»"],
                ["Тире", "Скрыто - 152-ФЗ", "Скрыто — 152-ФЗ"],
                ["Числа", "1234567.89", "1 234 567,89"],
                ["Дата", "05/14/2026", "14.05.2026"],
                ["Ед. измерения", "25MB", "25 МБ"],
                ["Телефон", "+71234567890", "+7 (123) 456-78-90"],
                ["Sort collation", "А, Б, В, …, Е, Ж, …, Ё, …, Я", "А, Б, В, Г, Д, Е, Ё, Ж, … (ru_RU)"],
              ].map(([rule, wrong, right]) => (
                <div key={rule} className="grid grid-cols-[160px_1fr_1fr] gap-0 border-b border-[#E5E7EB] px-4 py-2.5 text-[12px] last:border-b-0">
                  <span className="text-[#475569]">{rule}</span>
                  <span className="font-mono text-[#DC2626]/80 line-through decoration-[#DC2626]/40">{wrong}</span>
                  <span className="font-mono text-[#0F172A]">{right}</span>
                </div>
              ))}
            </Card>
          </Section>

          {/* 13 STATES */}
          <Section
            id="states"
            num="13"
            title="Шаблоны состояний"
            desc="Empty / error / permission / sync / masked — у каждого свой паттерн. Hidden field ≠ restricted action, sensitive masked ≠ ошибка загрузки. Пользователь должен мгновенно понять причину."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {/* empty */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">empty</div>
                <div className="text-[13px] font-semibold text-[#0F172A]">Нет записей</div>
                <p className="mt-1 text-[12px] text-[#475569]">
                  Actionable, не «empty, sorry». Seed-кнопка или загрузка шаблона.
                </p>
                <button className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#2563EB] bg-[#2563EB] px-2.5 py-1.5 text-[12px] font-medium text-white">
                  Загрузить шаблон CRM
                </button>
              </Card>

              {/* error */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">error</div>
                <div className="flex items-center gap-1.5">
                  <CloseCircleLinear size={14} color="#DC2626" />
                  <span className="text-[13px] font-semibold text-[#0F172A]">Не удалось загрузить данные</span>
                </div>
                <p className="mt-1 text-[12px] text-[#475569]">Recovery suggestion + retry. Никаких generic «no data».</p>
                <button className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#E5E7EB] bg-white px-2.5 py-1.5 text-[12px] font-medium text-[#0F172A] hover:border-[#CBD5E1]">
                  <RefreshLinear size={13} color="#475569" />
                  Повторить
                </button>
              </Card>

              {/* permission · hidden */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">permission · hidden field</div>
                <div className="text-[13px] font-semibold text-[#0F172A]">RLS-honest</div>
                <p className="mt-1 text-[12px] text-[#475569]">
                  Колонки нет совсем — как будто её не существует. Пользователь не догадывается о наличии скрытого поля.
                </p>
                <div className="mt-3 grid grid-cols-[1fr_1fr] gap-2 rounded-md border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-2 font-mono text-[11px] text-[#94A3B8]">
                  <span>Имя</span>
                  <span>Сумма</span>
                </div>
              </Card>

              {/* permission · restricted */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">permission · restricted action</div>
                <div className="text-[13px] font-semibold text-[#0F172A]">Видно, но недоступно</div>
                <p className="mt-1 text-[12px] text-[#475569]">Кнопка disabled, tooltip объясняет «Недостаточно прав».</p>
                <button
                  disabled
                  className="mt-3 inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-[#E5E7EB] bg-[#F1F5F9] px-2.5 py-1.5 text-[12px] font-medium text-[#94A3B8]"
                >
                  <ForbiddenCircleLinear size={13} color="#94A3B8" />
                  Удалить запись
                </button>
              </Card>

              {/* sync */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">sync · synced table</div>
                <div className="text-[13px] font-semibold text-[#0F172A]">Записи из коннектора</div>
                <p className="mt-1 text-[12px] text-[#475569]">Locked-поля, индикатор «синхронизировано N мин назад».</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#E0F2FE] bg-[#E0F2FE]/40 px-2.5 py-1.5 text-[11px] text-[#0369A1]">
                  <RefreshLinear size={13} color="#0EA5E9" />
                  Синхронизировано 2 мин назад · Ozon
                </div>
              </Card>

              {/* masked */}
              <Card className="p-4">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">152-ФЗ · masked cell</div>
                <div className="text-[13px] font-semibold text-[#0F172A]">Скрыто (152-ФЗ)</div>
                <p className="mt-1 text-[12px] text-[#475569]">Не «no data», не «—». Явное указание причины.</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#FEF3C7] bg-[#FEF3C7]/40 px-2.5 py-1.5 font-mono text-[12px] text-[#92400E]">
                  <LockLinear size={13} color="#D97706" />
                  Скрыто (152-ФЗ)
                </div>
              </Card>
            </div>
          </Section>

          {/* 14 ANTI-PATTERNS */}
          <Section
            id="anti"
            num="14"
            title="Anti-patterns"
            desc="Что не делать. Если в макете встречается что-то из этого списка — переделать."
          >
            <Card className="divide-y divide-[#E5E7EB]">
              {[
                "Большие иллюстрации на empty states. Это рабочий инструмент, не landing.",
                "Onboarding tour на 20 шагов. Максимум — coach-mark на пустом DataGrid: «Tab для следующей ячейки».",
                "Gamification, streaks, achievements, эмодзи в системных сообщениях.",
                "AI-значение без ✨ и без provenance-tooltip.",
                "Sensitive поле без иконки замка или без аудита reveal.",
                "Reveal по hover вместо клика. Hover не оставляет audit-следа.",
                "Approval state, который читается только по цвету. Цвет + символ + текст всегда.",
                "Bounce-springy анимации. Только functional motion (slide-in, fade, sync spinner).",
                "Slack-like чат для внутренней коммуникации. Только comments + @mentions на записи.",
                "BPMN-диаграмма согласований. Только список + вкладка на записи.",
                "Папки в файлах. Файлы всегда прикреплены к записям.",
                "Терминология «Подпись», «Подписать», «Виза» — это УКЭП по 63-ФЗ, не наш домен.",
                "Natural-language automation builder в Phase 1. Только визуальный конструктор шагов.",
                "Универсально-красивый SaaS-стартап лук. Цель — Linear polish + Excel density.",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2.5 px-4 py-2.5 text-[12px] leading-[18px] text-[#475569]">
                  <CloseCircleLinear size={14} color="#DC2626" />
                  <span>{line}</span>
                </div>
              ))}
            </Card>
          </Section>

          <div className="pt-6 text-center font-mono text-[10px] uppercase tracking-wider text-[#94A3B8]">
            v0.1 · Phase 1 · light only · 2026-05-14
          </div>
        </div>
      </div>
    </div>
  );
}
