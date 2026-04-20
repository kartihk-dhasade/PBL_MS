export interface Exercise {
  id: string;
  name: string;
  target: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  equipment: string;
  instructions: string[];
  duration: string;
}

export const exercises: Exercise[] = [
  { id: "chin-tucks", name: "Chin Tucks", target: "Deep Neck Flexors", category: "head-neck", difficulty: "Beginner", equipment: "None", instructions: ["Sit or stand with good posture.", "Pull your chin straight back, creating a double chin.", "Hold for 5 seconds.", "Return to starting position.", "Repeat 10 times."], duration: "2 min" },
  { id: "wall-angels", name: "Wall Angels", target: "Upper Back & Shoulders", category: "shoulders-upper-back", difficulty: "Beginner", equipment: "Wall", instructions: ["Stand with back flat against a wall.", "Place arms in goal-post position against the wall.", "Slowly slide arms up overhead.", "Maintain contact with the wall throughout.", "Return to start and repeat."], duration: "3 min" },
  { id: "prone-y-raises", name: "Prone Y Raises", target: "Lower Trapezius", category: "shoulders-upper-back", difficulty: "Beginner", equipment: "None", instructions: ["Lie face down on the floor.", "Extend arms overhead in a Y shape.", "Lift arms by squeezing shoulder blades.", "Hold for 3 seconds at the top.", "Lower and repeat."], duration: "3 min" },
  { id: "band-pull-aparts", name: "Band Pull-Aparts", target: "Rear Deltoids & Rhomboids", category: "shoulders-upper-back", difficulty: "Beginner", equipment: "Resistance Band", instructions: ["Hold band at shoulder height, arms extended.", "Pull the band apart by squeezing shoulder blades.", "Slowly return to start.", "Keep arms straight throughout.", "Repeat 15 times."], duration: "3 min" },
  { id: "cat-cow", name: "Cat-Cow Stretch", target: "Spine Mobility", category: "spine-core", difficulty: "Beginner", equipment: "None", instructions: ["Start on hands and knees.", "Inhale, drop belly and lift head (cow).", "Exhale, round spine and tuck chin (cat).", "Move slowly with breath.", "Repeat 10 cycles."], duration: "3 min" },
  { id: "dead-bug", name: "Dead Bug", target: "Core Stability", category: "spine-core", difficulty: "Intermediate", equipment: "None", instructions: ["Lie on back with arms reaching toward ceiling.", "Lift legs to 90-degree angle.", "Slowly extend opposite arm and leg.", "Keep lower back pressed into the floor.", "Return and repeat on other side."], duration: "4 min" },
  { id: "hip-flexor-stretch", name: "Hip Flexor Stretch", target: "Hip Flexors", category: "lower-body", difficulty: "Beginner", equipment: "None", instructions: ["Kneel on one knee in a lunge position.", "Push hips forward gently.", "Keep torso upright.", "Hold for 30 seconds.", "Switch sides and repeat."], duration: "3 min" },
  { id: "glute-bridge", name: "Glute Bridge", target: "Glutes & Core", category: "spine-core", difficulty: "Beginner", equipment: "None", instructions: ["Lie on back with knees bent, feet flat.", "Push through heels to lift hips.", "Squeeze glutes at the top.", "Hold for 3 seconds.", "Lower and repeat 12 times."], duration: "3 min" },
  { id: "clamshells", name: "Clamshells", target: "Hip Abductors", category: "lower-body", difficulty: "Beginner", equipment: "Optional Band", instructions: ["Lie on your side with knees bent 90 degrees.", "Keep feet together.", "Open top knee like a clamshell.", "Hold briefly at the top.", "Lower and repeat 15 times each side."], duration: "4 min" },
  { id: "thoracic-extension", name: "Thoracic Extension", target: "Upper Back", category: "shoulders-upper-back", difficulty: "Beginner", equipment: "Foam Roller", instructions: ["Place foam roller under upper back.", "Support head with hands.", "Gently extend over the roller.", "Hold for 5 seconds.", "Roll to next segment and repeat."], duration: "3 min" },
  { id: "scapular-push-ups", name: "Scapular Push-Ups", target: "Serratus Anterior", category: "shoulders-upper-back", difficulty: "Intermediate", equipment: "None", instructions: ["Start in push-up position.", "Without bending elbows, let shoulder blades come together.", "Then push shoulder blades apart.", "Move only the shoulder blades.", "Repeat 12 times."], duration: "3 min" },
  { id: "single-leg-balance", name: "Single Leg Balance", target: "Ankle & Foot Stability", category: "lower-body", difficulty: "Beginner", equipment: "None", instructions: ["Stand on one foot.", "Keep a slight bend in the standing knee.", "Hold for 30 seconds.", "Focus on maintaining arch of foot.", "Switch sides."], duration: "3 min" },
];
