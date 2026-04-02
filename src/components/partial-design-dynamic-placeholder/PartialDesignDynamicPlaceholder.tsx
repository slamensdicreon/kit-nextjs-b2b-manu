'use client';

import { cn, isEditorActive } from '@/lib/utils';
import { PartialDesignDynamicPlaceholderProps } from './PartialDesignDynamicPlaceholder.props';

export default function PartialDesignDynamicPlaceholder({
  children,
  params,
  rendering,
}: PartialDesignDynamicPlaceholderProps) {
  const placeholderName = params?.placeholderName || params?.sig || 'dynamic-placeholder';
  const isEditing = isEditorActive();
  const hasChildren = Array.isArray(children)
    ? children.length > 0
    : children !== null && children !== undefined;

  return (
    <div
      className={cn(
        'partial-design-dynamic-placeholder w-full',
        isEditing && !hasChildren && 'min-h-[120px]'
      )}
      data-component="PartialDesignDynamicPlaceholder"
      data-placeholder-name={placeholderName}
      data-uid={rendering?.uid}
    >
      {hasChildren ? (
        <div className="w-full">{children}</div>
      ) : isEditing ? (
        <div
          className={cn(
            'flex min-h-[120px] items-center justify-center rounded-lg border-2 border-dashed',
            'border-[#4A7C9B]/30 bg-[#4A7C9B]/5'
          )}
        >
          <div className="text-center px-6 py-8">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#4A7C9B]/10">
              <svg
                className="h-6 w-6 text-[#4A7C9B]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#1B2A4A]">
              Dynamic Placeholder
            </p>
            <p className="mt-1 text-xs text-slate-500">
              <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px]">
                {placeholderName}
              </code>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Drag components here to populate this region
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
