'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { markdownToHtml, sanitizeHtml } from '@/lib/ai-markdown';
import { ComponentProps } from '@/lib/component-props';
import { AIContentSummaryFields } from './AIContentSummary.props';

const PLACEHOLDER_SUMMARY = `**Key Takeaways:**

- The servo drive system delivers **0.001mm positioning accuracy** with integrated safety functions, making it suitable for high-precision assembly operations.
- EtherCAT and PROFINET dual-protocol support enables seamless integration with existing automation infrastructure from major PLC vendors.
- Predictive maintenance algorithms reduce unplanned downtime by up to **35%** through continuous vibration and thermal monitoring.
- The IP67-rated enclosure allows installation directly on the production floor without additional protective housing.

**Recommended next steps:** Review the technical datasheet for detailed torque curves and compare with your current motion control specifications.`;

function ShimmerLine({ width }: { width: string }) {
  return (
    <div className="relative overflow-hidden rounded" style={{ width }}>
      <div className="h-3 bg-slate-100 rounded" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
      />
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-3 py-2">
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        >
          <Sparkles className="h-4 w-4 text-[#FF6B35]" />
        </motion.div>
        <span className="text-sm font-medium text-[#4A7C9B]">
          Analyzing content and generating summary...
        </span>
      </div>
      <ShimmerLine width="100%" />
      <ShimmerLine width="92%" />
      <ShimmerLine width="85%" />
      <ShimmerLine width="96%" />
      <ShimmerLine width="78%" />
      <ShimmerLine width="88%" />
      <ShimmerLine width="60%" />
    </div>
  );
}

interface AIContentSummaryComponentProps extends ComponentProps {
  fields: AIContentSummaryFields;
}

export default function AIContentSummary({
  fields,
}: AIContentSummaryComponentProps) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [copied, setCopied] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const summaryLength = fields?.summaryLength?.value || 'medium';

  const generateSummary = useCallback(async () => {
    setLoading(true);
    setSummary('');

    // Simulate AI generation time
    await new Promise((resolve) => setTimeout(resolve, 2200));

    let text = PLACEHOLDER_SUMMARY;
    if (summaryLength === 'short') {
      text = PLACEHOLDER_SUMMARY.split('\n').slice(0, 4).join('\n');
    } else if (summaryLength === 'long') {
      text =
        PLACEHOLDER_SUMMARY +
        '\n\n**Additional context:** This product line has been validated across 200+ manufacturing facilities globally, with mean time between failures (MTBF) exceeding 50,000 hours. Integration with existing SCADA systems typically requires 2-3 days of configuration.';
    }

    setSummary(text);
    setLoading(false);
  }, [summaryLength]);

  const handleRegenerate = async () => {
    setRegenerating(true);
    await generateSummary();
    setRegenerating(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  useEffect(() => {
    generateSummary();
  }, [generateSummary]);

  const renderedHtml = summary ? sanitizeHtml(markdownToHtml(summary)) : '';

  return (
    <div
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6"
      data-component="AIContentSummary"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          'relative overflow-hidden rounded-xl border bg-white shadow-sm',
          'border-slate-200'
        )}
      >
        {/* Accent top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A7C9B] via-[#FF6B35] to-[#4A7C9B]" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-3 text-left group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1B2A4A] to-[#4A7C9B]">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1B2A4A] flex items-center gap-2">
                AI Content Summary
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FF6B35]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#FF6B35]">
                  <Sparkles className="h-2.5 w-2.5" />
                  AI
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Auto-generated summary of the technical content below
              </p>
            </div>
            <span className="ml-2 text-slate-400 group-hover:text-slate-600 transition-colors">
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              disabled={loading || !summary}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                'text-slate-500 hover:text-slate-700 hover:bg-slate-100',
                'disabled:opacity-40 disabled:cursor-not-allowed'
              )}
              title="Copy summary"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </>
              )}
            </button>
            <button
              onClick={handleRegenerate}
              disabled={loading || regenerating}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                'border border-slate-200 text-slate-600 hover:bg-[#4A7C9B] hover:text-white hover:border-[#4A7C9B]',
                'disabled:opacity-40 disabled:cursor-not-allowed'
              )}
            >
              <RefreshCw
                className={cn('h-3.5 w-3.5', regenerating && 'animate-spin')}
              />
              Regenerate
            </button>
          </div>
        </div>

        {/* Collapsible Content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 py-4">
                {loading ? (
                  <LoadingState />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={cn(
                        'prose prose-sm max-w-none',
                        'prose-headings:text-[#1B2A4A] prose-headings:font-semibold',
                        'prose-strong:text-[#1B2A4A]',
                        'prose-a:text-[#4A7C9B] prose-a:no-underline hover:prose-a:underline',
                        'prose-li:text-slate-600',
                        'text-slate-600 leading-relaxed'
                      )}
                      dangerouslySetInnerHTML={{ __html: renderedHtml }}
                    />
                  </motion.div>
                )}
              </div>

              {/* Footer attribution */}
              <div className="flex items-center justify-between border-t border-slate-100 px-5 py-2.5 bg-slate-50/50">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-[#FF6B35]" />
                  <span className="text-[11px] text-slate-400 font-medium">
                    Powered by Sitecore AI
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[11px] text-slate-400">
                  Summary length: {summaryLength}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
