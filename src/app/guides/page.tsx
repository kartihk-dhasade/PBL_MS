import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides & Articles",
  description: "In-depth posture guides, tips, and articles. Evidence-based advice for lasting posture improvement.",
};

export default function GuidesPage() {
  const featured = guides.find((g) => g.featured);
  const rest = guides.filter((g) => !g.featured);

  return (
    <section className="py-20 px-6" id="guides-page">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-in">Guides & Articles</p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 animate-slide-up">
          Posture Guides
        </h1>
        <p className="text-muted text-base max-w-[600px] mb-14 animate-slide-up delay-100">
          In-depth guides with clear, evidence-based advice you can trust.
        </p>

        {/* Featured */}
        {featured && (
          <Link
            href={`/guides/${featured.slug}`}
            className="block mb-12 p-8 bg-surface border border-border rounded-sm group hover:border-foreground transition-all"
            id="featured-guide"
          >
            <span className="text-xs font-medium text-muted uppercase tracking-wider">{featured.category} · Featured</span>
            <h2 className="font-heading font-semibold text-2xl mt-2 mb-3 group-hover:translate-x-0.5 transition-transform">
              {featured.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">{featured.excerpt}</p>
            <span className="text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read guide <span>→</span>
            </span>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 border border-border rounded-sm hover:border-foreground transition-all"
              id={`guide-${guide.slug}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-muted">{guide.category}</span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs text-muted">{guide.readTime}</span>
              </div>
              <h3 className="font-heading font-semibold text-base mb-2 group-hover:translate-x-0.5 transition-transform">
                {guide.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
