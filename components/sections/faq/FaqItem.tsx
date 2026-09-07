import { ChevronDownIcon } from '@/components/ui/icons';
import type { FaqItem as FaqItemData } from '@/lib/data/faq';

/**
 * Native <details>. Open/close animation and single-open behaviour are wired
 * imperatively by <Faq/> so the markup stays semantic and works without JS.
 */
export function FaqItem({ item }: { item: FaqItemData }) {
  return (
    <details className="group bg-surface dark:bg-[#242C3A] rounded-xl">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer">
        <div className="flex items-center gap-4 min-w-0">
          <img src={item.icon} alt="" width={29} height={29} aria-hidden="true" className="shrink-0" />
          <span className="font-semibold text-fg text-left">{item.question}</span>
        </div>
        <ChevronDownIcon className="chev shrink-0 text-fg-subtle transition-transform duration-200" />
      </summary>
      <div className="faq-collapse">
        <div className="px-5 pb-5 pl-[4.25rem]">
          <p className="text-fg-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </details>
  );
}
