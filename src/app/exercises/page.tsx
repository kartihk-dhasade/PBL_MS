"use client";
import { useState } from "react";
import { exercises } from "@/data/exercises";
import { categories } from "@/data/conditions";
import ExerciseCard from "@/components/ExerciseCard";

export default function ExercisesPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? exercises : exercises.filter((e) => e.category === filter);

  return (
    <>
      <section className="py-20 px-6" id="exercises-hero">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-in">Exercise Library</p>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 animate-slide-up">
            Corrective Exercises
          </h1>
          <p className="text-muted text-base max-w-[600px] mb-10 animate-slide-up delay-100">
            Browse our complete library of posture correction exercises, organized by body region and difficulty level.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10" id="exercise-filters">
            <button
              onClick={() => setFilter("all")}
              className={`text-sm px-4 py-2 rounded-sm border transition-colors ${
                filter === "all"
                  ? "bg-foreground text-white border-foreground"
                  : "border-border text-muted hover:text-foreground hover:border-foreground"
              }`}
            >
              All ({exercises.length})
            </button>
            {categories.map((cat) => {
              const count = exercises.filter((e) => e.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`text-sm px-4 py-2 rounded-sm border transition-colors ${
                    filter === cat.id
                      ? "bg-foreground text-white border-foreground"
                      : "border-border text-muted hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted text-sm py-12">No exercises found for this category.</p>
          )}
        </div>
      </section>
    </>
  );
}
