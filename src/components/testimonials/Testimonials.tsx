'use client';

import { cn } from '@/lib/utils';
import { VariantProps } from '@/lib/component-props';
import { TestimonialsFields } from './Testimonials.props';

const defaultTestimonials = [
  {
    quote:
      'Apex Manufacturing Solutions transformed our production line with their automation systems. We saw a 40% increase in throughput within the first quarter.',
    authorName: 'Sarah Chen',
    authorTitle: 'VP of Operations',
    company: 'TechDrive Automotive',
  },
  {
    quote:
      'The precision tooling from Apex has been instrumental in maintaining our aerospace-grade quality standards. Their support team is world-class.',
    authorName: 'Marcus Johnson',
    authorTitle: 'Chief Engineer',
    company: 'AeroVault Industries',
  },
  {
    quote:
      'We evaluated multiple vendors and Apex stood out for both product quality and their commitment to understanding our unique manufacturing challenges.',
    authorName: 'Elena Rodriguez',
    authorTitle: 'Plant Manager',
    company: 'NovaTech Electronics',
  },
];

function resolveTestimonials(props: VariantProps<TestimonialsFields>) {
  if (props.fields?.testimonials?.length) {
    return props.fields.testimonials.map((t) => ({
      quote: t.quote?.value || '',
      authorName: t.authorName?.value || '',
      authorTitle: t.authorTitle?.value || '',
      company: t.company?.value || '',
    }));
  }
  return defaultTestimonials;
}

export function Default(props: VariantProps<TestimonialsFields>) {
  const testimonials = resolveTestimonials(props);
  const featured = testimonials[0];
  const title = props.fields?.title?.value || 'What Our Clients Say';

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 text-accent-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-primary-900 text-lg">{featured.authorName}</p>
            <p className="text-slate-500">
              {featured.authorTitle}, {featured.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Carousel(props: VariantProps<TestimonialsFields>) {
  const testimonials = resolveTestimonials(props);
  const title = props.fields?.title?.value || 'Client Testimonials';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[350px] md:w-[400px]">
              <div className="card h-full flex flex-col">
                <svg className="w-8 h-8 text-accent-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 italic flex-1 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-surface-200 pt-4">
                  <p className="font-semibold text-primary-900">{t.authorName}</p>
                  <p className="text-sm text-slate-500">
                    {t.authorTitle}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialGrid(props: VariantProps<TestimonialsFields>) {
  const testimonials = resolveTestimonials(props);
  const title = props.fields?.title?.value || 'Trusted by Industry Leaders';

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">
                    {t.authorName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-900">{t.authorName}</p>
                  <p className="text-sm text-slate-500">
                    {t.authorTitle}, {t.company}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
