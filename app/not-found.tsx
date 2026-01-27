import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-gray-200 mb-4">404</p>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/learn/"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300 hover:text-gray-900 transition-colors"
          >
            Calculator Guides
          </Link>
          <Link
            href="/blog/"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
