const fs = require('fs');
const path = require('path');

const learnDir = path.join(__dirname, 'learn');
const appLearnDir = path.join(__dirname, 'app', 'learn');
const contentBlogDir = path.join(__dirname, 'content', 'blog');

// Get all subdirectories in learn/
const calculatorDirs = fs.readdirSync(learnDir).filter(file => {
  return fs.statSync(path.join(learnDir, file)).isDirectory();
});

// ─── Phase 3A: Expanded Calculator Content ──────────────────────────────────

const calculatorContent = {
  'safe-calculator': {
    section1Title: 'Understanding SAFE Agreements',
    section1Text: 'A SAFE (Simple Agreement for Future Equity) is one of the most popular instruments for early-stage fundraising. Understanding how SAFEs convert into equity at your next priced round is critical for founders who want to maintain control of their cap table.',
    section2Title: 'How SAFE Conversion Works',
    section2Text: 'When a priced round occurs, your SAFE converts based on either the valuation cap or the discount rate, whichever gives the investor a better price. Our calculator models these scenarios so you can see exactly how much dilution to expect.',
    steps: [
      'Enter your SAFE terms including valuation cap and discount rate',
      'Set your expected Series A valuation and round size',
      'Review the conversion scenarios and resulting ownership percentages',
      'Compare different negotiation outcomes side by side'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are about to sign a SAFE and want to understand dilution at different future valuations',
      'You have multiple SAFEs outstanding and need to model how they stack at conversion',
      'You are preparing for a priced round and want to preview your post-conversion cap table',
      'You want to compare the impact of different valuation caps or discount rates before negotiating'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'SAFE conversion hinges on two numbers: the valuation cap and the discount rate. The conversion price is the lower of (valuation cap / fully diluted shares) or (price per share * (1 - discount rate)). Post-money SAFEs fix the denominator at the time of signing, making dilution predictable. Pre-money SAFEs leave the denominator open until the priced round, which can surprise founders if they raise additional SAFEs. Our calculator models both structures and shows the effective price per share, the number of shares issued, and the resulting ownership percentages for founders and investors.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Ignoring how multiple SAFEs stack: Each SAFE dilutes founders independently, and the cumulative effect is often larger than expected',
      'Confusing pre-money and post-money SAFEs: Post-money SAFEs include the option pool and all other SAFEs in the denominator, which changes the math significantly',
      'Setting the valuation cap too low to close quickly: A low cap means more dilution at conversion, and you cannot renegotiate after signing',
      'Forgetting that SAFEs do not have maturity dates: Unlike convertible notes, SAFEs only convert at a priced round, which means investors wait indefinitely'
    ],
    tips: [
      'Model at least three scenarios: best case, expected case, and downside case for your Series A valuation',
      'Always calculate cumulative dilution if you have more than one SAFE outstanding',
      'Ask investors whether they expect pro-rata rights in the next round before signing',
    ],
  },
  'burn-rate-calculator': {
    section1Title: 'Understanding Startup Burn Rate',
    section1Text: 'Burn rate measures how quickly your startup spends cash each month. Knowing your burn rate and runway helps you plan fundraising timing and make better decisions about hiring, marketing spend, and product development.',
    section2Title: 'Calculating Your Runway',
    section2Text: 'Your runway is your remaining cash divided by your monthly burn rate. Our calculator helps you model different spending scenarios and understand exactly when you need to raise your next round.',
    steps: [
      'Enter your current cash balance and monthly expenses',
      'Adjust spending categories to model different scenarios',
      'See your projected runway in months',
      'Plan your fundraising timeline based on runway projections'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You just closed a round and want to set a monthly budget that preserves at least 18 months of runway',
      'You are deciding whether to make a new hire and need to see the runway impact',
      'Your board is asking for a monthly financial update and you want clean numbers',
      'You are approaching fundraising and need to time your outreach based on remaining runway'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Gross burn rate is your total monthly expenses before any revenue. Net burn rate subtracts monthly recurring revenue from gross burn: Net Burn = Gross Burn - MRR. Runway equals cash on hand divided by net burn rate. The burn multiple measures efficiency: Burn Multiple = Net Burn / Net New ARR. A burn multiple below 1.5x is excellent, 1.5x-2.5x is good, and above 2.5x signals inefficiency. Our calculator tracks all three metrics and projects your cash balance month by month.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Using gross burn when you should use net burn: If you have revenue, net burn gives a more accurate runway picture',
      'Not accounting for lumpy expenses: Annual payments, tax bills, and equipment purchases can spike your monthly burn',
      'Starting fundraising with less than 6 months of runway: Most rounds take 3-6 months to close, so start early',
      'Cutting costs too aggressively and stalling growth: Investors want capital-efficient growth, not zero spending'
    ],
    tips: [
      'Recalculate your burn rate on the first of every month using actual bank statements, not projections',
      'Build a buffer of 2-3 months extra runway beyond your fundraising timeline',
      'Track your burn multiple alongside raw burn to show investors you spend efficiently',
    ],
  },
  'equity-split-calculator': {
    section1Title: 'Co-Founder Equity Allocation',
    section1Text: 'Splitting equity fairly among co-founders is one of the most important early decisions for any startup. A well-structured equity split considers each founder\'s contributions, commitment level, and the value they bring to the company.',
    section2Title: 'Factors That Influence Equity Splits',
    section2Text: 'Beyond the initial idea, equity splits should account for who is working full-time, who brought the technical expertise, who has industry connections, and who is putting in capital. Our calculator helps you weigh these factors objectively.',
    steps: [
      'Rate each co-founder\'s contributions across key dimensions',
      'Adjust weightings based on what matters most for your startup',
      'Review the suggested equity split percentages',
      'Model vesting schedules to protect all co-founders'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are forming a new company with one or more co-founders and need to agree on ownership',
      'You are bringing on a late co-founder and need to determine a fair share',
      'You want a data-driven framework to resolve a disagreement about equity distribution',
      'You are a solo founder considering giving equity to an early contributor and want to benchmark fairness'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Our calculator uses a weighted contribution model. Each co-founder is scored across dimensions like idea generation, domain expertise, technical skills, business development, capital contribution, time commitment, and opportunity cost. Each dimension carries a configurable weight, and the final split is proportional to each founder\'s total weighted score. The formula is: Founder Equity % = (Founder Score / Total All Scores) x 100. We recommend pairing any split with a standard 4-year vesting schedule and 1-year cliff to protect all parties.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Defaulting to 50/50 because it feels fair: Equal splits ignore real differences in contribution and often lead to resentment',
      'Not using vesting: Without vesting, a co-founder who leaves after 3 months keeps their full share',
      'Splitting equity before defining roles: Make sure each founder\'s expected contribution is clear before assigning percentages',
      'Giving away too much equity to advisors early: Advisors typically receive 0.25%-1.0%, not co-founder-level stakes'
    ],
    tips: [
      'Have the equity conversation early, ideally before incorporating, and put the agreement in writing',
      'Use a 4-year vesting schedule with a 1-year cliff for all founders, including yourself',
      'Revisit the split if roles or commitment levels change significantly in the first year',
    ],
  },
  'option-pool-calculator': {
    section1Title: 'Setting Up Your Option Pool',
    section1Text: 'An employee option pool is essential for attracting top talent to your startup. The size of your option pool directly affects founder dilution, so understanding the tradeoffs before negotiating with investors is critical.',
    section2Title: 'Option Pool Impact on Valuation',
    section2Text: 'Investors typically require the option pool to be created from pre-money valuation, increasing founder dilution. Our calculator shows you exactly how different pool sizes affect your ownership stake.',
    steps: [
      'Set your pre-money valuation and round size',
      'Adjust the option pool percentage to see dilution impact',
      'Compare pre-money vs post-money option pool creation',
      'Plan your hiring budget against available options'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'An investor\'s term sheet specifies an option pool size and you want to understand the dilution impact',
      'You are planning hires for the next 12-18 months and need to size your pool accordingly',
      'You want to compare the founder dilution difference between a 10%, 15%, and 20% pool',
      'You are granting options to a new hire and want to check how much of the pool remains'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'The option pool shuffle is a well-known negotiation tactic: investors ask for the pool to be created from pre-money valuation, which means founders bear 100% of the dilution. The math: Effective Pre-Money = Stated Pre-Money - Option Pool Value. So a $10M pre-money with a 20% option pool on $2M raised means founders effectively get a $8M pre-money valuation. Our calculator shows both the stated and effective pre-money, along with founder ownership before and after the pool is created.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Accepting a larger pool than you need: If you only need 12% for planned hires, negotiate down from the standard 20% ask',
      'Not mapping the pool to a hiring plan: Show investors exactly which roles and grant sizes justify the pool size',
      'Ignoring the pre-money vs post-money distinction: Where the pool comes from changes your effective valuation significantly',
      'Granting too many options to early hires: Senior hires at seed stage should receive 0.5%-2%, not 5%+'
    ],
    tips: [
      'Build a hiring plan spreadsheet with role, timing, and grant size to justify your proposed pool',
      'Negotiate the pool size down if you have already made key hires before the round',
      'Consider a smaller pool with a plan to refresh at the next round rather than over-allocating now',
    ],
  },
  'convertible-note-calculator': {
    section1Title: 'How Convertible Notes Work',
    section1Text: 'Convertible notes are debt instruments that convert into equity at a future priced round. They include terms like interest rate, valuation cap, and discount that determine the conversion price your investors receive.',
    section2Title: 'Modeling Note Conversion',
    section2Text: 'When your Series A closes, outstanding convertible notes convert based on their terms. Our calculator helps you model exactly how much equity note holders will receive and how that affects founder ownership.',
    steps: [
      'Enter your note terms: principal, interest rate, cap, and discount',
      'Set the expected Series A valuation and timing',
      'See the converted equity and resulting cap table',
      'Compare multiple notes with different terms'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are raising on a convertible note and want to model conversion at different Series A prices',
      'You have outstanding notes from a previous round and need to see their impact on your next cap table',
      'You want to compare the dilution difference between a convertible note and a SAFE',
      'An investor is proposing specific note terms and you want to understand the long-term cost'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Convertible notes accrue interest over time, increasing the amount that converts. The conversion amount equals Principal x (1 + Interest Rate x Time in Years). The conversion price is the lower of (Valuation Cap / Fully Diluted Shares) or (Series A Price x (1 - Discount)). Shares issued equal the conversion amount divided by the conversion price. Unlike SAFEs, notes have a maturity date at which point the investor can demand repayment or negotiate new terms. Our calculator models the interest accrual, both conversion price scenarios, and the resulting share issuance.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Forgetting to account for accrued interest: On a 2-year note at 8%, the conversion amount is 16% higher than the principal',
      'Ignoring the maturity date: If you haven\'t raised a priced round by maturity, the note holder can demand repayment',
      'Stacking notes with different caps: Multiple notes at different caps create complex conversion waterfalls',
      'Not understanding how the discount interacts with the cap: The investor gets whichever is more favorable'
    ],
    tips: [
      'Negotiate a longer maturity date (24+ months) to give yourself time to reach a priced round',
      'Track accrued interest monthly so you are never surprised at conversion time',
      'If choosing between a SAFE and a note, understand that notes create legal debt obligations that SAFEs do not',
    ],
  },
  'vesting-calculator': {
    section1Title: 'Vesting Schedules Explained',
    section1Text: 'Vesting schedules ensure that founders and employees earn their equity over time. The standard four-year schedule with a one-year cliff protects the company while rewarding long-term commitment.',
    section2Title: 'Customizing Your Vesting Terms',
    section2Text: 'While the 4-year vest with 1-year cliff is standard, many startups customize terms for different roles. Our calculator lets you explore how different vesting schedules affect equity distribution over time.',
    steps: [
      'Set the total equity grant and vesting period',
      'Configure cliff period and vesting frequency',
      'View the vesting timeline month by month',
      'Model acceleration triggers for M&A scenarios'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are setting up founder vesting as part of your incorporation documents',
      'You are making an offer to a key hire and need to explain their vesting timeline',
      'You want to model what happens to unvested shares if a co-founder leaves at various points',
      'You are negotiating acceleration clauses for an acquisition scenario and need to show the impact'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Standard 4-year vesting with a 1-year cliff: 0% vests during the first year, 25% vests at the 1-year mark (cliff), then 1/48th of the total grant vests each month after that. Shares vested at month M (where M is 12 or more) equals Total Grant x (M / 48). Single-trigger acceleration vests all unvested shares upon acquisition. Double-trigger acceleration requires both acquisition and termination. Our calculator models all three scenarios and shows vested vs unvested equity at any point in the schedule.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Not vesting founder shares: Investors will require vesting anyway, so set it up proactively on your terms',
      'Using a cliff for employees longer than 1 year: Longer cliffs increase retention risk and are seen as unfair',
      'Granting acceleration without understanding the cost: Single-trigger acceleration can give away significant equity in an acquisition',
      'Forgetting to account for early exercise (83(b) elections): If employees early-exercise, they start the capital gains clock early'
    ],
    tips: [
      'File an 83(b) election within 30 days of receiving restricted stock to start the capital gains clock',
      'Consider double-trigger acceleration for founders to protect the acquiring company while still protecting yourself',
      'Document your vesting terms in your stock plan and individual grant agreements, not just verbal agreements',
    ],
  },
  'pre-post-money-calculator': {
    section1Title: 'Pre-Money vs Post-Money Valuation',
    section1Text: 'Understanding the difference between pre-money and post-money valuation is fundamental to fundraising. Pre-money is your company\'s value before investment; post-money includes the new capital.',
    section2Title: 'How Valuation Affects Ownership',
    section2Text: 'The relationship between pre-money valuation, investment amount, and post-money valuation directly determines what percentage of your company investors will own. Our calculator makes this math transparent.',
    steps: [
      'Enter your pre-money valuation and investment amount',
      'See the resulting post-money valuation and investor ownership',
      'Model multiple rounds to understand cumulative dilution',
      'Compare different valuation scenarios side by side'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You received a term sheet and want to understand what the proposed valuation means for your ownership',
      'You are setting a valuation cap for a SAFE or convertible note and want to model the outcome',
      'You want to plan multiple rounds of fundraising and see cumulative dilution over time',
      'You are comparing two term sheets with different valuations and investment amounts'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Post-Money Valuation = Pre-Money Valuation + Investment Amount. Investor Ownership % = Investment Amount / Post-Money Valuation. Founder Ownership % = Pre-Money Valuation / Post-Money Valuation. Price Per Share = Pre-Money Valuation / Pre-Money Shares Outstanding. For multi-round modeling, each subsequent round uses the previous post-money as the starting point for new dilution. Our calculator chains rounds together and shows the waterfall effect on founder ownership.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Confusing pre-money and post-money in conversations: Always clarify which one you are discussing to avoid misunderstandings',
      'Ignoring the option pool in valuation calculations: The option pool comes from pre-money, reducing your effective valuation',
      'Optimizing for valuation over terms: A higher valuation with punishing liquidation preferences can be worse than a lower clean deal',
      'Not modeling multiple rounds: The dilution from one round looks fine, but cumulative dilution across 3-4 rounds can leave founders with surprisingly little'
    ],
    tips: [
      'Always model at least 3 rounds ahead when evaluating a term sheet',
      'Ask investors to specify whether their valuation is pre-money or post-money, and whether it includes the option pool',
      'Use our calculator to compare scenarios where you raise smaller amounts at lower valuations vs larger amounts at higher valuations',
    ],
  },
  '409a-valuation-calculator': {
    section1Title: 'What Is a 409A Valuation?',
    section1Text: 'A 409A valuation determines the fair market value of your company\'s common stock for the purpose of granting stock options. Getting this right is essential for tax compliance and protecting your employees.',
    section2Title: 'When You Need a 409A',
    section2Text: 'You need a new 409A valuation before granting options, after a material event like a funding round, or at least once every 12 months. Our calculator helps you estimate your 409A value based on key inputs.',
    steps: [
      'Enter your most recent funding round details',
      'Adjust for preferred stock rights and liquidation preferences',
      'Review the estimated common stock value',
      'Understand the discount factors applied'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are about to grant stock options and need to set the exercise price at or above fair market value',
      'You just closed a funding round and need to estimate your new 409A before the formal appraisal',
      'You want to understand why your common stock is worth less than your preferred stock price',
      'You are budgeting for a formal 409A appraisal and want to preview the likely result'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'The 409A value of common stock is typically 25%-35% of the preferred stock price for early-stage companies. This discount reflects the lack of liquidation preferences, participation rights, and anti-dilution protections that preferred stockholders enjoy. The calculation uses methods like the Option Pricing Model (OPM) or Probability-Weighted Expected Return Method (PWERM). Key inputs include most recent preferred price, time to liquidity event, volatility (typically 60%-80% for startups), and the rights differential between preferred and common. Our calculator provides a range estimate based on these inputs.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Granting options without a current 409A: If the IRS determines options were granted below FMV, employees face a 20% penalty tax plus interest',
      'Using a stale 409A after a material event: A new funding round, acquisition offer, or major revenue milestone invalidates your existing 409A',
      'Setting the exercise price above the 409A to be safe: This reduces the option value for employees without providing additional tax benefit',
      'Not budgeting for regular 409A updates: Plan for annual updates at $2K-$10K each, depending on provider'
    ],
    tips: [
      'Get your first 409A before granting any options, even if you plan to use a low-cost provider',
      'Time your 409A just before a batch of option grants to minimize the gap between valuation and grant dates',
      'Keep records of the methodology and assumptions used in each 409A in case of an audit',
    ],
  },
  'pro-rata-calculator': {
    section1Title: 'Understanding Pro Rata Rights',
    section1Text: 'Pro rata rights allow existing investors to maintain their ownership percentage by investing in future rounds. Understanding how pro rata participation affects your cap table helps you plan dilution across multiple rounds.',
    section2Title: 'Impact on Future Fundraising',
    section2Text: 'When investors exercise pro rata rights, it reduces the amount of equity available to new investors. Our calculator shows how pro rata participation changes the dynamics of your next round.',
    steps: [
      'Enter your current cap table and investor ownership',
      'Set the terms of your upcoming round',
      'Toggle pro rata participation for each investor',
      'See how ownership percentages shift with and without pro rata'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You are planning your next round and need to know how much room is left for new investors after pro-rata',
      'An investor is asking for super pro-rata rights and you want to model the dilution impact',
      'You want to understand how pro-rata participation affects your fundraising dynamics across rounds',
      'You are negotiating a term sheet and need to decide whether to grant pro-rata rights to seed investors'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Pro-rata allocation for each investor equals their current ownership percentage multiplied by the new round size: Pro-Rata Amount = Current Ownership % x New Round Size. If an investor owns 10% and the new round is $5M, their pro-rata allocation is $500K. Super pro-rata means investing more than their proportional share. The remaining allocation (New Round Size - Total Pro-Rata Exercised) is available for new investors. Our calculator models each existing investor\'s pro-rata rights, their participation decisions, and the resulting cap table.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Not checking if existing investors plan to exercise: If they all exercise pro-rata, there may be little room for a new lead investor',
      'Granting pro-rata rights to too many early investors: Angel investors with pro-rata can complicate larger rounds',
      'Confusing pro-rata rights with anti-dilution protection: Pro-rata gives the right to invest more, anti-dilution adjusts the conversion price',
      'Ignoring the signaling risk: If an investor with pro-rata rights does not exercise, new investors may question why'
    ],
    tips: [
      'Map out who has pro-rata rights before opening your next round so you know the available allocation',
      'Consider offering major information rights alongside pro-rata to keep investors engaged',
      'Use our calculator to run scenarios where different combinations of investors exercise or waive their pro-rata',
    ],
  },
  'exit-calculator': {
    section1Title: 'Modeling Startup Exit Scenarios',
    section1Text: 'Whether you\'re planning for an acquisition or IPO, understanding how exit proceeds are distributed among shareholders is critical. Liquidation preferences, participation rights, and cap table structure all affect what founders actually receive.',
    section2Title: 'Liquidation Preferences and Waterfall Analysis',
    section2Text: 'Preferred stock holders typically get paid first in an exit. Our calculator models the full waterfall distribution so you can see exactly what each shareholder receives at different exit valuations.',
    steps: [
      'Enter your cap table with preferred stock terms',
      'Set liquidation preferences and participation caps',
      'Model different exit valuations to see payout ranges',
      'Compare founder proceeds across exit scenarios'
    ],
    whenToUseTitle: 'When to Use This Calculator',
    whenToUseItems: [
      'You received an acquisition offer and want to calculate what founders and employees actually take home',
      'You are negotiating liquidation preferences in a term sheet and want to see the downstream impact',
      'You want to understand at what exit valuation founders start to benefit more than investors',
      'You are modeling different exit scenarios for your board or co-founders'
    ],
    formulasTitle: 'Key Metrics and Formulas',
    formulasText: 'Liquidation preference waterfall: First, preferred stockholders receive their liquidation preference (typically 1x their investment). If participating preferred, they also share in the remaining proceeds pro-rata with common stockholders. The breakeven exit valuation is the point where converting to common stock yields more than taking the preference. Breakeven = Liquidation Preference / (1 - Investor Ownership %). For non-participating preferred, investors choose the higher of their preference or their pro-rata share. Our calculator models both structures and shows founder proceeds at each exit valuation.',
    mistakesTitle: 'Common Mistakes to Avoid',
    mistakesItems: [
      'Ignoring liquidation preferences when evaluating an acquisition offer: Founders often overestimate their payout at moderate exit values',
      'Not modeling participating vs non-participating preferred: Participating preferred can take a much larger share of exit proceeds',
      'Forgetting about multiple rounds of preferences stacking: Each round\'s preference is paid before common stockholders see anything',
      'Not accounting for escrow holdbacks: Acquirers typically hold back 10-20% for indemnification claims'
    ],
    tips: [
      'Always model exits at 1x, 3x, 5x, and 10x your total raised to understand the full range of outcomes',
      'Negotiate non-participating preferred whenever possible to keep more upside for founders and employees',
      'Use our calculator before accepting any term sheet to understand the exit implications of proposed terms',
    ],
  }
};

