import { VariantProps } from '@/lib/component-props';
import { TimelineFields } from './Timeline.props';

const defaultEvents = [
  {
    year: '2001',
    title: 'Founded in Detroit',
    description:
      'Apex Manufacturing Solutions was founded with a mission to bring precision engineering to modern manufacturing.',
  },
  {
    year: '2005',
    title: 'First International Expansion',
    description:
      'Opened our first international office in Munich, Germany to serve the European automotive industry.',
  },
  {
    year: '2010',
    title: 'Automation Division Launch',
    description:
      'Launched our Industrial Automation division, introducing robotic systems and PLC controllers.',
  },
  {
    year: '2015',
    title: 'Quality Control Innovation',
    description:
      'Introduced AI-powered vision systems for real-time quality control, a first in the industry.',
  },
  {
    year: '2020',
    title: '500th Global Client',
    description:
      'Reached the milestone of 500 active clients across 50+ countries worldwide.',
  },
  {
    year: '2024',
    title: 'Next-Gen Platform Launch',
    description:
      'Released our next-generation integrated manufacturing platform with cloud connectivity and predictive analytics.',
  },
];

export function Default(props: VariantProps<TimelineFields>) {
  const title = props.fields?.sectionTitle?.value || 'Our Journey';
  const subtitle =
    props.fields?.subtitle?.value || 'Over two decades of innovation in manufacturing technology.';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">{subtitle}</p>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

          <div className="space-y-12">
            {defaultEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex items-start gap-8">
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-start">
                    <div className={isLeft ? 'text-right' : 'order-3'}>
                      {isLeft ? (
                        <>
                          <span className="inline-block badge-accent mb-2">{event.year}</span>
                          <h3 className="text-lg font-bold text-primary-900">{event.title}</h3>
                          <p className="text-slate-500 mt-1">{event.description}</p>
                        </>
                      ) : (
                        <div />
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-md z-10" />
                    </div>
                    <div className={isLeft ? 'order-3' : ''}>
                      {!isLeft ? (
                        <>
                          <span className="inline-block badge-accent mb-2">{event.year}</span>
                          <h3 className="text-lg font-bold text-primary-900">{event.title}</h3>
                          <p className="text-slate-500 mt-1">{event.description}</p>
                        </>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6 w-full">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-md z-10" />
                    </div>
                    <div className="pb-2">
                      <span className="inline-block badge-accent mb-2">{event.year}</span>
                      <h3 className="text-lg font-bold text-primary-900">{event.title}</h3>
                      <p className="text-slate-500 mt-1 text-sm">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
