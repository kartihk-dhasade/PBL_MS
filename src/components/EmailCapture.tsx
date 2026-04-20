"use client";
import { useState } from "react";

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "inline" | "banner";
}

export default function EmailCapture({
  title = "Get Your Free 7-Day Posture Reset Plan",
  subtitle = "Join 75,000+ subscribers who are fixing their posture with evidence-based exercises.",
  buttonText = "Send Me the Plan",
  variant = "inline",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div
        className={`${
          variant === "banner" ? "bg-surface border-y border-border py-16" : "bg-surface rounded-sm p-8 border border-border"
        }`}
      >
        <div className="max-w-[600px] mx-auto text-center animate-scale-in">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="font-heading font-semibold text-xl mb-2">You&apos;re In!</h3>
          <p className="text-muted text-sm">Check your inbox for your free posture plan. Let&apos;s start fixing your posture today.</p>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <section className="bg-foreground text-white py-16" id="email-capture-banner">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-heading font-semibold text-2xl mb-3">{title}</h2>
          <p className="text-white/70 text-sm mb-8">{subtitle}</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors"
              required
              id="banner-email-input"
            />
            <button
              type="submit"
              className="bg-white text-foreground font-medium text-sm px-6 py-3 rounded-sm hover:bg-white/90 transition-colors whitespace-nowrap"
              id="banner-email-submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-surface rounded-sm p-8 border border-border" id="email-capture-inline">
      <div className="max-w-[500px] mx-auto text-center">
        <h3 className="font-heading font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted text-sm mb-6">{subtitle}</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-sm border border-border rounded-sm focus:outline-none focus:border-foreground transition-colors"
            required
            id="inline-email-input"
          />
          <button
            type="submit"
            className="bg-foreground text-white font-medium text-sm px-6 py-3 rounded-sm hover:bg-accent transition-colors whitespace-nowrap"
            id="inline-email-submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
