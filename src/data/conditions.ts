export interface Condition {
  slug: string;
  name: string;
  category: string;
  brief: string;
  icon: string;
}

export interface ConditionDetail extends Condition {
  overview: string;
  symptoms: string[];
  selfTests: { name: string; steps: string[] }[];
  stretches: { name: string; target: string; instructions: string; duration: string }[];
  exercises: { name: string; target: string; instructions: string; reps: string }[];
  dailyHabits: string[];
  timeline: { week: string; description: string }[];
}

export const categories = [
  { id: "head-neck", name: "Head & Neck", icon: "🧠" },
  { id: "shoulders-upper-back", name: "Shoulders & Upper Back", icon: "💪" },
  { id: "spine-core", name: "Spine & Core", icon: "🦴" },
  { id: "lower-body", name: "Lower Body", icon: "🦵" },
];

export const conditions: Condition[] = [
  { slug: "forward-head-posture", name: "Forward Head Posture", category: "head-neck", brief: "Head positioned in front of the shoulders, often caused by prolonged screen use.", icon: "🧠" },
  { slug: "tech-neck", name: "Tech Neck", category: "head-neck", brief: "Neck strain from looking down at devices for extended periods.", icon: "📱" },
  { slug: "neck-pain", name: "Neck Pain", category: "head-neck", brief: "Chronic or acute neck discomfort often linked to poor posture habits.", icon: "😣" },
  { slug: "rounded-shoulders", name: "Rounded Shoulders", category: "shoulders-upper-back", brief: "Shoulders roll forward due to tight chest muscles and weak upper back.", icon: "🔄" },
  { slug: "kyphosis", name: "Kyphosis", category: "shoulders-upper-back", brief: "Excessive rounding of the upper back creating a hunched appearance.", icon: "🏔️" },
  { slug: "scapular-winging", name: "Scapular Winging", category: "shoulders-upper-back", brief: "Shoulder blades protrude from the back due to muscle weakness.", icon: "🦋" },
  { slug: "anterior-pelvic-tilt", name: "Anterior Pelvic Tilt", category: "spine-core", brief: "Pelvis tilts forward causing an exaggerated lower back arch.", icon: "⬇️" },
  { slug: "posterior-pelvic-tilt", name: "Posterior Pelvic Tilt", category: "spine-core", brief: "Pelvis tucks under, flattening the natural lumbar curve.", icon: "⬆️" },
  { slug: "lumbar-lordosis", name: "Lumbar Lordosis", category: "spine-core", brief: "Excessive inward curve of the lower back beyond normal range.", icon: "〰️" },
  { slug: "knee-valgus", name: "Knee Valgus", category: "lower-body", brief: "Knees collapse inward during standing or movement patterns.", icon: "🦵" },
  { slug: "flat-feet", name: "Flat Feet", category: "lower-body", brief: "Arches of the feet are flattened, affecting alignment up the chain.", icon: "🦶" },
  { slug: "tight-hip-flexors", name: "Tight Hip Flexors", category: "lower-body", brief: "Shortened hip flexor muscles from prolonged sitting.", icon: "🪑" },
];

