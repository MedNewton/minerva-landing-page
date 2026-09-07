import { Chip } from './Chip';

interface Props {
  tags: string[];
  /**
   * On mobile (≤1023px) the chips become two infinite marquee rows scrolling
   * in opposite directions; each row is duplicated for a seamless loop.
   */
  mobile: boolean;
  id?: string;
  className?: string;
}

export function TagCloud({ tags, mobile, id, className = '' }: Props) {
  if (!mobile) {
    return (
      <div id={id} className={className}>
        {tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    );
  }
  const rows = [tags.filter((_, i) => i % 2 === 0), tags.filter((_, i) => i % 2 === 1)];
  return (
    <div id={id} className={className}>
      {rows.map((row, r) => (
        <div key={r} className="sf-tag-row">
          <div className="sf-tag-track">
            {row.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
            {row.map((t) => (
              <Chip key={`dup-${t}`} hidden>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
