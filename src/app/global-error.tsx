'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-surface-50">
          <div className="text-center max-w-lg px-4">
            <h1 className="text-4xl font-bold text-primary-900 mb-4">Something went wrong</h1>
            <p className="text-slate-500 mb-8">
              An unexpected error occurred. Please try again or contact support if the issue
              persists.
            </p>
            {error.digest && (
              <p className="text-xs text-slate-400 mb-4">Error ID: {error.digest}</p>
            )}
            <button onClick={() => reset()} className="btn-primary">
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
