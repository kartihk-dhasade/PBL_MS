import type { Metadata } from "next";
import { conditions, categories } from "@/data/conditions";
import ConditionCard from "@/components/ConditionCard";

export const metadata: Metadata = {
  title: "All Posture Conditions",
  description: "Browse our complete library of posture conditions with evidence-based correction guides. From forward head posture to flat feet.",
};

export default function ConditionsPage() {
  return (
    <>
      <section className="py-20 px-6" id="conditions-hero">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-in">Condition Library</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 animate-slide-up">
            All Posture Conditions
          </h1>
          <p className="text-muted text-base max-w-[600px] mb-14 animate-slide-up delay-100">
            Each condition includes a complete correction protocol: self-tests, stretches, strengthening exercises, daily habits, and a realistic recovery timeline.
          </p>

          {categories.map((cat) => {
            const catConditions = conditions.filter((c) => c.category === cat.id);
            return (
              <div key={cat.id} className="mb-14" id={`conditions-${cat.id}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{cat.icon}</span>
                  <h2 className="font-heading font-semibold text-lg">{cat.name}</h2>
                  <span className="text-xs text-muted bg-surface px-2 py-0.5 rounded-sm">{catConditions.length}</span>
                  <div className="flex-1 border-t border-border ml-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {catConditions.map((c) => (
                    <ConditionCard key={c.slug} condition={c} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
