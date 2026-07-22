"use client";

import { useEffect, useMemo, useState } from "react";
import { Dictionary, Locale, dictionaries } from "@/lib/content-v2";
import {
  CONTENT_CONFIG_KEY,
  defaultSiteConfig,
  MediaEntry,
  SITE_CONFIG_KEY,
  SiteConfig,
} from "@/lib/site-config";

const ADMIN_PASSWORD = "surf2026admin";
const ADMIN_SESSION_KEY = "time-to-surf-admin-session";
const locales: { id: Locale; label: string }[] = [
  { id: "et", label: "EST" }, { id: "en", label: "ENG" }, { id: "ru", label: "РУС" },
];

const sections: { id: keyof Dictionary; label: string; note: string }[] = [
  { id: "nav", label: "Навигация", note: "Пункты меню и главная кнопка" },
  { id: "hero", label: "Hero", note: "Первый экран и нижняя строка" },
  { id: "intro", label: "Формат дня", note: "Вводный блок, подписи и сценарий" },
  { id: "suitedFor", label: "Для кого", note: "Список подходящих форматов" },
  { id: "features", label: "Программа", note: "Этапы водной программы" },
  { id: "gallery", label: "Тексты галереи", note: "Заголовки, карточки и кнопки" },
  { id: "pricing", label: "Стоимость", note: "Цена, факторы и предложение" },
  { id: "trust", label: "Доверие", note: "Почему Time to Surf" },
  { id: "faq", label: "FAQ", note: "Вопросы и ответы" },
  { id: "reviews", label: "Отзывы", note: "Тексты блока и формы" },
  { id: "finalCta", label: "Финальный CTA", note: "Финальный призыв" },
  { id: "location", label: "Локация", note: "Адрес, транспорт и парковка" },
  { id: "footer", label: "Футер", note: "Описание и служебные подписи" },
];

type Panel = keyof Dictionary | "media" | "links" | "seo";
type UnknownRecord = Record<string, unknown>;

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));
const labelize = (key: string) => key
  .replace(/([a-z])([A-Z])/g, "$1 $2")
  .replace(/_/g, " ")
  .replace(/^./, (letter) => letter.toUpperCase());

