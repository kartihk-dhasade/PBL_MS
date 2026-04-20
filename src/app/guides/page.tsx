import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides & Articles",
  description: "In-depth posture guides, tips, and articles written by a qualified physiotherapist. Evidence-based advice for lasting posture improvement.",
};

const guides = [
  {
    slug: "proper-sitting-posture",
    title: "The Complete Guide to Proper Sitting Posture",
    excerpt: "Everything you need to know about setting up your workstation and maintaining good posture throughout the workday.",
    category: "Ergonomics",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "posture-while-sleeping",
    title: "Best Sleeping Positions for Your Posture",
    excerpt: "Your sleeping position affects your posture more than you think. Learn the best positions and pillow setups for spinal health.",
    category: "Sleep",
    readTime: "8 min",
    featured: false,
  },
  {
    slug: "posture-and-back-pain",
    title: "The Link Between Posture and Back Pain",
    excerpt: "Understanding how poor posture contributes to chronic back pain and what you can do about it.",
    category: "Pain Management",
    readTime: "10 min",
    featured: false,
  },
  {
    slug: "desk-stretches",
    title: "10 Stretches You Can Do at Your Desk",
    excerpt: "Quick, effective stretches designed for office workers who sit for long periods. No equipment needed.",
    category: "Exercises",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "posture-myths",
    title: "5 Posture Myths Debunked by a Physiotherapist",
    excerpt: "Common misconceptions about posture that may be holding back your progress.",
    category: "Education",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "morning-routine",
    title: "A 10-Minute Morning Posture Routine",
    excerpt: "Start your day with this quick routine designed to activate postural muscles and set you up for better alignment.",
    category: "Routines",
    readTime: "5 min",
    featured: false,
  },
];

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
          In-depth guides written by a qualified physiotherapist. Clear, evidence-based advice you can trust.
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
