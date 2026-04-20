import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import EmailCapture from "@/components/EmailCapture";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const guide = getGuideBySlug(slug);
    if (!guide) return { title: "Guide Not Found" };
    return {
      title: guide.title,
      description: guide.excerpt,
    };
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <div className="py-16 px-6">
      <article className="max-w-[720px] mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted mb-8 animate-fade-in" aria-label="Breadcrumb">
          <span>Guides</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{guide.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <span className="text-xs font-medium text-muted">{guide.category}</span>
            <span className="text-xs text-muted">·</span>
            <span className="text-xs text-muted">{guide.readTime} read</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 animate-slide-up">
            {guide.title}
          </h1>
          <p className="text-base text-muted leading-relaxed animate-slide-up delay-100">
            {guide.overview}
          </p>
        </div>

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <section key={i} className="mb-12" id={`section-${i}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-surface text-muted px-2 py-1 rounded-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-heading font-semibold text-xl">{section.heading}</h2>
            </div>
            <p className="text-sm text-accent leading-relaxed mb-4">{section.content}</p>
            {section.steps && section.steps.length > 0 && (
              <ul className="space-y-2.5 mt-4">
                {section.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-accent">
                    <span className="w-5 h-5 border border-border rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                      {j + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* CTA */}
        <section className="mt-14">
          <EmailCapture
            title={guide.cta}
            subtitle="Join our community and get evidence-based posture resources delivered to your inbox."
            buttonText="Get It Free"
          />
        </section>
      </article>
    </div>
  );
}