export const forwardHeadPosture: ConditionDetail = {
  slug: "forward-head-posture",
  name: "Forward Head Posture",
  category: "head-neck",
  brief: "Head positioned in front of the shoulders, often caused by prolonged screen use.",
  icon: "🧠",
  overview: "Forward Head Posture (FHP) occurs when the head shifts forward relative to the shoulders. For every inch the head moves forward, an additional 10 pounds of force is placed on the cervical spine. This is one of the most common postural dysfunctions seen in clinical practice, largely driven by prolonged desk work, smartphone use, and poor ergonomic habits. Left unaddressed, FHP can lead to chronic neck pain, tension headaches, and reduced range of motion.",
  symptoms: [
    "Neck pain and stiffness, especially at the end of the day",
    "Tension headaches originating from the base of the skull",
    "Pain between the shoulder blades",
    "Jaw pain or TMJ dysfunction",
    "Rounded upper back (often co-exists with kyphosis)",
    "Reduced ability to turn the head fully",
    "Fatigue in the neck and shoulder muscles",
    "Numbness or tingling in the arms (in severe cases)",
  ],
  selfTests: [
    {
      name: "Wall Test",
      steps: [
        "Stand with your back against a flat wall.",
        "Place your heels about 6 inches from the wall.",
        "Press your buttocks and shoulder blades against the wall.",
        "Check if the back of your head naturally touches the wall.",
        "If your head does not touch the wall (or you need to tilt it back to touch), you likely have forward head posture.",
      ],
    },
    {
      name: "Photo Test",
      steps: [
        "Have someone take a side-profile photo of you standing naturally.",
        "Draw a vertical line from the center of your ear downward.",
        "This line should pass through the center of your shoulder.",
        "If the line falls in front of the shoulder, your head is in a forward position.",
      ],
    },
    {
      name: "Chin Tuck Test",
      steps: [
        "Stand or sit in a natural position.",
        "Try to perform a chin tuck (pull your chin straight back).",
        "If you notice a significant range of motion (your head moves back considerably), this indicates your resting position is forward.",
      ],
    },
  ],
  stretches: [
    { name: "Upper Trapezius Stretch", target: "Upper trapezius", instructions: "Sit tall. Gently pull your head toward one shoulder with the opposite hand. Hold for 30 seconds. Repeat on the other side.", duration: "30 sec × 3 each side" },
    { name: "Suboccipital Release", target: "Suboccipital muscles", instructions: "Place two tennis balls in a sock. Lie down and position them at the base of your skull. Gently nod your head up and down, allowing the balls to massage the suboccipital muscles.", duration: "2–3 minutes" },
    { name: "SCM Stretch", target: "Sternocleidomastoid", instructions: "Tilt your head back slightly. Rotate your head to one side. You should feel a stretch along the front/side of your neck. Hold for 30 seconds.", duration: "30 sec × 3 each side" },
    { name: "Chest Doorway Stretch", target: "Pectoralis major/minor", instructions: "Stand in a doorway. Place your forearms on the door frame at 90 degrees. Step one foot forward and lean gently until you feel a stretch across your chest.", duration: "30 sec × 3" },
  ],
  exercises: [
    { name: "Chin Tucks", target: "Deep neck flexors", instructions: "Sit or stand tall. Pull your chin straight back (as if making a double chin). Hold for 5 seconds. Return to start.", reps: "10 reps × 3 sets" },
    { name: "Prone Y Raises", target: "Lower trapezius", instructions: "Lie face down on the floor. Extend arms overhead in a Y position. Lift arms off the ground by squeezing shoulder blades together. Hold for 3 seconds.", reps: "10 reps × 3 sets" },
    { name: "Wall Angels", target: "Rhomboids, lower traps, rotator cuff", instructions: "Stand with back against a wall. Place arms in a goal-post position against the wall. Slowly slide arms up and down while maintaining contact with the wall.", reps: "10 reps × 3 sets" },
    { name: "Band Pull-Aparts", target: "Rear deltoids, rhomboids", instructions: "Hold a resistance band at shoulder height with arms extended. Pull the band apart by squeezing your shoulder blades together. Slowly return to the start.", reps: "15 reps × 3 sets" },
  ],
  dailyHabits: [
    "Position your monitor at eye level — the top of the screen should be at or slightly below eye level.",
    "Hold your phone at eye level instead of looking down.",
    "Take a 30-second chin tuck break every 30 minutes of desk work.",
    "Sleep on your back with a supportive cervical pillow, or on your side with a pillow that keeps your spine neutral.",
    "When driving, adjust your headrest so it touches the back of your head naturally.",
    "Practice the chin tuck exercise while waiting in line, at traffic lights, or during TV commercials.",
    "Strengthen your awareness — set hourly reminders to check your head position.",
  ],
  timeline: [
    { week: "Weeks 1–2", description: "Focus on body awareness and habit formation. Start with gentle stretches and chin tucks. You may notice increased awareness of your forward head position throughout the day." },
    { week: "Weeks 3–4", description: "Begin adding strengthening exercises. Stretching should become easier. You may start noticing improved resting head position for short periods." },
    { week: "Weeks 5–8", description: "Strengthening becomes the focus. Your muscles are adapting to the new position. The corrected posture should feel more natural for longer periods." },
    { week: "Weeks 8–12", description: "Significant improvement in head position. The corrected posture should feel like your new normal. Continue maintenance exercises 3–4 times per week to sustain results." },
  ],
};
