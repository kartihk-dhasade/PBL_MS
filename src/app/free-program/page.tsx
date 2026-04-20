"use client";
import { useState } from "react";

export default function FreeProgramPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="py-32 px-6 text-center" id="success-state">
        <div className="max-w-[500px] mx-auto animate-scale-in">
          <div className="text-5xl mb-6">✓</div>
          <h1 className="font-heading font-bold text-3xl mb-4">You&apos;re In!</h1>
          <p className="text-muted text-base mb-2">Check your inbox for Day 1 of your posture reset plan.</p>
          <p className="text-sm text-muted">If you don&apos;t see it, check your spam folder.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6" id="free-program-hero">
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left - Content */}
          <div className="flex-1">
            <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-in">Free Program</p>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 animate-slide-up leading-tight">
              Your Free 7-Day
              <br />Posture Reset Plan
            </h1>
            <p className="text-muted text-base mb-8 animate-slide-up delay-100 leading-relaxed">
              A structured, day-by-day program designed by a physiotherapist to kickstart your posture correction journey. No equipment needed.
            </p>

            {/* What you get */}
            <div className="space-y-3 mb-8 animate-slide-up delay-200">
              <p className="text-sm font-medium mb-4">What&apos;s included:</p>
              {[
                "7 daily email lessons with clear instructions",
                "Targeted stretches for your tightest muscles",
                "Strengthening exercises for postural muscles",
                "Daily habit checklist to reinforce good posture",
                "Progress tracking template",
                "Bonus: 10-Minute Daily Maintenance Routine",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-accent">
                  <span className="w-5 h-5 border border-foreground rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted animate-slide-up delay-300">
              <div className="flex -space-x-2">
                {["😊", "🙂", "😄", "🤗"].map((e, i) => (
                  <div key={i} className="w-8 h-8 bg-surface border border-border rounded-full flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <span>Join 75,000+ subscribers</span>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:w-[400px] flex-shrink-0 animate-slide-up delay-200">
            <div className="bg-surface border border-border rounded-sm p-8">
              <h2 className="font-heading font-semibold text-xl mb-2 text-center">Get Started Free</h2>
              <p className="text-sm text-muted text-center mb-6">No spam. Unsubscribe anytime.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm focus:outline-none focus:border-foreground transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="free-email" className="block text-xs font-medium text-muted mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="free-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm focus:outline-none focus:border-foreground transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-white font-medium text-sm py-3.5 rounded-sm hover:bg-accent transition-colors"
                  id="free-program-submit"
                >
                  Send Me the Free Plan →
                </button>
              </form>
              <p className="text-xs text-muted text-center mt-4">
                By signing up, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* Daily breakdown preview */}
      <section className="py-20 px-6" id="daily-preview">
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-heading font-semibold text-2xl text-center mb-12">What You&apos;ll Learn Each Day</h2>
          <div className="space-y-0 border-l-2 border-border ml-2">
            {[
              { day: "Day 1", title: "Posture Assessment", desc: "Identify your specific postural issues with simple self-tests." },
              { day: "Day 2", title: "Release Tight Muscles", desc: "Targeted stretches for the muscles pulling you out of alignment." },
              { day: "Day 3", title: "Activate Weak Muscles", desc: "Gentle activation exercises for underused postural muscles." },
              { day: "Day 4", title: "Workstation Setup", desc: "Optimize your desk, chair, and screen for better posture." },
              { day: "Day 5", title: "Strengthen & Stabilize", desc: "Progressive strengthening for lasting postural change." },
              { day: "Day 6", title: "Daily Habit Integration", desc: "Build posture-friendly habits into your daily routine." },
              { day: "Day 7", title: "Maintenance Plan", desc: "Your ongoing routine for continued improvement." },
            ].map((item, i) => (
              <div key={i} className="pl-6 pb-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-foreground rounded-full" />
                <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">{item.day}</p>
                <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
