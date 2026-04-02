'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, ArrowRight, Cpu, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/lib/component-props';
import {
  AIProductRecommendationFields,
  RecommendedProduct,
} from './AIProductRecommendation.props';

const PLACEHOLDER_PRODUCTS: RecommendedProduct[] = [
  {
    id: 'rec-001',
    name: 'ServoMax Pro 7500',
    category: 'Motion Control',
    description:
      'High-precision servo drive with integrated safety functions for automated assembly lines. Supports EtherCAT and PROFINET protocols.',
    image: '/images/products/servo-drive.jpg',
    matchScore: 97,
    sku: 'SM-PRO-7500',
    specs: ['7.5 kW rated power', '0.001mm positioning accuracy', 'IP67 rated'],
  },
  {
    id: 'rec-002',
    name: 'VisionLine 4K Inspector',
    category: 'Quality Inspection',
    description:
      'AI-powered machine vision system for real-time defect detection on high-speed production lines. 99.8% detection accuracy.',
    image: '/images/products/vision-system.jpg',
    matchScore: 93,
    sku: 'VL-4K-INS',
    specs: ['4K resolution @ 120fps', 'Deep learning inference', 'Multi-camera sync'],
  },
  {
    id: 'rec-003',
    name: 'FlexGrip Collaborative Arm',
    category: 'Robotics',
    description:
      'Six-axis collaborative robot arm designed for pick-and-place operations. Force-limited joints for safe human-robot collaboration.',
    image: '/images/products/cobot-arm.jpg',
    matchScore: 89,
    sku: 'FG-COBOT-6X',
    specs: ['10 kg payload', '1300mm reach', 'ISO 10218-1 certified'],
  },
  {
    id: 'rec-004',
    name: 'ThermalSense Edge Gateway',
    category: 'Industrial IoT',
    description:
      'Edge computing gateway with thermal monitoring for predictive maintenance. Aggregates sensor data from up to 256 nodes.',
    image: '/images/products/iot-gateway.jpg',
    matchScore: 85,
    sku: 'TS-EDGE-256',
    specs: ['256 sensor nodes', 'MQTT / OPC-UA', '-40 to 70 C operating range'],
  },
];

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 animate-pulse">
      <div className="h-40 rounded-lg bg-slate-100 mb-4" />
      <div className="h-4 rounded bg-slate-100 w-3/4 mb-2" />
      <div className="h-3 rounded bg-slate-100 w-1/2 mb-4" />
      <div className="space-y-2">
        <div className="h-3 rounded bg-slate-100 w-full" />
        <div className="h-3 rounded bg-slate-100 w-5/6" />
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-6 rounded-full bg-slate-100 w-20" />
        <div className="h-6 rounded-full bg-slate-100 w-24" />
      </div>
    </div>
  );
}

function MatchScoreBadge({ score }: { score: number }) {
  const color =
    score >= 95
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : score >= 90
        ? 'bg-blue-50 text-blue-700 border-blue-200'
        : 'bg-amber-50 text-amber-700 border-amber-200';

  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium', color)}>
      <Sparkles className="h-3 w-3" />
      {score}% match
    </span>
  );
}

interface AIProductRecommendationComponentProps extends ComponentProps {
  fields: AIProductRecommendationFields;
}

