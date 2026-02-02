/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,

  async redirects() {
    return [
      // ============================================================
      // CITY-SPECIFIC BLOG REDIRECTS
      // Catch any old city patterns and redirect to existing pages
      // ============================================================

      // Burn rate calculator city pages - redirect old patterns
      // Pattern: /blog/burn-rate-calculator-{city}/ variations
      {
        source: '/blog/burn-rate-:city(austin|charlotte|dallas|houston|phoenix|portland|san-diego|washington-dc)/',
        destination: '/blog/burn-rate-calculator-new-york-city-startup-costs/',
        permanent: true,
      },

      // Safe calculator city pages - catch cities we don't have
      {
        source: '/blog/safe-:city(austin|charlotte|dallas|houston|phoenix|portland|san-diego|washington-dc|mumbai|tokyo|sydney|melbourne|vancouver)/',
        destination: '/blog/safe-calculator-silicon-valley-founders-guide/',
        permanent: true,
      },

      // ============================================================
      // LONG-FORM LEARN PAGE REDIRECTS
      // Redirect deleted programmatic SEO patterns to simplified guides
      // ============================================================

      // 409A calculator long-form variations → existing page
      {
        source: '/learn/409a-valuation-calculator-pre-seed-:rest*/',
        destination: '/learn/409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations/',
        permanent: true,
      },
      {
        source: '/learn/409a-valuation-calculator-seed-:rest*/',
        destination: '/learn/409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations/',
        permanent: true,
      },
      {
        source: '/learn/409a-valuation-calculator-series-a-:rest*/',
        destination: '/learn/409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations/',
        permanent: true,
      },

      // Safe calculator long-form variations → existing page
      {
        source: '/learn/safe-calculator-pre-seed-:rest*/',
        destination: '/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/',
        permanent: true,
      },
      {
        source: '/learn/safe-calculator-series-a-:rest*/',
        destination: '/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/',
        permanent: true,
      },
      {
        source: '/learn/safe-calculator-series-b-:rest*/',
        destination: '/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/',
        permanent: true,
      },

      // Burn rate calculator long-form variations → existing page
      {
        source: '/learn/burn-rate-calculator-pre-seed-:rest*/',
        destination: '/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/',
        permanent: true,
      },
      {
        source: '/learn/burn-rate-calculator-seed-:rest*/',
        destination: '/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/',
        permanent: true,
      },
      {
        source: '/learn/burn-rate-calculator-series-b-:rest*/',
        destination: '/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/',
        permanent: true,
      },

      // Exit calculator long-form variations → existing page
      {
        source: '/learn/exit-calculator-pre-seed-:rest*/',
        destination: '/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/',
        permanent: true,
      },
      {
        source: '/learn/exit-calculator-seed-:rest*/',
        destination: '/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/',
        permanent: true,
      },
      {
        source: '/learn/exit-calculator-series-a-:rest*/',
        destination: '/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/',
        permanent: true,
      },
      {
        source: '/learn/exit-calculator-series-b-:rest*/',
        destination: '/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/',
        permanent: true,
      },

      // Equity split calculator long-form variations → existing page
      {
        source: '/learn/equity-split-calculator-pre-seed-:rest*/',
        destination: '/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/',
        permanent: true,
      },
      {
        source: '/learn/equity-split-calculator-seed-:rest*/',
        destination: '/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/',
        permanent: true,
      },
      {
        source: '/learn/equity-split-calculator-series-a-:rest*/',
        destination: '/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/',
        permanent: true,
      },

      // Convertible note calculator long-form variations → existing page
      {
        source: '/learn/convertible-note-calculator-pre-seed-:rest*/',
        destination: '/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/',
        permanent: true,
      },
      {
        source: '/learn/convertible-note-calculator-series-a-:rest*/',
        destination: '/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/',
        permanent: true,
      },

      // Pro-rata calculator long-form variations → existing page
      {
        source: '/learn/pro-rata-calculator-pre-seed-:rest*/',
        destination: '/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/',
        permanent: true,
      },
      {
        source: '/learn/pro-rata-calculator-seed-:rest*/',
        destination: '/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/',
        permanent: true,
      },
      {
        source: '/learn/pro-rata-calculator-series-a-:rest*/',
        destination: '/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/',
        permanent: true,
      },

      // Option pool calculator long-form variations → existing page
      {
        source: '/learn/option-pool-calculator-seed-:rest*/',
        destination: '/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/',
        permanent: true,
      },
      {
        source: '/learn/option-pool-calculator-series-a-:rest*/',
        destination: '/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/',
        permanent: true,
      },
      {
        source: '/learn/option-pool-calculator-series-b-:rest*/',
        destination: '/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/',
        permanent: true,
      },

      // Vesting calculator long-form variations → existing page
      {
        source: '/learn/vesting-calculator-pre-seed-:rest*/',
        destination: '/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/',
        permanent: true,
      },
      {
        source: '/learn/vesting-calculator-series-a-:rest*/',
        destination: '/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/',
        permanent: true,
      },

      // Pre-post money calculator long-form variations → existing page
      {
        source: '/learn/pre-post-money-calculator-pre-seed-:rest*/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },
      {
        source: '/learn/pre-post-money-calculator-seed-:rest*/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },
      {
        source: '/learn/pre-post-money-calculator-series-b-:rest*/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },

      // ============================================================
      // SIMPLE CALCULATOR SLUG REDIRECTS
      // Redirect short calculator slugs to detailed learn pages
      // ============================================================
      {
        source: '/learn/safe-calculator/',
        destination: '/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/',
        permanent: true,
      },
      {
        source: '/learn/burn-rate-calculator/',
        destination: '/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/',
        permanent: true,
      },
      {
        source: '/learn/exit-calculator/',
        destination: '/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/',
        permanent: true,
      },
      {
        source: '/learn/equity-split-calculator/',
        destination: '/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/',
        permanent: true,
      },
      {
        source: '/learn/convertible-note-calculator/',
        destination: '/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/',
        permanent: true,
      },
      {
        source: '/learn/pro-rata-calculator/',
        destination: '/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/',
        permanent: true,
      },
      {
        source: '/learn/option-pool-calculator/',
        destination: '/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/',
        permanent: true,
      },
      {
        source: '/learn/vesting-calculator/',
        destination: '/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/',
        permanent: true,
      },
      {
        source: '/learn/pre-post-money-calculator/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },
      {
        source: '/learn/409a-valuation-calculator/',
        destination: '/learn/409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations/',
        permanent: true,
      },

      // ============================================================
      // OLD URL PATTERNS - Redirect to appropriate pages
      // ============================================================

      // Old calculator naming patterns (camelCase, different slugs)
      {
        source: '/preRevenueValuation-calculator/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },
      {
        source: '/safeVsConvertibleNote-calculator/',
        destination: '/blog/safe-vs-convertible-note-2024-comparison/',
        permanent: true,
      },
      {
        source: '/equity-calculator/',
        destination: '/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/',
        permanent: true,
      },
      {
        source: '/cap-table-calculator/',
        destination: '/learn/',
        permanent: true,
      },
      {
        source: '/calculators/',
        destination: '/learn/',
        permanent: true,
      },
      {
        source: '/startup-equity-dilution-calculator/',
        destination: '/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/',
        permanent: true,
      },
      {
        source: '/burn-rate-calculator/',
        destination: '/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/',
        permanent: true,
      },
      {
        source: '/pre-post-money-calculator/',
        destination: '/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/',
        permanent: true,
      },

      // Locale URLs
      {
        source: '/en-US/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-US/:path*/',
        destination: '/:path*/',
        permanent: true,
      },

      // ============================================================
      // GUIDES SECTION REDIRECTS
      // Redirect old /guides/ URLs to /learn/
      // ============================================================
      {
        source: '/guides/:path*/',
        destination: '/learn/',
        permanent: true,
      },

      // ============================================================
      // CATCH-ALL REDIRECTS FOR DELETED CITY PAGES
      // Any city-specific blog page not matching existing → hub page
      // ============================================================

      // Catch-all for any remaining burn-rate-calculator-{city} patterns
      {
        source: '/blog/burn-rate-calculator-:city/',
        destination: '/blog/burn-rate-guides/',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-redirect-fallback',
          },
        ],
      },

      // Catch-all for any remaining safe-calculator-{city} patterns
      {
        source: '/blog/safe-calculator-:city/',
        destination: '/blog/safe-calculator-guides/',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-redirect-fallback',
          },
        ],
      },

      // ============================================================
      // www subdomain handling
      // ============================================================
      {
        source: '/blog/',
        destination: '/blog/',
        permanent: false,
        has: [
          {
            type: 'host',
            value: 'www.learn.icanpitch.com',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
