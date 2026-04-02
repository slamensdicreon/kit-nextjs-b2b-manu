import { VariantProps } from '@/lib/component-props';
import { TeamMemberFields } from './TeamMember.props';
import { Linkedin } from 'lucide-react';

const defaultMembers = [
  {
    name: 'Robert Hartley',
    title: 'Chief Executive Officer',
    bio: '30+ years in industrial manufacturing. Previously led operations at GE Industrial and Siemens Automation.',
    initials: 'RH',
  },
  {
    name: 'Dr. Yuki Tanaka',
    title: 'Chief Technology Officer',
    bio: 'PhD in Robotics from MIT. Pioneer in AI-driven quality control systems with 15 patents.',
    initials: 'YT',
  },
  {
    name: 'David Müller',
    title: 'VP of Engineering',
    bio: '20 years designing precision tooling systems for aerospace and automotive manufacturing.',
    initials: 'DM',
  },
  {
    name: 'Priya Sharma',
    title: 'VP of Global Sales',
    bio: 'Built distribution networks across 50+ countries. Expert in B2B manufacturing relationships.',
    initials: 'PS',
  },
  {
    name: 'James O\'Brien',
    title: 'Director of Quality',
    bio: 'Six Sigma Black Belt. Led ISO certifications for multiple manufacturing facilities.',
    initials: 'JO',
  },
  {
    name: 'Maria Costa',
    title: 'Head of Customer Success',
    bio: '15 years ensuring manufacturing clients achieve maximum ROI from their equipment investments.',
    initials: 'MC',
  },
];

export function Default(props: VariantProps<TeamMemberFields>) {
  const member = defaultMembers[0];
  const title = props.fields?.sectionTitle?.value || 'Leadership';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="max-w-2xl mx-auto card p-8 text-center">
          <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-primary-700">{member.initials}</span>
          </div>
          <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
          <p className="text-accent-500 font-medium mb-3">{member.title}</p>
          <p className="text-slate-500">{member.bio}</p>
          <button className="mt-4 text-secondary-600 hover:text-secondary-700 transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Grid(props: VariantProps<TeamMemberFields>) {
  const title = props.fields?.sectionTitle?.value || 'Our Leadership Team';
  const subtitle =
    props.fields?.subtitle?.value ||
    'Experienced professionals driving innovation in manufacturing technology.';

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">{subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultMembers.map((member, i) => (
            <div key={i} className="card text-center p-8 group">
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <span className="text-xl font-bold text-primary-700">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-primary-900">{member.name}</h3>
              <p className="text-accent-500 font-medium text-sm mb-3">{member.title}</p>
              <p className="text-sm text-slate-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
