import Link from "next/link";
import { conditions } from "@/data/conditions";
import { generalFaqs } from "@/data/faqs";
import ConditionCard from "@/components/ConditionCard";
import EmailCapture from "@/components/EmailCapture";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  const featured = conditions.slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="py-24 md:py-32 px-6" id="hero">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-sm text-muted font-medium uppercase tracking-widest mb-6 animate-fade-in">
            Evidence-Based Posture Correction
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight animate-slide-up">
            Fix Your Posture.
            <br />
            <span className="text-muted">Transform Your Life.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-[600px] mx-auto mb-10 animate-slide-up delay-200 leading-relaxed">
            Structured, physiotherapist-designed correction programs for every postural issue — from head to toe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Link
              href="/start-here"
              className="bg-foreground text-white font-medium px-8 py-3.5 rounded-sm hover:bg-accent transition-colors text-sm"
              id="hero-cta-start"
            >
              Start Here →
            </Link>
            <Link
              href="/free-program"
              className="border border-foreground text-foreground font-medium px-8 py-3.5 rounded-sm hover:bg-foreground hover:text-white transition-colors text-sm"
              id="hero-cta-program"
            >
              Free Program
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-border py-8 bg-surface" id="trust-bar">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "75,000+", label: "Subscribers" },
            { value: "12", label: "Conditions Covered" },
            { value: "100%", label: "Evidence-Based" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-bold text-xl">{stat.value}</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-6" id="how-it-works">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest text-center mb-3">How It Works</p>
          <h2 className="font-heading font-semibold text-2xl text-center mb-14">Three Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Diagnose", desc: "Use our interactive body map to identify your specific postural issue." },
              { step: "02", title: "Learn", desc: "Follow structured, evidence-based correction guides for your condition." },
              { step: "03", title: "Correct", desc: "Apply daily exercises and habits to achieve lasting postural change." },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <p className="font-heading font-bold text-4xl text-border mb-4">{item.step}</p>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* ── Featured Conditions ── */}
      <section className="py-20 px-6" id="featured-conditions">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest text-center mb-3">Common Issues</p>
          <h2 className="font-heading font-semibold text-2xl text-center mb-4">Most Common Postural Problems</h2>
          <p className="text-sm text-muted text-center mb-12 max-w-[500px] mx-auto">
            These are the conditions we see most frequently. Each has a complete correction guide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((c) => (
              <ConditionCard key={c.slug} condition={c} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/conditions"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
              id="view-all-conditions"
            >
              View all 12 conditions <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-20 px-6 bg-surface" id="about-preview">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 bg-border rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">👨‍⚕️</span>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-2">About the Author</p>
            <h2 className="font-heading font-semibold text-xl mb-3">Designed by a Physiotherapist</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              With over 15 years of clinical experience, I&apos;ve helped thousands of patients improve their posture. 
              Every guide on this site follows the same evidence-based approach I use in my practice — 
              focused on fixing the root cause, not just treating symptoms.
            </p>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-muted transition-colors inline-flex items-center gap-1"
              id="about-link"
            >
              Read my story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6" id="testimonials">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest text-center mb-3">What People Say</p>
          <h2 className="font-heading font-semibold text-2xl text-center mb-12">Trusted by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "After years of neck pain from desk work, the forward head posture guide changed everything. Clear, actionable, and it actually works.", name: "Sarah M.", role: "Software Engineer" },
              { quote: "I love how everything is structured step-by-step. No confusing jargon — just clear instructions. My rounded shoulders are noticeably better.", name: "James T.", role: "Graphic Designer" },
              { quote: "The 7-day posture reset was the perfect starting point. I now do the exercises daily and my back pain has almost completely disappeared.", name: "Priya K.", role: "Teacher" },
            ].map((t, i) => (
              <div key={i} className="p-6 border border-border rounded-sm">
                <p className="text-sm text-muted leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email Capture ── */}
      <EmailCapture variant="banner" />

      {/* ── FAQ ── */}
      <section className="px-6">
        <div className="max-w-[1000px] mx-auto">
          <FAQSection faqs={generalFaqs.slice(0, 5)} />
        </div>
      </section>
    </>
  );
}
