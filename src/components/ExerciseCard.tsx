import type { Exercise } from "@/data/exercises";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const difficultyColor = {
    Beginner: "bg-surface text-foreground",
    Intermediate: "bg-foreground/10 text-foreground",
    Advanced: "bg-foreground text-white",
  };

  return (
    <div
      className="group p-6 border border-border rounded-sm hover:border-foreground transition-all duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      id={`exercise-card-${exercise.id}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-sm ${difficultyColor[exercise.difficulty]}`}>
          {exercise.difficulty}
        </span>
        <span className="text-xs text-muted">{exercise.duration}</span>
      </div>
      <h3 className="font-heading font-semibold text-base mb-1">{exercise.name}</h3>
      <p className="text-sm text-muted mb-3">{exercise.target}</p>
      <div className="flex items-center gap-2 text-xs text-muted">
        <span>🔧 {exercise.equipment}</span>
      </div>
    </div>
  );
}
