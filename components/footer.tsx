import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Guides
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/blog/safe-calculator-guides/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  SAFE Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/burn-rate-guides/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Burn Rate & Runway
                </Link>
              </li>
              <li>
                <Link href="/blog/equity-guides/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Equity & Vesting
                </Link>
              </li>
              <li>
                <Link href="/blog/exit-strategy-guides/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Exit & Pro-Rata
                </Link>
              </li>
              <li>
                <Link href="/blog/valuation-guides/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Valuations
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
                <a href="https://icanpitch.com/safe-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  SAFE Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/burn-rate-runway-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Burn Rate Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/co-founder-equity-split-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Equity Split Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/option-pool-impact-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Option Pool Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/convertible-note-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Convertible Note Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/vesting-schedule-cliff-explorer/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Vesting Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/pre-post-money-valuation-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pre/Post Money Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/409a-valuation-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  409A Valuation Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/pro-rata-rights-impact-calculator/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pro-Rata Calculator
                </a>
              </li>
              <li>
                <a href="https://icanpitch.com/startup-exit-visualizer/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Exit Calculator
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
