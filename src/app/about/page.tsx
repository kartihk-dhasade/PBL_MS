import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Meet Your Physiotherapist",
  description: "Learn about the qualified physiotherapist behind PostureAlign, with 15+ years of clinical experience helping thousands improve their posture.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6" id="about-hero">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-32 h-32 bg-surface border border-border rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-5xl">👨‍⚕️</span>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-3 animate-fade-in">About the Author</p>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-3 animate-slide-up">
              Dr. Mark Stevens
            </h1>
            <p className="text-muted text-base mb-2 animate-slide-up delay-100">
              Physiotherapist & Posture Specialist
            </p>
            <p className="text-sm text-muted animate-slide-up delay-200">
              BSc Physiotherapy · MSc Musculoskeletal · 15+ Years Clinical Experience
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* Story */}
      <section className="py-16 px-6" id="about-story">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-heading font-semibold text-2xl mb-6">My Story</h2>
          <div className="space-y-4 text-sm text-accent leading-relaxed">
            <p>
              I became obsessed with posture by accident. Early in my physiotherapy career, I noticed a pattern — patients would come in with shoulder pain, neck stiffness, or chronic headaches, and in the majority of cases, the root cause was the same: poor postural habits accumulated over years.
            </p>
            <p>
              I started documenting the most effective corrective exercises and strategies I used in clinical practice. Over time, I refined these into structured protocols that patients could follow at home between sessions. The results were remarkable.
            </p>
            <p>
              That clinical documentation evolved into PostureAlign. What started as handouts for my patients has become a comprehensive resource used by over 75,000 people worldwide. Every guide on this site follows the exact same evidence-based approach I use in my practice.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* Credentials */}
      <section className="py-16 px-6" id="about-credentials">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-heading font-semibold text-2xl mb-8">Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "BSc Physiotherapy", detail: "University of Melbourne, 2008" },
              { title: "MSc Musculoskeletal Physiotherapy", detail: "University of Queensland, 2012" },
              { title: "Certified in Postural Restoration", detail: "Postural Restoration Institute, 2015" },
              { title: "15+ Years Clinical Practice", detail: "Private practice & hospital settings" },
              { title: "Published Researcher", detail: "3 peer-reviewed publications on posture" },
              { title: "75,000+ Students", detail: "Online posture education since 2016" },
            ].map((cred, i) => (
              <div key={i} className="p-5 border border-border rounded-sm">
                <h3 className="font-heading font-semibold text-sm mb-1">{cred.title}</h3>
                <p className="text-xs text-muted">{cred.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* Philosophy */}
      <section className="py-16 px-6" id="about-philosophy">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-heading font-semibold text-2xl mb-6">My Philosophy</h2>
          <div className="bg-surface border border-border rounded-sm p-8">
            <blockquote className="text-lg font-heading font-semibold mb-4 leading-relaxed">
              &ldquo;Fix the root cause, not the symptoms.&rdquo;
            </blockquote>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Most people treat posture like a quick fix — wear a brace, do a stretch, sit up straight. But real postural change requires understanding <em>why</em> your body has adopted these positions in the first place.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Every correction program on this site addresses the underlying muscle imbalances, movement patterns, and daily habits that create and maintain poor posture. It&apos;s not about forcing your body into a position — it&apos;s about retraining it to hold good posture naturally.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* Mission */}
      <section className="py-16 px-6" id="about-mission">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="font-heading font-semibold text-2xl mb-6">Mission</h2>
          <p className="text-base text-muted leading-relaxed mb-8 max-w-[600px] mx-auto">
            To make evidence-based posture education accessible to everyone, regardless of location, budget, or fitness level. Good posture shouldn&apos;t be a luxury — it&apos;s a fundamental aspect of physical health.
          </p>
          <Link
            href="/free-program"
            className="inline-flex items-center gap-2 bg-foreground text-white font-medium text-sm px-8 py-3.5 rounded-sm hover:bg-accent transition-colors"
            id="about-cta"
          >
            Start Your Free Program →
          </Link>
        </div>
      </section>
    </>
  );
}
