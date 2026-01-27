import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <span className="text-lg font-bold text-gray-900">ICanPitch</span>
            <p className="mt-2 text-sm text-gray-600">
              Free startup calculators, guides, and resources to help founders plan every funding stage.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/learn/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Calculator Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Tools
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://icanpitch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ICanPitch Calculators
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 ICanPitch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
