import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConditionBySlug, getAllConditionSlugs } from "@/data/conditionDetails";
import { categories } from "@/data/conditions";
import TableOfContents from "@/components/TableOfContents";
import EmailCapture from "@/components/EmailCapture";

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "self-tests", label: "Self-Tests" },
  { id: "stretching", label: "Stretching Phase" },
  { id: "strengthening", label: "Strengthening Phase" },
  { id: "daily-habits", label: "Daily Habits" },
  { id: "timeline", label: "Recovery Timeline" },
  { id: "get-started", label: "Get Started" },
];

export function generateStaticParams() {
  return getAllConditionSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const c = getConditionBySlug(slug);
    if (!c) return { title: "Condition Not Found" };
    return {
      title: `${c.name} — Complete Correction Guide`,
      description: `Fix ${c.name.toLowerCase()} with this evidence-based guide. Includes self-tests, stretches, strengthening exercises, daily habits, and recovery timeline.`,
    };
  });
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getConditionBySlug(slug);
  if (!c) notFound();

  const cat = categories.find((cat) => cat.id === c.category);

  return (
    <div className="py-16 px-6">
      <div className="max-w-[1000px] mx-auto flex gap-16">
        <TableOfContents items={tocItems} />

        <article className="flex-1 min-w-0 max-w-[720px]">
          <nav className="text-xs text-muted mb-8 animate-fade-in" aria-label="Breadcrumb">
            <span>Conditions</span>
            <span className="mx-2">/</span>
            <span>{cat?.name ?? c.category}</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{c.name}</span>
          </nav>

          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2 animate-slide-up">{c.name}</h1>
          <p className="text-sm text-muted mb-10 animate-slide-up delay-100">Complete correction guide · 15 min read</p>

          {/* 01 Overview */}
          <section id="overview" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">01</span>
              <h2 className="font-heading font-semibold text-xl">Overview</h2>
            </div>
            <div className="border-l-2 border-border pl-6">
              <p className="text-sm text-accent leading-relaxed">{c.overview}</p>
            </div>
          </section>

          {/* 02 Symptoms */}
          <section id="symptoms" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">02</span>
              <h2 className="font-heading font-semibold text-xl">Symptoms</h2>
            </div>
            <p className="text-sm text-muted mb-4">Check if you experience any of the following:</p>
            <ul className="space-y-2.5">
              {c.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-accent">
                  <span className="w-5 h-5 border border-border rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* 03 Self-Tests */}
          <section id="self-tests" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">03</span>
              <h2 className="font-heading font-semibold text-xl">Self-Tests</h2>
            </div>
            <p className="text-sm text-muted mb-6">Try these simple tests at home:</p>
            <div className="space-y-8">
              {c.selfTests.map((test, i) => (
                <div key={i} className="bg-surface rounded-sm p-6 border border-border">
                  <h3 className="font-heading font-semibold text-base mb-4">{test.name}</h3>
                  <ol className="space-y-2">
                    {test.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-accent">
                        <span className="font-heading font-semibold text-xs text-muted w-5 flex-shrink-0 mt-0.5">{j + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Stretching */}
          <section id="stretching" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">04</span>
              <h2 className="font-heading font-semibold text-xl">Stretching Phase</h2>
            </div>
            <p className="text-sm text-muted mb-6">Release the tight muscles contributing to this condition:</p>
            <div className="space-y-4">
              {c.stretches.map((s, i) => (
                <div key={i} className="p-6 border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-base">{s.name}</h3>
                    <span className="text-xs text-muted bg-surface px-2 py-1 rounded-sm">{s.duration}</span>
                  </div>
                  <p className="text-xs text-muted mb-2">Target: {s.target}</p>
                  <p className="text-sm text-accent leading-relaxed">{s.instructions}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 05 Strengthening */}
          <section id="strengthening" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">05</span>
              <h2 className="font-heading font-semibold text-xl">Strengthening Phase</h2>
            </div>
            <p className="text-sm text-muted mb-6">Build strength in the muscles that correct this posture:</p>
            <div className="space-y-4">
              {c.exercises.map((ex, i) => (
                <div key={i} className="p-6 border border-border rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-base">{ex.name}</h3>
                    <span className="text-xs text-muted bg-surface px-2 py-1 rounded-sm">{ex.reps}</span>
                  </div>
                  <p className="text-xs text-muted mb-2">Target: {ex.target}</p>
                  <p className="text-sm text-accent leading-relaxed">{ex.instructions}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 06 Daily Habits */}
          <section id="daily-habits" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">06</span>
              <h2 className="font-heading font-semibold text-xl">Daily Habits</h2>
            </div>
            <p className="text-sm text-muted mb-4">Exercises alone won&apos;t fix your posture. Apply these daily:</p>
            <ul className="space-y-3">
              {c.dailyHabits.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-accent">
                  <span className="text-muted flex-shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* 07 Timeline */}
          <section id="timeline" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">07</span>
              <h2 className="font-heading font-semibold text-xl">Recovery Timeline</h2>
            </div>
            <p className="text-sm text-muted mb-6">What to expect with consistent daily practice:</p>
            <div className="space-y-0 border-l-2 border-border ml-2">
              {c.timeline.map((t, i) => (
                <div key={i} className="pl-6 pb-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-foreground rounded-full" />
                  <h3 className="font-heading font-semibold text-sm mb-1">{t.week}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 08 CTA */}
          <section id="get-started" className="mb-14">
            <EmailCapture
              title={`Get the Complete ${c.name} Program`}
              subtitle="Receive a structured, day-by-day correction plan delivered to your inbox."
              buttonText="Send Me the Program"
            />
          </section>
        </article>
      </div>
    </div>
  );
}