function updatePath<T>(root: T, path: (string | number)[], value: unknown): T {
  const copy = clone(root) as unknown as UnknownRecord;
  let cursor: unknown = copy;
  path.slice(0, -1).forEach((part) => { cursor = (cursor as UnknownRecord)[part]; });
  (cursor as UnknownRecord)[path[path.length - 1]] = value;
  return copy as T;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [panel, setPanel] = useState<Panel>("hero");
  const [locale, setLocale] = useState<Locale>("et");
  const [content, setContent] = useState(clone(dictionaries));
  const [config, setConfig] = useState<SiteConfig>(clone(defaultSiteConfig));
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setAuthed(window.sessionStorage.getItem(ADMIN_SESSION_KEY) === ADMIN_PASSWORD);
    try {
      const storedContent = window.localStorage.getItem(CONTENT_CONFIG_KEY);
      const storedConfig = window.localStorage.getItem(SITE_CONFIG_KEY);
      if (storedContent) setContent(JSON.parse(storedContent));
      if (storedConfig) setConfig(JSON.parse(storedConfig));
    } catch { /* defaults remain available */ }
  }, []);

  const login = () => {
    if (password !== ADMIN_PASSWORD) { setError("Неверный пароль"); return; }
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, ADMIN_PASSWORD);
    setAuthed(true);
    setError("");
  };

  const commit = () => {
    window.localStorage.setItem(CONTENT_CONFIG_KEY, JSON.stringify(content));
    window.localStorage.setItem(SITE_CONFIG_KEY, JSON.stringify(config));
    window.dispatchEvent(new Event("tts-admin-updated"));
    setDirty(false);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  const reset = () => {
    if (!window.confirm("Вернуть все тексты, ссылки и медиа к исходной версии?")) return;
    window.localStorage.removeItem(CONTENT_CONFIG_KEY);
    window.localStorage.removeItem(SITE_CONFIG_KEY);
    setContent(clone(dictionaries));
    setConfig(clone(defaultSiteConfig));
    window.dispatchEvent(new Event("tts-admin-updated"));
    setDirty(false);
  };

  if (!authed) return (
    <main className="min-h-screen bg-[#071d25] px-5 py-12 font-body text-[#102a33]">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center">
        <div className="w-full rounded-[28px] border border-white/10 bg-[#f6f0e4] p-8 shadow-2xl sm:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d9a94e] font-display text-2xl">≈</div>
            <div><h1 className="font-display text-3xl">Time to Surf</h1><p className="text-sm text-[#567079]">Панель управления сайтом</p></div>
          </div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[.15em] text-[#567079]">Пароль</label>
          <input className="w-full rounded-xl border border-[#c9d2cf] bg-white px-4 py-3 outline-none focus:border-[#d9a94e]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && login()} autoFocus />
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <button className="mt-5 w-full rounded-xl bg-[#0c2630] px-5 py-3 font-bold text-white transition hover:bg-[#163e49]" onClick={login}>Войти в админку</button>
          <p className="mt-5 text-xs leading-relaxed text-[#71868c]">На этапе прототипа пароль хранится локально. Настоящую авторизацию подключим вместе с Supabase.</p>
        </div>
      </div>
    </main>
  );

  const selectedSection = sections.find((section) => section.id === panel);

  return (
    <main className="min-h-screen bg-[#eef1ed] font-body text-[#102a33]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071d25] text-white shadow-lg">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#d9a94e] font-display text-xl text-[#071d25]">≈</span><div><strong className="font-display text-xl">Time to Surf Admin</strong><p className="text-[11px] uppercase tracking-[.16em] text-white/45">Редактор всего сайта</p></div></div>
          <div className="flex items-center gap-2">
            {saved && <span className="hidden rounded-full bg-emerald-400/15 px-3 py-2 text-xs text-emerald-300 sm:block">Сохранено</span>}
            {dirty && <span className="hidden rounded-full bg-amber-400/15 px-3 py-2 text-xs text-amber-200 sm:block">Есть изменения</span>}
            <a href="/" target="_blank" className="rounded-xl border border-white/20 px-4 py-2 text-xs font-bold transition hover:border-[#d9a94e] hover:text-[#d9a94e]">Открыть сайт ↗</a>
            <button onClick={() => { window.sessionStorage.removeItem(ADMIN_SESSION_KEY); setAuthed(false); }} className="rounded-xl px-3 py-2 text-xs text-white/55 hover:text-white">Выйти</button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[290px_1fr]">
        <aside className="border-r border-[#ccd5d1] bg-[#f7f5ef] p-4 lg:min-h-[calc(100vh-73px)] lg:p-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#7a8c8e]">Блоки страницы</p>
          <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
            {sections.map((section, index) => <SideButton key={section.id} active={panel === section.id} title={`${String(index + 1).padStart(2, "0")} · ${section.label}`} note={section.note} onClick={() => setPanel(section.id)} />)}
          </nav>
          <p className="mb-3 mt-7 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#7a8c8e]">Общие настройки</p>
          <div className="grid gap-1 sm:grid-cols-3 lg:grid-cols-1">
            <SideButton active={panel === "media"} title="Фото и галерея" note="Все изображения и видео" onClick={() => setPanel("media")} />
            <SideButton active={panel === "links"} title="Ссылки и контакты" note="Telegram, телефон, карты" onClick={() => setPanel("links")} />
            <SideButton active={panel === "seo"} title="SEO и вкладка" note="Title, description, favicon" onClick={() => setPanel("seo")} />
          </div>
        </aside>

        <section className="min-w-0 p-5 sm:p-8 lg:p-10 xl:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#b17e2f]">Управление контентом</p><h2 className="font-display text-4xl text-[#0c2630]">{selectedSection?.label || (panel === "media" ? "Фото и галерея" : panel === "links" ? "Ссылки и контакты" : "SEO и вкладка")}</h2><p className="mt-2 text-sm text-[#65797d]">{selectedSection?.note || "Изменения сохраняются локально до подключения Supabase"}</p></div>
              {selectedSection && <div className="flex w-fit rounded-xl border border-[#ccd5d1] bg-white p-1">{locales.map((item) => <button key={item.id} onClick={() => setLocale(item.id)} className={`rounded-lg px-4 py-2 text-xs font-bold ${locale === item.id ? "bg-[#0c2630] text-white" : "text-[#65797d] hover:text-[#0c2630]"}`}>{item.label}</button>)}</div>}
            </div>

            {selectedSection && (
              <div className="rounded-[24px] border border-[#d4dbd7] bg-white p-5 shadow-sm sm:p-7">
                <RecursiveEditor
                  value={content[locale][selectedSection.id]}
                  path={[]}
                  onChange={(path, value) => { setContent(updatePath(content, [locale, selectedSection.id, ...path], value)); setDirty(true); }}
                />
              </div>
            )}
            {panel === "links" && <ObjectPanel value={config.links} onChange={(key, value) => { setConfig({ ...config, links: { ...config.links, [key]: value } }); setDirty(true); }} />}
            {panel === "seo" && <ObjectPanel value={config.seo} onChange={(key, value) => { setConfig({ ...config, seo: { ...config.seo, [key]: value } }); setDirty(true); }} previews />}
            {panel === "media" && <MediaPanel config={config} setConfig={(next) => { setConfig(next); setDirty(true); }} />}

            <div className="sticky bottom-5 z-30 mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#cbd4d0] bg-white/95 p-4 shadow-xl backdrop-blur">
              <button onClick={reset} className="rounded-xl px-4 py-3 text-xs font-bold text-red-600 hover:bg-red-50">Сбросить изменения</button>
              <div className="flex gap-2"><a href="/" target="_blank" className="rounded-xl border border-[#bdc8c4] px-5 py-3 text-xs font-bold">Предпросмотр ↗</a><button onClick={commit} className="rounded-xl bg-[#d9a94e] px-7 py-3 text-xs font-extrabold uppercase tracking-[.12em] text-[#0c2630] hover:bg-[#e7bd6a]">Сохранить всё</button></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SideButton({ active, title, note, onClick }: { active: boolean; title: string; note: string; onClick: () => void }) {
  return <button onClick={onClick} className={`rounded-xl px-3 py-3 text-left transition ${active ? "bg-[#0c2630] text-white shadow-md" : "text-[#28444b] hover:bg-white"}`}><span className="block text-sm font-bold">{title}</span><span className={`mt-0.5 block text-[11px] ${active ? "text-white/50" : "text-[#829295]"}`}>{note}</span></button>;
}

function RecursiveEditor({ value, path, onChange }: { value: unknown; path: (string | number)[]; onChange: (path: (string | number)[], value: unknown) => void }) {
  if (typeof value === "string") return <TextField label={String(path[path.length - 1] ?? "Текст")} value={value} onChange={(next) => onChange(path, next)} />;
  if (typeof value === "number") return <TextField label={String(path[path.length - 1])} value={String(value)} onChange={(next) => onChange(path, Number(next))} />;
  if (typeof value === "boolean") return <label className="flex items-center gap-3 rounded-xl bg-[#f3f5f2] p-4 text-sm font-bold"><input type="checkbox" checked={value} onChange={(e) => onChange(path, e.target.checked)} />{labelize(String(path[path.length - 1]))}</label>;
  if (Array.isArray(value)) return (
    <div className="mb-7 rounded-2xl border border-[#dce2de] bg-[#f7f8f5] p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between"><h3 className="font-display text-xl">{labelize(String(path[path.length - 1] ?? "Список"))}</h3><button onClick={() => onChange(path, [...value, value.length && typeof value[0] === "object" ? blankLike(value[0]) : ""])} className="rounded-lg bg-[#e8ddc5] px-3 py-2 text-xs font-bold">+ Добавить</button></div>
      <div className="grid gap-3">{value.map((item, index) => <div key={index} className="rounded-xl border border-[#d9e0dc] bg-white p-4"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-[#b17e2f]">{String(index + 1).padStart(2, "0")}</span><div className="flex gap-1"><MiniButton disabled={index === 0} onClick={() => onChange(path, move(value, index, -1))}>↑</MiniButton><MiniButton disabled={index === value.length - 1} onClick={() => onChange(path, move(value, index, 1))}>↓</MiniButton><MiniButton danger onClick={() => onChange(path, value.filter((_, itemIndex) => itemIndex !== index))}>Удалить</MiniButton></div></div><RecursiveEditor value={item} path={[...path, index]} onChange={onChange} /></div>)}</div>
    </div>
  );
  if (value && typeof value === "object") return <div className="grid gap-1">{Object.entries(value as UnknownRecord).map(([key, child]) => <RecursiveEditor key={key} value={child} path={[...path, key]} onChange={onChange} />)}</div>;
  return null;
}

function blankLike(value: unknown): unknown {
  if (Array.isArray(value)) return [];
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value as UnknownRecord).map(([key, child]) => [key, blankLike(child)]));
  if (typeof value === "boolean") return true;
  if (typeof value === "number") return 0;
  return "";
}

function move<T>(items: T[], index: number, direction: -1 | 1) {
  const next = [...items]; const target = index + direction;
  [next[index], next[target]] = [next[target], next[index]];
  return next;
}

function MiniButton({ children, onClick, disabled, danger }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; danger?: boolean }) {
  return <button disabled={disabled} onClick={onClick} className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold disabled:opacity-25 ${danger ? "bg-red-50 text-red-600" : "bg-[#edf1ef] text-[#36545b]"}`}>{children}</button>;
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  const multiline = value.length > 75 || /text|desc|subtitle|answer|paragraph/i.test(label);
  return <label className="mb-4 block"><span className="mb-2 block text-[11px] font-extrabold uppercase tracking-[.12em] text-[#61777b]">{labelize(label)}</span>{multiline ? <textarea className="min-h-24 w-full resize-y rounded-xl border border-[#ced8d4] bg-white px-4 py-3 text-sm leading-relaxed outline-none focus:border-[#d9a94e]" value={value} onChange={(e) => onChange(e.target.value)} /> : <input className="w-full rounded-xl border border-[#ced8d4] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a94e]" value={value} onChange={(e) => onChange(e.target.value)} />}</label>;
}

function ObjectPanel({ value, onChange, previews = false }: { value: Record<string, string>; onChange: (key: string, value: string) => void; previews?: boolean }) {
  return <div className="rounded-[24px] border border-[#d4dbd7] bg-white p-5 shadow-sm sm:p-7">{Object.entries(value).map(([key, fieldValue]) => <div key={key}>{previews && key === "favicon" && <img src={fieldValue} alt="Favicon preview" className="mb-3 h-16 w-16 rounded-2xl border object-cover" />}<TextField label={key} value={fieldValue} onChange={(next) => onChange(key, next)} /></div>)}</div>;
}

function MediaPanel({ config, setConfig }: { config: SiteConfig; setConfig: (config: SiteConfig) => void }) {
  const fixed: { key: keyof Omit<SiteConfig["media"], "curated" | "gallery">; label: string }[] = [
    { key: "hero", label: "Фото Hero" }, { key: "introPrimary", label: "Формат дня - большое фото" },
    { key: "introSecondary", label: "Формат дня - малое фото" }, { key: "trust", label: "Фото доверия" },
    { key: "finalCta", label: "Фото финального CTA" },
  ];
  const setMedia = (patch: Partial<SiteConfig["media"]>) => setConfig({ ...config, media: { ...config.media, ...patch } });
  const addGallery = () => setMedia({ gallery: [...config.media.gallery, { id: crypto.randomUUID(), type: "photo", src: "" }] });
  const updateGallery = (index: number, patch: Partial<MediaEntry>) => setMedia({ gallery: config.media.gallery.map((item, i) => i === index ? { ...item, ...patch } : item) });

  return <div className="grid gap-6">
    <div className="rounded-[24px] border border-[#d4dbd7] bg-white p-5 shadow-sm sm:p-7"><h3 className="mb-5 font-display text-2xl">Фотографии блоков</h3><div className="grid gap-5 md:grid-cols-2">{fixed.map(({ key, label }) => <MediaField key={key} label={label} value={config.media[key]} onChange={(value) => setMedia({ [key]: value })} />)}</div></div>
    <div className="rounded-[24px] border border-[#d4dbd7] bg-white p-5 shadow-sm sm:p-7"><h3 className="mb-2 font-display text-2xl">Пять карточек галереи</h3><p className="mb-5 text-sm text-[#697d81]">Порядок соответствует карточкам 01-05 на главной.</p><div className="grid gap-5 md:grid-cols-2">{config.media.curated.map((src, index) => <MediaField key={index} label={`Карточка ${index + 1}`} value={src} onChange={(value) => setMedia({ curated: config.media.curated.map((item, i) => i === index ? value : item) })} />)}</div></div>
    <div className="rounded-[24px] border border-[#d4dbd7] bg-white p-5 shadow-sm sm:p-7"><div className="mb-5 flex items-center justify-between"><div><h3 className="font-display text-2xl">Полная галерея</h3><p className="mt-1 text-sm text-[#697d81]">Добавляйте, удаляйте и меняйте порядок фото и видео.</p></div><button onClick={addGallery} className="rounded-xl bg-[#0c2630] px-4 py-3 text-xs font-bold text-white">+ Добавить</button></div><div className="grid gap-4">{config.media.gallery.map((item, index) => <div key={item.id} className="grid gap-4 rounded-2xl border border-[#dae1dd] p-4 md:grid-cols-[110px_1fr_auto]"><div className="h-24 overflow-hidden rounded-xl bg-[#e9eeeb]">{item.type === "video" ? <video src={item.src} poster={item.poster} className="h-full w-full object-cover" /> : item.src && <img src={item.src} alt="" className="h-full w-full object-cover" />}</div><div className="grid gap-2 sm:grid-cols-2"><select className="rounded-xl border px-3 py-2 text-sm" value={item.type} onChange={(e) => updateGallery(index, { type: e.target.value as MediaEntry["type"] })}><option value="photo">Фото</option><option value="video">Видео</option></select><input className="rounded-xl border px-3 py-2 text-sm" value={item.src} placeholder="URL файла" onChange={(e) => updateGallery(index, { src: e.target.value })} />{item.type === "video" && <input className="rounded-xl border px-3 py-2 text-sm sm:col-span-2" value={item.poster || ""} placeholder="URL обложки" onChange={(e) => updateGallery(index, { poster: e.target.value })} />}</div><div className="flex items-start gap-1"><MiniButton disabled={index === 0} onClick={() => setMedia({ gallery: move(config.media.gallery, index, -1) })}>↑</MiniButton><MiniButton disabled={index === config.media.gallery.length - 1} onClick={() => setMedia({ gallery: move(config.media.gallery, index, 1) })}>↓</MiniButton><MiniButton danger onClick={() => setMedia({ gallery: config.media.gallery.filter((_, i) => i !== index) })}>×</MiniButton></div></div>)}</div></div>
  </div>;
}

function MediaField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  const readFile = (file?: File) => { if (!file) return; const reader = new FileReader(); reader.onload = () => onChange(String(reader.result)); reader.readAsDataURL(file); };
  return <div className="rounded-2xl border border-[#dbe2de] p-4"><div className="mb-3 aspect-video overflow-hidden rounded-xl bg-[#edf1ef]">{value && <img src={value} alt="" className="h-full w-full object-cover" />}</div><TextField label={label} value={value} onChange={onChange} /><label className="block cursor-pointer rounded-xl border border-dashed border-[#aebdb8] px-4 py-3 text-center text-xs font-bold text-[#526c72] hover:border-[#d9a94e]">Выбрать файл для прототипа<input className="hidden" type="file" accept="image/*" onChange={(e) => readFile(e.target.files?.[0])} /></label></div>;
}