// Mapping from metadata calculator_name to actual icanpitch.com slugs
const calculatorSlugMap = {
  'safe-calculator': 'safe-calculator',
  'convertible-note-calculator': 'convertible-note-calculator',
  'burn-rate-calculator': 'burn-rate-runway-calculator',
  '409a-valuation-calculator': '409a-valuation-calculator',
  'pre-post-money-calculator': 'pre-post-money-valuation-calculator',
  'equity-split-calculator': 'co-founder-equity-split-calculator',
  'option-pool-calculator': 'option-pool-impact-calculator',
  'pro-rata-calculator': 'pro-rata-rights-impact-calculator',
  'vesting-calculator': 'vesting-schedule-cliff-explorer',
  'exit-calculator': 'startup-exit-visualizer',
};

// ─── Phase 3A: Find Related Blog Posts ──────────────────────────────────────

function findRelatedBlogPosts(calculatorName, limit = 5) {
  if (!fs.existsSync(contentBlogDir)) return [];
  const blogDirs = fs.readdirSync(contentBlogDir).filter(f => {
    try { return fs.statSync(path.join(contentBlogDir, f)).isDirectory(); } catch { return false; }
  });

  const matches = [];
  blogDirs.forEach(dir => {
    const metaPath = path.join(contentBlogDir, dir, 'metadata.json');
    if (!fs.existsSync(metaPath)) return;
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    const text = [meta.slug || dir, ...(meta.tags || []), ...(meta.categories || [])].join(' ').toLowerCase();
    const calcKey = calculatorName.replace(/-/g, ' ');

    let score = 0;
    if (text.includes(calcKey)) score += 10;
    // Match on key terms from calculator name
    calculatorName.split('-').filter(w => w !== 'calculator').forEach(word => {
      if (text.includes(word)) score += 3;
    });

    if (score > 0) {
      matches.push({ slug: meta.slug || dir, title: meta.title, score });
    }
  });

  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// Function to generate page content from metadata
function generatePage(metadata) {
  const { title, metaDescription, h1, dataRow, url, slug } = metadata;
  const { calculator_name, stage, founder_type, geography, outcome_modifier } = dataRow;

  // Get the correct calculator slug for the main app
  const actualCalculatorSlug = calculatorSlugMap[calculator_name] || calculator_name;

  // Get calculator-specific content
  const content = calculatorContent[calculator_name] || calculatorContent['safe-calculator'];

  // Format stage and founder type for display
  const stageDisplay = stage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const founderDisplay = founder_type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const geoDisplay = geography.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const calcNameDisplay = calculator_name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const outcomeDisplay = outcome_modifier.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Generate function name from slug (handle names starting with numbers)
  let functionName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  // If function name starts with a number, prefix with underscore
  if (/^\d/.test(functionName)) {
    functionName = '_' + functionName;
  }

  // Phase 3A: Find related blog posts
  const relatedBlogPosts = findRelatedBlogPosts(calculator_name, 5);
  const relatedBlogLinks = relatedBlogPosts.map(p =>
    `<li><Link href="/blog/${p.slug}/" className="text-blue-600 hover:text-blue-700 underline">${p.title.replace(/"/g, '&quot;')}</Link></li>`
  ).join('\n                  ');

  return `import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "${title}",
  description: "${metaDescription}",
  keywords: ["${calculator_name}", "${stage}", "${founder_type}", "${geography}", "startup calculator"],
  openGraph: {
    title: "${title}",
    description: "${metaDescription}",
    type: "article",
    url: "${url}",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${metaDescription}",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/${slug}/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${h1}",
    "description": "${metaDescription}",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "${new Date().toISOString()}",
    "dateModified": "${new Date().toISOString()}",
    "url": "https://learn.icanpitch.com/learn/${slug}/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/${slug}/"
    }
  }
];

export default function ${functionName}(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "${title.replace(/"/g, '\\"')}" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {jsonLdData.map((data: Record<string, any>, index: number) => (
        <Script
          key={index}
          id={\`json-ld-\${index}\`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}

      <div className="min-h-screen bg-white">
        {/* Hero Section with Aurora Background */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                ${metaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">${stageDisplay}</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">${founderDisplay}</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">${geoDisplay}</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.section1Title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">${content.section1Text}</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.section2Title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">${content.section2Text}</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the ${calcNameDisplay}</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  ${content.steps.map(step => '<li>' + step + '</li>').join('\n                  ')}
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.whenToUseTitle}</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  ${content.whenToUseItems.map(item => '<li>' + item + '</li>').join('\n                  ')}
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.formulasTitle}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">${content.formulasText}</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.mistakesTitle}</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  ${content.mistakesItems.map(item => '<li>' + item + '</li>').join('\n                  ')}
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    ${content.tips.map(tip => '<li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>' + tip + '</span></li>').join('\n                    ')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        ${relatedBlogPosts.length > 0 ? `{/* Recommended Reading */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Reading</h3>
            <ul className="space-y-2">
              ${relatedBlogLinks}
            </ul>
          </div>
        </section>` : ''}

        {/* Related Resources */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/learn/" className="text-blue-600 hover:text-blue-700 underline">All Calculator Guides</Link>
              <Link href="/blog/" className="text-blue-600 hover:text-blue-700 underline">Blog & Articles</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-purple-200 shadow-2xl bg-white">
                <CardHeader className="pt-12">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Try our ${calculator_name.replace(/-/g, ' ')} now - completely free, no signup required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-12">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="font-semibold"
                    asChild
                  >
                    <a
                      href="https://icanpitch.com/${actualCalculatorSlug}/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Calculator &rarr;
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
`;
}

// Process each calculator
calculatorDirs.forEach(dir => {
  const metadataPath = path.join(learnDir, dir, 'metadata.json');

  if (fs.existsSync(metadataPath)) {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const pageContent = generatePage(metadata);

    // Create directory if it doesn't exist
    const outputDir = path.join(appLearnDir, dir);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the page file
    const outputPath = path.join(outputDir, 'page.tsx');
    fs.writeFileSync(outputPath, pageContent, 'utf8');
    console.log(`Generated: learn/${dir}/page.tsx`);
  }
});

console.log(`\nAll ${calculatorDirs.length} calculator pages generated successfully!`);

// ─── Phase 4A: Dynamic Learn Index Generation ───────────────────────────────

function generateLearnIndex(calculatorDirs) {
  const allCalcs = [];
  calculatorDirs.forEach(dir => {
    const metaPath = path.join(learnDir, dir, 'metadata.json');
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      allCalcs.push({
        name: meta.title || dir,
        slug: meta.slug || dir,
        stage: meta.dataRow?.stage || 'seed',
        description: meta.metaDescription || '',
        calculatorName: meta.dataRow?.calculator_name || '',
      });
    }
  });

  const calcsArrayStr = allCalcs.map(c => {
    const stageDisplay = c.stage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const nameDisplay = c.calculatorName
      ? c.calculatorName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : c.name;
    return `    {
      name: "${nameDisplay.replace(/"/g, '\\"')}",
      slug: "${c.slug}",
      stage: "${stageDisplay}",
      description: "${c.description.replace(/"/g, '\\"')}",
    }`;
  }).join(',\n');

  return `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Calculator Guides",
  description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, option pools, valuations, vesting schedules, and more.",
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/",
  },
  openGraph: {
    title: "Startup Calculator Guides",
    description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, and more.",
    url: "https://learn.icanpitch.com/learn/",
    type: "website",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Calculator Guides",
    description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, and more.",
  },
};

export default function LearnPage() {
  const calculators = [
${calcsArrayStr}
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section with Aurora Background */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <AuroraBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Startup Calculator Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive guides and resources for founders at every stage of their startup journey
            </p>
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              Each guide walks you through a specific financial modeling tool, from SAFE note conversion and burn rate analysis to equity splitting and exit scenario planning. Built for pre-seed through Series B founders.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {calculators.map((calc) => (
                <Card
                  key={calc.slug}
                  className="bg-white border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col group"
                >
                  <CardHeader className="flex-grow pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-50 text-blue-700 border-0 text-xs font-medium px-2.5 py-0.5">
                        {calc.stage}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {calc.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-5">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="font-medium"
                      asChild
                    >
                      <Link href={\`/learn/\${calc.slug}/\`}>
                        Read Guide &rarr;
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Link */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-600">Looking for more in-depth analysis? <Link href="/blog/" className="text-blue-600 hover:text-blue-700 font-medium underline">Read our blog</Link> for detailed articles on fundraising, equity, and startup finance.</p>
        </div>
      </section>
    </div>
  );
}
`;
}

// Generate learn index
const learnIndexContent = generateLearnIndex(calculatorDirs);
fs.writeFileSync(path.join(appLearnDir, 'page.tsx'), learnIndexContent, 'utf8');
console.log('Generated: learn/page.tsx (dynamic index)');

console.log('\nLearn page generation complete!');
