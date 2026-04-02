import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-50">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8">
          The page you are looking for does not exist or has been moved. Please check the URL or
          navigate back to the homepage.
        </p>
        <Link href="/" className="btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
