import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CheckIcon, MinusIcon } from '@/components/ui/icons';
import { COMPARISON_ROWS } from '@/lib/data/comparison';

const CELL = 'py-4 px-5 lg:px-6 align-top';

export function Comparison() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt border-y border-border">
      <Container>
        <div className="mb-12 lg:mb-16">
          <Eyebrow>Compared to alternatives</Eyebrow>
          <h2 className="h1 font-semibold text-fg">
            Compare how MINERVA helps companies to connect with compatible partners.
          </h2>
        </div>

        <div className="border border-border rounded-xl overflow-hidden bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full text-[0.9375rem]">
              <thead>
                <tr className="border-b border-border bg-surface-alt dark:bg-surface">
                  <th scope="col" className="text-left py-4 px-5 lg:px-6 font-semibold text-fg w-[34%]">
                    Capability
                  </th>
                  <th scope="col" className="text-left py-4 px-5 lg:px-6 font-semibold text-fg whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="/assets/logo-dark.svg" alt="" aria-hidden="true" className="h-5 w-auto" />
                      Minerva
                    </div>
                  </th>
                  <th scope="col" className="text-left py-4 px-5 lg:px-6 font-semibold text-fg whitespace-nowrap">
                    Traditional Business Discovery
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_ROWS.map((row) => {
                  const mono = row.mono ? ' font-mono' : '';
                  return (
                    <tr key={row.capability}>
                      <th scope="row" className="text-left py-4 px-5 lg:px-6 font-medium text-fg align-top">
                        {row.capability}
                      </th>
                      <td className={`${CELL}${mono} whitespace-nowrap`}>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckIcon className="text-success" />
                          {row.minerva}
                        </span>
                      </td>
                      <td className={`${CELL} text-fg-muted${mono} whitespace-nowrap`}>
                        {typeof row.traditional === 'string' ? (
                          row.traditional
                        ) : (
                          <span className="inline-flex items-center gap-1.5">
                            <MinusIcon className="text-fg-subtle" />
                            None
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
