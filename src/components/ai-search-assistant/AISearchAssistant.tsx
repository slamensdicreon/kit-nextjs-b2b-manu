'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sparkles,
  X,
  Clock,
  ArrowRight,
  Lightbulb,
  MessageSquare,
  FileText,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { markdownToHtml, sanitizeHtml } from '@/lib/ai-markdown';
import { ComponentProps } from '@/lib/component-props';
import { AISearchAssistantFields, SearchResult } from './AISearchAssistant.props';

const DEFAULT_SUGGESTED_QUERIES = [
  'What automation solution fits my assembly line?',
  'Compare vision systems for food industry',
  'Best servo drives for high-speed packaging',
  'IoT gateway solutions for predictive maintenance',
];

const RECENT_SEARCHES = [
  'EtherCAT compatible servo drives',
  'IP67 rated sensors',
  'Collaborative robot safety standards',
];

const PLACEHOLDER_RESULTS: SearchResult[] = [
  {
    id: 'sr-001',
    title: 'ServoMax Pro 7500 — High-Precision Motion Control',
    description:
      'Our flagship servo drive delivers 0.001mm positioning accuracy with EtherCAT and PROFINET support. Ideal for automated assembly and packaging lines.',
    category: 'Products',
    url: '/products/servo-drives/servomax-pro-7500',
    relevance: 98,
  },
  {
    id: 'sr-002',
    title: 'Application Guide: Automating Assembly Line Operations',
    description:
      'Step-by-step technical guide covering servo selection, PLC integration, and safety compliance for automated assembly systems.',
    category: 'Resources',
    url: '/resources/guides/assembly-line-automation',
    relevance: 94,
  },
  {
    id: 'sr-003',
    title: 'Case Study: Automotive Tier-1 Supplier Achieves 99.7% Uptime',
    description:
      'Learn how a leading automotive parts manufacturer reduced downtime by 35% using our integrated motion control and predictive maintenance solution.',
    category: 'Case Studies',
    url: '/case-studies/automotive-tier1-uptime',
    relevance: 87,
  },
];

const AI_ANSWER = `Based on your query, here are my recommendations for **assembly line automation**:

For high-speed assembly operations, the **ServoMax Pro 7500** provides the precision and protocol support you need. It integrates directly with major PLC platforms via EtherCAT or PROFINET.

If your line includes quality inspection stages, pair it with the **VisionLine 4K Inspector** for real-time defect detection at up to 120 fps.

For collaborative pick-and-place stations, consider the **FlexGrip Collaborative Arm** which is ISO 10218-1 certified for safe human-robot interaction.`;

function NLPIndicator({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          className="flex items-center gap-1.5 overflow-hidden"
        >
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-1.5 w-1.5 rounded-full bg-[#FF6B35]"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <span className="whitespace-nowrap text-[11px] font-medium text-[#4A7C9B]">
            Understanding query...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface AISearchAssistantComponentProps extends ComponentProps {
  fields: AISearchAssistantFields;
}

export default function AISearchAssistant({
  fields,
}: AISearchAssistantComponentProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [aiAnswer, setAIAnswer] = useState('');
  const [processing, setProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const placeholder =
    fields?.placeholder?.value || 'Ask a question or search for products...';

  const suggestedQueries = fields?.suggestedQueries?.value
    ? fields.suggestedQueries.value.split('|').map((q) => q.trim())
    : DEFAULT_SUGGESTED_QUERIES;

  const handleSearch = useCallback(
    async (searchQuery?: string) => {
      const q = searchQuery || query;
      if (!q.trim()) return;

      setQuery(q);
      setSearching(true);
      setProcessing(true);
      setHasSearched(false);
      setAIAnswer('');

      // Simulate NLP processing
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setProcessing(false);

      // Simulate search results loading
      await new Promise((resolve) => setTimeout(resolve, 800));
      setResults(PLACEHOLDER_RESULTS);
      setHasSearched(true);

      // Simulate AI answer generation
      await new Promise((resolve) => setTimeout(resolve, 600));
      setAIAnswer(AI_ANSWER);
      setSearching(false);
    },
    [query]
  );

  const handleClear = () => {
    setQuery('');
    setHasSearched(false);
    setResults([]);
    setAIAnswer('');
    inputRef.current?.focus();
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderedAnswer = aiAnswer ? sanitizeHtml(markdownToHtml(aiAnswer)) : '';
  const showDropdown = focused && !hasSearched && query.length === 0;

  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#1B2A4A] to-[#243656]"
      data-component="AISearchAssistant"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#FF6B35]" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              AI-Enhanced Search
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-2">
            How can we help you today?
          </h2>
          <p className="text-sm text-white/60">
            Ask in natural language or search by product name, SKU, or specification
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div
            className={cn(
              'relative flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-lg transition-all',
              focused
                ? 'border-[#4A7C9B] ring-2 ring-[#4A7C9B]/20'
                : 'border-white/20'
            )}
          >
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-sm text-[#1B2A4A] placeholder:text-slate-400 outline-none"
            />
            <NLPIndicator active={processing} />
            {query && (
              <button
                onClick={handleClear}
                className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={() => handleSearch()}
              disabled={!query.trim() || searching}
              className={cn(
                'shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors',
                'bg-[#FF6B35] hover:bg-[#e55a25]',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              {searching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Search'
              )}
            </button>
          </div>

          {/* Suggestions Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-full mt-2 z-10 rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden"
              >
                {/* Suggested Queries */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-3.5 w-3.5 text-[#FF6B35]" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Suggested Questions
                    </span>
                  </div>
                  <div className="space-y-1">
                    {suggestedQueries.map((sq) => (
                      <button
                        key={sq}
                        onClick={() => {
                          setFocused(false);
                          handleSearch(sq);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 transition-colors group"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0 text-[#4A7C9B]" />
                        <span className="flex-1">{sq}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                <div className="border-t border-slate-100 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Recent Searches
                    </span>
                  </div>
                  <div className="space-y-1">
                    {RECENT_SEARCHES.map((rs) => (
                      <button
                        key={rs}
                        onClick={() => {
                          setFocused(false);
                          handleSearch(rs);
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors"
                      >
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        <span>{rs}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search Results Area */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 space-y-6"
            >
              {/* AI-Generated Answer */}
              {aiAnswer && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8F65]">
                      <Sparkles className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      AI Answer
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div
                    className={cn(
                      'prose prose-sm max-w-none',
                      'prose-p:text-white/80 prose-strong:text-white',
                      'prose-a:text-[#FF6B35] prose-a:no-underline hover:prose-a:underline'
                    )}
                    dangerouslySetInnerHTML={{ __html: renderedAnswer }}
                  />
                </motion.div>
              )}

              {/* Traditional Results */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white/70">
                    {results.length} results found
                  </h3>
                </div>
                <div className="space-y-3">
                  {results.map((result, index) => (
                    <motion.a
                      key={result.id}
                      href={result.url}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <FileText className="h-5 w-5 text-white/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF6B35]">
                            {result.category}
                          </span>
                          <span className="text-[11px] text-white/40">
                            {result.relevance}% relevant
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#FF6B35] transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 text-white/30 group-hover:text-white/60 transition-colors mt-2" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Sparkles className="h-3 w-3 text-[#FF6B35]" />
                  <span className="text-[11px] font-medium text-white/50">
                    Powered by Sitecore AI
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
