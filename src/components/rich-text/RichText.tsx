import { cn } from '@/lib/utils';
import type { VariantProps } from '@/lib/component-props';
import type { RichTextFields } from './RichText.props';

const placeholderContent = `
<h2>Engineering Excellence Since 1985</h2>
<p>Our state-of-the-art manufacturing facilities combine decades of expertise with the latest in precision engineering technology. From prototype to full-scale production, we deliver components that meet the most demanding specifications.</p>
<h3>Our Capabilities</h3>
<ul>
  <li>5-axis CNC machining with tolerances to &plusmn;0.001&quot;</li>
  <li>Automated quality inspection using coordinate measuring machines</li>
  <li>ISO 9001:2015 and AS9100D certified processes</li>
  <li>Rapid prototyping with 48-hour turnaround</li>
</ul>
<p>Whether you need a single custom part or a production run of thousands, our team of engineers and machinists is ready to deliver precision-manufactured components that exceed your expectations.</p>
`;

const placeholderFields: RichTextFields = {
  content: { value: placeholderContent.trim() },
};

function resolveFields(props: VariantProps<RichTextFields>): RichTextFields {
  return {
    content: props.fields?.content ?? placeholderFields.content,
  };
}

export function Default(props: VariantProps<RichTextFields>) {
  const fields = resolveFields(props);

  if (!fields.content.value) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            'prose prose-lg max-w-none',
            'prose-headings:font-bold prose-headings:text-primary-900',
            'prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-3xl',
            'prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl',
            'prose-p:leading-relaxed prose-p:text-primary-700/80',
            'prose-li:text-primary-700/80 prose-li:marker:text-accent-500',
            'prose-a:text-secondary-600 prose-a:no-underline hover:prose-a:text-secondary-700 hover:prose-a:underline',
            'prose-strong:text-primary-900',
            'prose-blockquote:border-l-accent-500 prose-blockquote:text-primary-700',
            'prose-img:rounded-lg prose-img:shadow-card'
          )}
          dangerouslySetInnerHTML={{ __html: fields.content.value }}
        />
      </div>
    </section>
  );
}
