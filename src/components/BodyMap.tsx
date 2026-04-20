"use client";
import { useState } from "react";

interface BodyZone {
  id: string;
  label: string;
  pathData: string;
  conditions: string[];
}

const frontZones: BodyZone[] = [
  {
    id: "head-neck",
    label: "Head & Neck",
    pathData: "M 85 20 Q 100 5 115 20 Q 125 40 115 55 Q 100 65 85 55 Q 75 40 85 20 Z M 92 55 L 88 80 L 112 80 L 108 55",
    conditions: ["Forward Head Posture", "Tech Neck", "Neck Pain"],
  },
  {
    id: "shoulders-upper-back",
    label: "Shoulders & Upper Back",
    pathData: "M 65 80 L 88 80 L 112 80 L 135 80 Q 145 85 145 100 L 140 130 L 60 130 L 55 100 Q 55 85 65 80 Z",
    conditions: ["Rounded Shoulders", "Kyphosis", "Scapular Winging"],
  },
  {
    id: "spine-core",
    label: "Spine & Core",
    pathData: "M 75 130 L 125 130 L 122 195 L 78 195 Z",
    conditions: ["Anterior Pelvic Tilt", "Posterior Pelvic Tilt", "Lumbar Lordosis"],
  },
  {
    id: "lower-body",
    label: "Lower Body",
    pathData: "M 78 195 L 122 195 L 125 210 L 120 260 L 118 310 L 105 310 L 100 260 L 95 310 L 82 310 L 80 260 L 75 210 Z",
    conditions: ["Knee Valgus", "Flat Feet", "Tight Hip Flexors"],
  },
];

const sideZones: BodyZone[] = [
  {
    id: "head-neck",
    label: "Head & Neck",
    pathData: "M 95 20 Q 115 10 120 25 Q 120 45 110 55 L 100 60 L 95 55 Q 85 40 95 20 Z M 100 55 L 98 80 L 108 80 L 110 55",
    conditions: ["Forward Head Posture", "Tech Neck", "Neck Pain"],
  },
  {
    id: "shoulders-upper-back",
    label: "Shoulders & Upper Back",
    pathData: "M 90 80 L 108 80 L 120 85 Q 125 95 120 110 L 118 130 L 82 130 L 80 110 Q 78 95 85 85 Z",
    conditions: ["Rounded Shoulders", "Kyphosis", "Scapular Winging"],
  },
  {
    id: "spine-core",
    label: "Spine & Core",
    pathData: "M 82 130 L 118 130 Q 120 160 115 195 L 85 195 Q 80 160 82 130 Z",
    conditions: ["Anterior Pelvic Tilt", "Posterior Pelvic Tilt", "Lumbar Lordosis"],
  },
  {
    id: "lower-body",
    label: "Lower Body",
    pathData: "M 85 195 L 115 195 L 118 230 L 115 270 L 112 310 L 100 310 L 95 270 L 90 230 Z",
    conditions: ["Knee Valgus", "Flat Feet", "Tight Hip Flexors"],
  },
];

export default function BodyMap({ onZoneClick }: { onZoneClick?: (zoneId: string) => void }) {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [view, setView] = useState<"front" | "side">("front");

  const zones = view === "front" ? frontZones : sideZones;

  const handleClick = (zoneId: string) => {
    if (onZoneClick) onZoneClick(zoneId);
    const el = document.getElementById(`category-${zoneId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex flex-col items-center" id="body-map">
      {/* View Toggle */}
      <div className="flex gap-1 mb-8 bg-surface rounded-sm p-1">
        <button
          onClick={() => setView("front")}
          className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
            view === "front" ? "bg-foreground text-white" : "text-muted hover:text-foreground"
          }`}
          id="body-map-front-toggle"
        >
          Front View
        </button>
        <button
          onClick={() => setView("side")}
          className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
            view === "side" ? "bg-foreground text-white" : "text-muted hover:text-foreground"
          }`}
          id="body-map-side-toggle"
        >
          Side View
        </button>
      </div>

      {/* Body SVG */}
      <div className="relative">
        <svg
          viewBox="0 0 200 330"
          className="w-48 md:w-56 h-auto"
          aria-label="Interactive body map"
        >
          {/* Body outline */}
          <ellipse cx="100" cy="37" rx="20" ry="25" fill="none" stroke="#E5E5E5" strokeWidth="1" />
          <line x1="100" y1="62" x2="100" y2="200" stroke="#E5E5E5" strokeWidth="1" />
          <line x1="55" y1="90" x2="145" y2="90" stroke="#E5E5E5" strokeWidth="1" />
          <line x1="85" y1="200" x2="80" y2="310" stroke="#E5E5E5" strokeWidth="1" />
          <line x1="115" y1="200" x2="120" y2="310" stroke="#E5E5E5" strokeWidth="1" />

          {/* Clickable zones */}
          {zones.map((zone) => (
            <path
              key={zone.id}
              d={zone.pathData}
              fill={hoveredZone === zone.id ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.02)"}
              stroke={hoveredZone === zone.id ? "#000000" : "#A0A0A0"}
              strokeWidth={hoveredZone === zone.id ? "2" : "1"}
              className="cursor-pointer transition-all duration-200"
              onMouseEnter={() => setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
              onClick={() => handleClick(zone.id)}
              role="button"
              aria-label={`Select ${zone.label} region`}
            />
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredZone && (
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 bg-foreground text-white text-xs font-medium px-3 py-2 rounded-sm animate-fade-in whitespace-nowrap hidden md:block">
            {zones.find((z) => z.id === hoveredZone)?.label}
            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
          </div>
        )}
      </div>

      {/* Mobile labels */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 md:hidden">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => handleClick(zone.id)}
            className={`text-xs px-3 py-1.5 border rounded-sm transition-colors ${
              hoveredZone === zone.id ? "border-foreground bg-foreground text-white" : "border-border text-muted"
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>
    </div>
  );
}
