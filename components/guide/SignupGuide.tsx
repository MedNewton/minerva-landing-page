import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ArrowRightIcon, CheckIcon } from '@/components/ui/icons';
import { GuideVideo } from '@/components/guide/GuideVideo';
import { APP_LINKS, SIGNUP_VIDEO } from '@/lib/guide';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/config';
import type { SignupPathCard } from '@/lib/i18n/types';

/** Shades of the accent for the four score pillars, strongest share first. */
const PILLAR_SHADES = [1, 0.72, 0.48, 0.28];

const SECTION_IDS = ['documenti', 'ateco', 'iscrizione-veloce', 'match', 'membri', 'azienda-o-collaboratore'] as const;

/**
 * "How to sign up" guide: a document-style page in the legal pages' frame
 * (site header, back link, footer). Every fact here mirrors the app's real
 * registration flow and matching algorithm; keep them in sync when those change.
 */
export function SignupGuide({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).howTo;
  const titles = [
    t.documents.title,
    t.ateco.title,
    t.quick.title,
    t.matching.title,
    t.members.title,
    t.paths.title,
  ];

  return (
    <>
      <Header />
      <main>
        <Container className="py-12 lg:py-16">
          <a
            href={`/${locale}`}
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors duration-150 mb-8"
          >
            ← {t.backHome}
          </a>

          <header className="max-w-3xl mb-10 lg:mb-14">
            <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
            <h1 className="h1 font-semibold text-fg mb-5">{t.title}</h1>
            <p className="body-lg text-fg-muted">{t.intro}</p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-labelledby="guide-toc" className="lg:sticky lg:top-24 lg:self-start">
              <p id="guide-toc" className="text-sm font-medium text-fg mb-3">
                {t.tocLabel}
              </p>
              <ol className="space-y-1 border-l border-border text-sm">
                {SECTION_IDS.map((id, i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-fg-muted hover:border-fg hover:text-fg transition-colors duration-150"
                    >
                      {titles[i]}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 max-w-3xl space-y-14 lg:space-y-16">
              {/* 1 · What you need */}
              <Section id={SECTION_IDS[0]} title={t.documents.title} intro={t.documents.intro}>
                <div className="grid gap-4">
                  {t.documents.groups.map((group, gi) => (
                    <div
                      key={group.title}
                      className={`rounded-xl border p-5 sm:p-6 ${gi === 2 ? 'border-dashed border-border-strong' : 'border-border bg-surface'}`}
                    >
                      <h3 className="text-base font-semibold text-fg mb-3">{group.title}</h3>
                      <CheckList items={group.items} muted={gi === 2} />
                    </div>
                  ))}
                </div>
              </Section>

              {/* 2 · ATECO */}
              <Section id={SECTION_IDS[1]} title={t.ateco.title} intro={t.ateco.body}>
                <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-fg-subtle mb-3">
                    {t.ateco.exampleLabel}
                  </p>
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-2xl sm:text-3xl">
                    <s className="text-fg-subtle decoration-1">{t.ateco.exampleFrom}</s>
                    <ArrowRightIcon size={20} className="text-accent shrink-0" />
                    <span className="font-medium text-fg">{t.ateco.exampleTo}</span>
                  </p>
                </div>
                <p className="body-md text-fg-muted mt-4">{t.ateco.where}</p>
              </Section>

              {/* 3 · Quick sign-up */}
              <Section id={SECTION_IDS[2]} title={t.quick.title} intro={t.quick.body}>
                <div className="border-l-2 border-accent pl-5">
                  <p className="body-md text-fg">{t.quick.caveat}</p>
                  <a
                    href={APP_LINKS.completeProfile}
                    className="group mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-accent hover:text-accent-strong transition-colors duration-150"
                  >
                    {t.quick.link}
                    <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Section>

              {/* 4 · Matching */}
              <Section id={SECTION_IDS[3]} title={t.matching.title} intro={t.matching.intro}>
                <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                  {/* One bar, four shares of the 0–100 score */}
                  <div className="flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full" aria-hidden="true">
                    {t.matching.pillars.map((p, i) => (
                      <span key={p.label} className="h-full bg-accent" style={{ width: `${p.weight}%`, opacity: PILLAR_SHADES[i] }} />
                    ))}
                  </div>
                  <ul className="mt-6 divide-y divide-border">
                    {t.matching.pillars.map((p, i) => (
                      <li key={p.label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-3 py-4 first:pt-0 last:pb-0">
                        <span
                          className="h-2.5 w-2.5 translate-y-[-1px] rounded-full bg-accent"
                          style={{ opacity: PILLAR_SHADES[i] }}
                          aria-hidden="true"
                        />
                        <span className="text-base font-semibold text-fg">{p.label}</span>
                        <span className="font-mono text-base text-fg">{p.weight}%</span>
                        <p className="col-start-2 col-span-2 mt-1 text-[0.9375rem] leading-relaxed text-fg-muted">{p.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="body-md text-fg-muted mt-4">{t.matching.note}</p>
              </Section>

              {/* 5 · Members */}
              <Section id={SECTION_IDS[4]} title={t.members.title} intro={t.members.body}>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {t.members.roles.map((role) => (
                    <li key={role.name} className="rounded-xl border border-border bg-surface p-4">
                      <p className="text-sm font-semibold text-fg mb-1">{role.name}</p>
                      <p className="text-sm leading-relaxed text-fg-muted">{role.body}</p>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 6 · Company vs collaborator */}
              <Section id={SECTION_IDS[5]} title={t.paths.title} intro={t.paths.intro}>
                <div className="grid gap-4 md:grid-cols-2">
                  <PathCard card={t.paths.company} labels={t.paths.labels} />
                  <PathCard card={t.paths.collaborator} labels={t.paths.labels} />
                </div>
                <GuideVideo videoUrl={SIGNUP_VIDEO[locale]?.url} poster={SIGNUP_VIDEO[locale]?.poster} title={t.paths.videoTitle} />
              </Section>

              {/* Closing CTA */}
              <section aria-labelledby="guide-cta" className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h2 id="guide-cta" className="h2 font-semibold text-fg mb-2">
                  {t.cta.title}
                </h2>
                <p className="body-md text-fg-muted mb-6">{t.cta.body}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={APP_LINKS.signup}
                    className="group inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full bg-fg text-bg text-[0.9375rem] font-semibold whitespace-nowrap hover:opacity-90 transition-opacity"
                  >
                    {t.cta.primary}
                    <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={APP_LINKS.login}
                    className="text-[0.9375rem] font-medium text-accent hover:text-accent-strong transition-colors duration-150"
                  >
                    {t.cta.secondary}
                  </a>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Section({ id, title, intro, children }: { id: string; title: string; intro: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2 id={`${id}-title`} className="h2 font-semibold text-fg mb-3">
        {title}
      </h2>
      <p className="body-md text-fg-muted mb-6">{intro}</p>
      {children}
    </section>
  );
}

function CheckList({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
          <CheckIcon size={16} className={`mt-[3px] shrink-0 ${muted ? 'text-fg-subtle' : 'text-accent'}`} />
          <span className={muted ? 'text-fg-muted' : 'text-fg'}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PathCard({
  card,
  labels,
}: {
  card: SignupPathCard;
  labels: { who: string; needs: string; after: string };
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-fg mb-4">{card.title}</h3>
      <dl className="space-y-5">
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-subtle mb-2">{labels.who}</dt>
          <dd className="text-[0.9375rem] leading-relaxed text-fg">{card.who}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-subtle mb-2">{labels.needs}</dt>
          <dd>
            <CheckList items={card.needs} />
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-fg-subtle mb-2">{labels.after}</dt>
          <dd>
            <CheckList items={card.after} />
          </dd>
        </div>
      </dl>
    </article>
  );
}
