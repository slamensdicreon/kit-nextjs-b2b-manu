import { VariantProps } from '@/lib/component-props';
import { DownloadsFields } from './Downloads.props';
import { FileText, Download, BookOpen, FileSpreadsheet } from 'lucide-react';

const defaultDownloads = [
  {
    title: 'Product Catalog 2026',
    description: 'Complete catalog of industrial automation and precision tooling products.',
    category: 'Catalog',
    fileType: 'PDF',
    fileSize: '12.4 MB',
    icon: BookOpen,
  },
  {
    title: 'Robotic Systems Datasheet',
    description: 'Technical specifications for our robotic automation product line.',
    category: 'Datasheet',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    icon: FileText,
  },
  {
    title: 'Quality Control Solutions Whitepaper',
    description: 'In-depth analysis of modern quality control approaches in manufacturing.',
    category: 'Whitepaper',
    fileType: 'PDF',
    fileSize: '5.8 MB',
    icon: FileText,
  },
  {
    title: 'Integration Guide',
    description: 'Step-by-step guide for integrating Apex systems into existing production lines.',
    category: 'Guide',
    fileType: 'PDF',
    fileSize: '8.1 MB',
    icon: BookOpen,
  },
  {
    title: 'ROI Calculator',
    description: 'Spreadsheet tool to calculate return on investment for automation upgrades.',
    category: 'Tool',
    fileType: 'XLSX',
    fileSize: '1.5 MB',
    icon: FileSpreadsheet,
  },
];

export function Default(props: VariantProps<DownloadsFields>) {
  const title = props.fields?.title?.value || 'Resources & Downloads';
  const subtitle =
    props.fields?.subtitle?.value || 'Access technical documentation, datasheets, and tools.';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">{subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultDownloads.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card group cursor-pointer hover:border-secondary-500 border-2 border-transparent transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary-50 flex items-center justify-center shrink-0 group-hover:bg-secondary-100 transition-colors">
                    <Icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge-primary text-xs">{item.category}</span>
                      <span className="text-xs text-slate-400">
                        {item.fileType} · {item.fileSize}
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-secondary-600 text-sm font-medium group-hover:text-accent-500 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Table(props: VariantProps<DownloadsFields>) {
  const title = props.fields?.title?.value || 'Downloads';

  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-primary-900">
                <th className="py-3 px-4 font-semibold text-primary-900">Document</th>
                <th className="py-3 px-4 font-semibold text-primary-900">Category</th>
                <th className="py-3 px-4 font-semibold text-primary-900">Format</th>
                <th className="py-3 px-4 font-semibold text-primary-900">Size</th>
                <th className="py-3 px-4 font-semibold text-primary-900"></th>
              </tr>
            </thead>
            <tbody>
              {defaultDownloads.map((item, i) => (
                <tr key={i} className="border-b border-surface-200 hover:bg-surface-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-primary-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="badge-primary text-xs">{item.category}</span>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-600">{item.fileType}</td>
                  <td className="py-4 px-4 text-sm text-slate-600">{item.fileSize}</td>
                  <td className="py-4 px-4">
                    <button className="text-secondary-600 hover:text-accent-500 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
