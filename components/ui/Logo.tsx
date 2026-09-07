/** Wordmark + theme-aware logo mark (light/dark SVG swapped via the `.dark` class). */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 -ml-1 px-1 py-1 rounded ${className}`.trim()}>
      <img src="/assets/logo-light.svg" alt="" width={32} height={32} className="block dark:hidden" />
      <img src="/assets/logo-dark.svg" alt="" width={32} height={32} className="hidden dark:block" />
      <span className="font-semibold tracking-tight text-[1.0625rem]">Minerva</span>
    </a>
  );
}
