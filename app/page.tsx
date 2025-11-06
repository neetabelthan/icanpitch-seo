import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { AuroraBackground } from "@/components/aurora-background";

export default function Home() {
  const calculators = [
    {
      name: "SAFE Calculator",
      slug: "safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-owne",
      description: "Calculate SAFE conversions and optimize equity dilution"
    },
    {
      name: "Burn Rate Calculator",
      slug: "burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-ef",
      description: "Plan your fundraising timeline and extend your runway"
    },
    {
      name: "Equity Split Calculator",
      slug: "equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-",
      description: "Create fair equity distributions for co-founders"
    },
    {
      name: "Option Pool Calculator",
      slug: "option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founde",
      description: "Size employee equity pools and minimize founder dilution"
    },
    {
      name: "Convertible Note Calculator",
      slug: "convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversio",
      description: "Understand convertible note conversion mechanics"
    },
    {
      name: "Vesting Calculator",
      slug: "vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-d",
      description: "Plan founder vesting schedules and protect against departures"
    },
    {
      name: "Pre/Post Money Calculator",
      slug: "pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotia",
      description: "Understand valuation mechanics and negotiate better terms"
    },
    {
      name: "409A Valuation Calculator",
      slug: "409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-ta",
      description: "Prepare employee options and comply with tax regulations"
    },
    {
      name: "Pro Rata Calculator",
      slug: "pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights",
      description: "Model future dilution and plan investor rights"
    },
    {
      name: "Exit Calculator",
      slug: "exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds",
      description: "Model exit scenarios and maximize founder proceeds"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <AuroraBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ICanPitch SEO Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive startup calculator guides and resources for founders at every stage
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <main className="container mx-auto px-4 py-12 md:py-16">

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculator Guides</h2>
            <p className="text-gray-600">Explore our comprehensive collection of startup calculator resources</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {calculators.map((calc) => (
              <Card key={calc.slug} className="hover:shadow-lg hover:border-blue-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">{calc.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{calc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="gradient" className="w-full" asChild>
                    <a href={`/learn/${calc.slug}/`}>
                      Learn More →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