export default function AIProductRecommendation({
  fields,
  params,
}: AIProductRecommendationComponentProps) {
  const [products, setProducts] = useState<RecommendedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const title = fields?.title?.value || 'Recommended For You';
  const maxItems = parseInt(fields?.maxItems?.value || '4', 10);
  const context = fields?.context?.value || 'manufacturing-automation';
  const variant = params?.variant || 'default';

  const loadRecommendations = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate AI recommendation engine latency
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setProducts(PLACEHOLDER_PRODUCTS.slice(0, maxItems));
    } catch {
      setError('Unable to load recommendations. Showing popular products instead.');
      setProducts(PLACEHOLDER_PRODUCTS.slice(0, 2));
    } finally {
      setLoading(false);
    }
  }, [maxItems]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadRecommendations();
    setRefreshing(false);
  };

  useEffect(() => {
    loadRecommendations();
  }, [loadRecommendations]);

  return (
    <section
      className={cn(
        'relative py-12 md:py-16 lg:py-20',
        variant === 'dark' ? 'bg-[#1B2A4A] text-white' : 'bg-slate-50'
      )}
      data-component="AIProductRecommendation"
      data-context={context}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ai-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8F65]">
                <Cpu className="h-4 w-4 text-white" />
              </div>
              <span
                className={cn(
                  'text-xs font-semibold uppercase tracking-wider',
                  variant === 'dark' ? 'text-[#FF6B35]' : 'text-[#4A7C9B]'
                )}
              >
                AI-Powered Suggestions
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                'text-2xl font-bold tracking-tight sm:text-3xl',
                variant === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
              )}
            >
              {title}
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleRefresh}
            disabled={loading || refreshing}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
              'hover:bg-[#4A7C9B] hover:text-white hover:border-[#4A7C9B]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              variant === 'dark'
                ? 'border-white/20 text-white/80'
                : 'border-slate-300 text-slate-600'
            )}
          >
            <RefreshCw className={cn('h-4 w-4', refreshing && 'animate-spin')} />
            Refresh
          </motion.button>
        </div>

        {/* Error State */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: maxItems }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={cn(
                    'group relative flex flex-col rounded-xl border bg-white shadow-sm transition-all duration-300',
                    'hover:shadow-lg hover:-translate-y-1',
                    variant === 'dark'
                      ? 'border-white/10 bg-white/5 backdrop-blur-sm'
                      : 'border-slate-200'
                  )}
                >
                  {/* Product Image Placeholder */}
                  <div
                    className={cn(
                      'relative h-44 overflow-hidden rounded-t-xl',
                      variant === 'dark' ? 'bg-white/10' : 'bg-slate-100'
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Cpu
                          className={cn(
                            'mx-auto h-10 w-10 mb-2',
                            variant === 'dark' ? 'text-white/30' : 'text-slate-300'
                          )}
                        />
                        <span
                          className={cn(
                            'text-xs',
                            variant === 'dark' ? 'text-white/40' : 'text-slate-400'
                          )}
                        >
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <MatchScoreBadge score={product.matchScore} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <span
                      className={cn(
                        'mb-1 text-xs font-medium uppercase tracking-wider',
                        variant === 'dark' ? 'text-[#FF6B35]' : 'text-[#4A7C9B]'
                      )}
                    >
                      {product.category}
                    </span>
                    <h3
                      className={cn(
                        'mb-2 text-lg font-semibold leading-tight',
                        variant === 'dark' ? 'text-white' : 'text-[#1B2A4A]'
                      )}
                    >
                      {product.name}
                    </h3>
                    <p
                      className={cn(
                        'mb-4 text-sm leading-relaxed line-clamp-3',
                        variant === 'dark' ? 'text-white/70' : 'text-slate-600'
                      )}
                    >
                      {product.description}
                    </p>

                    {/* Specs Tags */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className={cn(
                            'rounded-full px-2 py-0.5 text-[11px] font-medium',
                            variant === 'dark'
                              ? 'bg-white/10 text-white/70'
                              : 'bg-slate-100 text-slate-600'
                          )}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100">
                      <span
                        className={cn(
                          'text-xs font-mono',
                          variant === 'dark' ? 'text-white/50' : 'text-slate-400'
                        )}
                      >
                        {product.sku}
                      </span>
                      <button
                        className={cn(
                          'inline-flex items-center gap-1 text-sm font-medium transition-colors',
                          'text-[#FF6B35] hover:text-[#e55a25]'
                        )}
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
        </div>

        {/* AI Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#FF6B35]" />
            <span className="text-xs font-medium text-slate-500">
              Powered by Sitecore AI
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
