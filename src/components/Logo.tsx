import { useSite } from "../i18n/lang";

/** Logo textual. `light` para fundo escuro. */
export function Logo({ light = false }: { light?: boolean }) {
  const { brand } = useSite().site;
  return (
    <span className="flex items-center gap-2.5">
      <svg aria-hidden="true" viewBox="0 0 40 40" className="size-10 shrink-0">
        <circle cx="20" cy="20" r="19" fill={light ? "#fff" : "var(--color-brand)"} />
        <circle cx="20" cy="20" r="12.5" fill="none" stroke="var(--color-mustard)" strokeWidth="3" />
        <path
          d="M20 11.5c-2.6 3.2-4 5.8-4 8.1a4 4 0 0 0 8 0c0-2.3-1.4-4.9-4-8.1Z"
          fill={light ? "var(--color-tomato)" : "#fff"}
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-brand"}`}>
          {brand.name}
        </span>
        <span className={`mt-1 text-sm font-bold ${light ? "text-white" : "text-tomato"}`}>{brand.tagline}</span>
      </span>
    </span>
  );
}
