import { 
  Check, 
  X, 
  TrendingUp, 
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import TestimonialsSection from "@/components/LinkedInServicePage";

const LinkedInServicePage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-neutral-900/50 to-transparent -z-10" />
        
        <span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400 mb-6">
          Strategy Meets Execution
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          Stop Posting Into the Void. <br />
          Start Building Authority.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Most agencies sell you "posts" (the commodity). Consultants sell you "strategy" (the theory). 
          <span className="text-white font-medium"> We deliver both.</span> We bridge the gap between high-level strategy and relentless daily execution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="px-8 py-4 text-lg rounded-full bg-white text-black hover:bg-neutral-200 transition-all">
            <a href="#contact-us">View Pricing Plans</a>
          </Button>
          <Button asChild className="px-8 py-4 text-lg rounded-full border border-neutral-700 hover:bg-neutral-900 transition-all text-white">
            <a href="#contact-us">Book a Strategy Audit</a>
          </Button>
        </div>
      </section>

      {/* --- THE MARKET GAP (Why Us?) --- */}
      <section className="py-20 px-6 bg-neutral-900/30 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The "Managed Service" Advantage</h2>
            <p className="text-neutral-400">Why we are the smartest choice for your growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Competitor: The Commodity */}
            <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950/50 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-4 text-neutral-500">
                <X size={24} />
                <h3 className="text-xl font-semibold">The Commodity</h3>
              </div>
              {/* <p className="text-2xl font-bold mb-2">₹3k - ₹15k</p> */}
              <p className="text-sm text-neutral-500 mb-6">The "Cheap Freelancer"</p>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex gap-2"><X size={16} /> Focus on "Number of Posts"</li>
                <li className="flex gap-2"><X size={16} /> Generic, AI-generated content</li>
                <li className="flex gap-2"><X size={16} /> No lead generation strategy</li>
              </ul>
            </div>

            {/* YOUR AGENCY (The Winner) */}
            <div className="relative p-8 rounded-2xl border border-white/20 bg-neutral-900 shadow-2xl scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                We Are Here
              </div>
              <div className="flex items-center gap-3 mb-4 text-white">
                <TrendingUp size={24} className="text-green-400" />
                <h3 className="text-xl font-semibold">The Growth Engine</h3>
              </div>
              {/* <p className="text-2xl font-bold mb-2">₹20k - ₹1L</p> */}
              <p className="text-sm text-neutral-400 mb-6">Strategy + Execution</p>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Custom ICP & Strategy</li>
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> High-End Visuals & Carousels</li>
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Real Human Engagement</li>
                <li className="flex gap-2"><Check size={16} className="text-green-400"/> Guaranteed Consistency</li>
              </ul>
            </div>

            {/* Competitor: The Consultant */}
            <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950/50 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-4 text-neutral-500">
                <Target size={24} />
                <h3 className="text-xl font-semibold">The Consultant</h3>
              </div>
              {/* <p className="text-2xl font-bold mb-2">₹75k - ₹1.5L</p> */}
              <p className="text-sm text-neutral-500 mb-6">The "Pure Strategist"</p>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex gap-2"><Check size={16} /> Great high-level roadmap</li>
                <li className="flex gap-2"><X size={16} /> <strong>You</strong> still have to do the work</li>
                <li className="flex gap-2"><X size={16} /> Expensive hourly rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* --- PRICING SECTION --- */}
      {/* <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-neutral-400">Choose the speed of your growth. No hidden fees.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <PricingCard 
            title="The Presence"
            price="₹25,000"
            sub="For busy founders who need consistency."
            features={[
              "Profile Optimization (Banner, Bio)",
              "8 High-Quality Posts / Month",
              "15 Mins/Day Community Engagement",
              "Monthly Performance Report",
              "Zero Bots, 100% Organic"
            ]}
          />
          <PricingCard 
            title="Growth Engine"
            price="₹55,000"
            sub="For B2B companies hunting for leads."
            isPopular={true}
            features={[
              "Everything in Presence",
              "Strategy: ICP & Competitor Analysis",
              "12 Posts / Month (Inc. 2 Carousels)",
              "400 Targeted Connection Requests",
              "Inbox Management (Spam Filtering)",
              "Bi-Weekly Strategy Calls"
            ]}
          />
          <PricingCard 
            title="Authority Partner"
            price="₹95,000"
            sub="Dominate your niche. Full executive suite."
            features={[
              "Everything in Growth Engine",
              "Executive Ghostwriting (20 Posts/Mo)",
              "Monthly LinkedIn Newsletter",
              "1,000 Lead List Building",
              "Quarterly 'Roadmap' Strategy Session",
              "Priority Slack Support"
            ]}
          />
        </div>
      </section> */}

      {/* --- OPERATIONAL ROADMAP --- */}
      <section className="py-20 px-6 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Deep Dive Audit</h3>
                <p className="text-neutral-400">We don't guess. We analyze your current profile, your competitors, and your ideal client's pain points. We build the roadmap before we write a single word.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Asset Production & Approval</h3>
                <p className="text-neutral-400">We create branded visuals (Carousels, PDFs) and high-impact copy. You get a simple dashboard to approve or tweak content before it goes live. You stay in control.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Execution & Outreach</h3>
                <p className="text-neutral-400">We hit publish. We engage with your network. We send connection requests to your ICP. You focus on taking the sales calls that come in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOT IN THE DOOR (AUDIT) --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto border border-neutral-800 bg-neutral-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not ready for a monthly retainer?</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Start with our <strong>"Profile & Strategy Audit"</strong>. We'll tear down your profile, identify the leaks, and give you a 30-day content calendar you can execute yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <span className="text-3xl font-bold text-white">₹7,999</span> */}
            <Button asChild className="rounded-full px-8 py-3 bg-white text-black hover:bg-neutral-200">
              <a href="#contact-us">Book Your Audit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (Dummy Data) --- */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FaqItem 
            question="Do you use automation tools or bots?" 
            answer="Absolutely not. We believe in the 'Klaus' standard of integrity. All engagement, connection requests, and comments are done manually by real humans to protect your account safety and reputation." 
          />
          <FaqItem 
            question="How much time do I need to invest?" 
            answer="Very little. In the beginning, we need about 60 minutes for onboarding. After that, you just need 15 minutes a week to approve content. We handle the rest." 
          />
          <FaqItem 
            question="Is there a minimum contract period?" 
            answer="We recommend a 3-month minimum to see significant traction and lead flow, but we operate on a month-to-month basis. We want you to stay because of results, not a contract." 
          />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 text-center border-t border-neutral-900">
        <h2 className="text-4xl font-bold mb-6">Ready to scale your authority?</h2>
        <Button asChild className="rounded-full px-10 py-4 text-xl bg-white text-black hover:bg-neutral-200">
          <a href="#contact-us">Get Started</a>
        </Button>
      </section>

    </div>
  );
};

export const PricingCard = ({ title, price, sub, features, isPopular = false }: { title: string, price: string, sub: string, features: string[], isPopular?: boolean }) => (
  <div className={`relative flex flex-col p-8 rounded-3xl border ${isPopular ? 'border-white bg-neutral-900' : 'border-neutral-800 bg-neutral-950'} h-full transition-transform hover:-translate-y-2`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-medium text-neutral-300 mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-neutral-500">/mo</span>
      </div>
      <p className="text-sm text-neutral-500 mt-4 h-10">{sub}</p>
    </div>

    <div className="border-t border-neutral-800 my-6"></div>

    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex gap-3 text-sm text-neutral-300">
          <Check size={18} className="text-white shrink-0" />
          {feature}
        </li>
      ))}
    </ul>

    <Button className={`w-full py-3 rounded-full ${isPopular ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800'}`}>
      Choose {title}
    </Button>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/30">
    <h3 className="text-lg font-bold mb-2 text-white">{question}</h3>
    <p className="text-neutral-400">{answer}</p>
  </div>
);

export default LinkedInServicePage;