import Link from "next/link";
import type { Condition } from "@/data/conditions";

interface ConditionCardProps {
  condition: Condition;
}

export default function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Link
      href={`/conditions/${condition.slug}`}
      className="group block p-6 border border-border rounded-sm hover:border-foreground transition-all duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      id={`condition-card-${condition.slug}`}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl flex-shrink-0">{condition.icon}</span>
        <div>
          <h3 className="font-heading font-semibold text-base mb-1 group-hover:translate-x-0.5 transition-transform">
            {condition.name}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{condition.brief}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs text-muted group-hover:text-foreground transition-colors">
        <span>Learn more</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
