'use client';

import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Terminal,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/lib/component-props';
import { ContentSDKFields } from './ContentSDK.props';

interface EnvVar {
  name: string;
  description: string;
  required: boolean;
  status: 'set' | 'missing' | 'default';
}

const ENV_VARIABLES: EnvVar[] = [
  {
    name: 'SITECORE_EDGE_URL',
    description: 'Sitecore Experience Edge endpoint URL',
    required: true,
    status: 'missing',
  },
  {
    name: 'SITECORE_EDGE_CONTEXT_ID',
    description: 'Context ID for Edge delivery',
    required: true,
    status: 'missing',
  },
  {
    name: 'SITECORE_SITE_NAME',
    description: 'Sitecore site name for multisite resolution',
    required: true,
    status: 'missing',
  },
  {
    name: 'GRAPH_QL_ENDPOINT',
    description: 'GraphQL introspection and query endpoint',
    required: false,
    status: 'missing',
  },
  {
    name: 'SITECORE_API_KEY',
    description: 'API key for authenticated requests',
    required: true,
    status: 'missing',
  },
  {
    name: 'DEFAULT_LANGUAGE',
    description: 'Default content language (e.g. en)',
    required: false,
    status: 'default',
  },
];

function StatusIcon({ status }: { status: EnvVar['status'] }) {
  switch (status) {
    case 'set':
      return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
    case 'missing':
      return <XCircle className="h-4 w-4 text-red-400" />;
    case 'default':
      return <AlertTriangle className="h-4 w-4 text-amber-500" />;
  }
}

function statusLabel(status: EnvVar['status']) {
  switch (status) {
    case 'set':
      return 'Configured';
    case 'missing':
      return 'Not set';
    case 'default':
      return 'Using default';
  }
}

interface ContentSDKComponentProps extends ComponentProps {
  fields: ContentSDKFields;
}

export default function ContentSDK({ fields }: ContentSDKComponentProps) {
  const [envVars, setEnvVars] = useState<EnvVar[]>(ENV_VARIABLES);
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const showDebug = fields?.showDebug?.value === 'true';

  // Simulate checking env vars on client (in real app, this would come from server props)
  useEffect(() => {
    const checkVars = ENV_VARIABLES.map((v) => {
      // In a real implementation, the server would pass down which vars are configured.
      // Here we simulate: SITECORE_SITE_NAME and DEFAULT_LANGUAGE are "set" for demo purposes.
      if (v.name === 'SITECORE_SITE_NAME') return { ...v, status: 'set' as const };
      if (v.name === 'DEFAULT_LANGUAGE') return { ...v, status: 'default' as const };
      return v;
    });
    setEnvVars(checkVars);
  }, []);

  const configuredCount = envVars.filter((v) => v.status === 'set').length;
  const requiredCount = envVars.filter((v) => v.required).length;
  const requiredConfigured = envVars.filter(
    (v) => v.required && v.status === 'set'
  ).length;
  const allRequiredSet = requiredConfigured === requiredCount;

  const envTemplate = envVars
    .map((v) => `# ${v.description}\n${v.name}=`)
    .join('\n\n');

  const handleCopyEnv = async () => {
    try {
      await navigator.clipboard.writeText(envTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <div
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8"
      data-component="ContentSDK"
    >
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1B2A4A] to-[#4A7C9B]">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#1B2A4A]">
                Content SDK Integration
              </h2>
              <p className="text-xs text-slate-500">
                Sitecore Content SDK for Next.js — Connection status and configuration
              </p>
            </div>
          </div>

          {/* Overall Status */}
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg px-4 py-3 text-sm',
              allRequiredSet
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            )}
          >
            {allRequiredSet ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-medium">
                  All required environment variables are configured.
                </span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">
                  {requiredConfigured}/{requiredCount} required variables configured.
                </span>
                <span className="text-amber-600">
                  Complete setup to enable content delivery.
                </span>
              </>
            )}
          </div>
        </div>

        {/* Environment Variables Table */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#1B2A4A]">
              Environment Configuration
            </h3>
            <span className="text-xs text-slate-500">
              {configuredCount}/{envVars.length} variables set
            </span>
          </div>

          <div className="rounded-lg border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Variable
                  </th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                    Description
                  </th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {envVars.map((v) => (
                  <tr
                    key={v.name}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-[#1B2A4A]">
                          {v.name}
                        </code>
                        {v.required && (
                          <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-500 uppercase">
                            Required
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500 hidden sm:table-cell">
                      {v.description}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <StatusIcon status={v.status} />
                        <span
                          className={cn(
                            'text-xs font-medium',
                            v.status === 'set' && 'text-emerald-600',
                            v.status === 'missing' && 'text-red-500',
                            v.status === 'default' && 'text-amber-600'
                          )}
                        >
                          {statusLabel(v.status)}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Debug Info (collapsible) */}
        {showDebug && (
          <div className="border-t border-slate-100 px-6 py-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-sm font-semibold text-[#1B2A4A]">
                Debug Information
              </span>
              {expanded ? (
                <ChevronUp className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {expanded && (
              <div className="mt-4 space-y-4">
                {/* .env Template */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-500">
                      .env.local Template
                    </span>
                    <button
                      onClick={handleCopyEnv}
                      className="inline-flex items-center gap-1 text-xs text-[#4A7C9B] hover:text-[#3a6a87] transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy template
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="rounded-lg bg-[#1B2A4A] p-4 text-xs text-white/80 overflow-x-auto font-mono leading-relaxed">
                    {envTemplate}
                  </pre>
                </div>

                {/* Runtime Info */}
                <div className="rounded-lg bg-slate-50 p-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Runtime
                  </h4>
                  <dl className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <dt className="text-slate-500">Framework</dt>
                      <dd className="font-medium text-[#1B2A4A]">Next.js 15 (App Router)</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">React</dt>
                      <dd className="font-medium text-[#1B2A4A]">19.x</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Content SDK</dt>
                      <dd className="font-medium text-[#1B2A4A]">@sitecore-content-sdk/nextjs</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Rendering</dt>
                      <dd className="font-medium text-[#1B2A4A]">Server Components + Client</dd>
                    </div>
                  </dl>
                </div>

                {/* Docs Link */}
                <a
                  href="https://doc.sitecore.com/xmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4A7C9B] hover:text-[#3a6a87] transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Sitecore XM Cloud Documentation
                </a>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Sitecore Content SDK v1.0 &mdash; B2B Manufacturing Template
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium',
              allRequiredSet
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-amber-50 text-amber-600'
            )}
          >
            <span
              className={cn(
                'h-1.5 w-1.5 rounded-full',
                allRequiredSet ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              )}
            />
            {allRequiredSet ? 'Connected' : 'Setup Required'}
          </span>
        </div>
      </div>
    </div>
  );
}
