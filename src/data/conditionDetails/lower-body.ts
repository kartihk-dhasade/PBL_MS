import { ConditionDetail } from "../conditions";

export const lowerBodyConditions: ConditionDetail[] = [
  {
    slug: "knee-valgus", name: "Knee Valgus", category: "lower-body", brief: "Knees collapse inward during standing or movement patterns.", icon: "🦵",
    overview: "Knee valgus (knock knees) occurs when the knees cave inward toward the midline during standing, walking, or squatting. It results from weak hip abductors (especially gluteus medius), tight adductors, and poor ankle mobility. Knee valgus increases stress on the medial knee, ACL, and patellofemoral joint, raising injury risk significantly. Correcting it requires strengthening the entire lateral hip chain.",
    symptoms: ["Knees visibly pointing inward when standing or squatting","Medial (inner) knee pain","Patellofemoral pain (front of knee)","Ankle pronation (flat feet often coexist)","Difficulty maintaining knee alignment during lunges or stairs","Hip weakness when standing on one leg","IT band tightness"],
    selfTests: [
      { name: "Single Leg Squat Test", steps: ["Stand on one leg.","Slowly lower into a partial squat.","Watch your knee in a mirror.","If the knee dives inward past the big toe — you have functional knee valgus."] },
      { name: "Overhead Squat Assessment", steps: ["Stand with feet shoulder-width apart.","Squat down with arms overhead.","Observe from the front.","If knees collapse inward during the squat, valgus is present."] },
    ],
    stretches: [
      { name: "Adductor Stretch", target: "Hip adductors", instructions: "Sit with soles of feet together. Gently press knees toward the floor. Hold 30 seconds.", duration: "30s × 3" },
      { name: "IT Band Foam Roll", target: "IT band", instructions: "Lie on your side on a foam roller at the outer thigh. Roll from hip to just above knee. Pause on tender spots.", duration: "2 min each side" },
      { name: "Calf Stretch", target: "Gastrocnemius/soleus", instructions: "Stand facing a wall. Step one foot back. Press heel into floor and lean forward. Hold 30 seconds.", duration: "30s × 3 each" },
    ],
    exercises: [
      { name: "Clamshells", target: "Gluteus medius", instructions: "Lie on side, knees bent 90°. Keep feet together. Open top knee like a clamshell. Hold 2 seconds at top.", reps: "15 × 3 each side" },
      { name: "Banded Squats", target: "Glutes, quads", instructions: "Place band above knees. Squat while actively pushing knees outward against the band.", reps: "12 × 3 sets" },
      { name: "Side-Lying Hip Abduction", target: "Gluteus medius/minimus", instructions: "Lie on side, legs straight. Lift top leg toward ceiling keeping hips stacked. Hold 2 seconds.", reps: "15 × 3 each side" },
      { name: "Single Leg Glute Bridge", target: "Gluteus maximus", instructions: "Lie on back. Extend one leg. Bridge up on the planted foot. Keep hips level.", reps: "10 × 3 each side" },
    ],
    dailyHabits: ["Be conscious of knee alignment when walking and climbing stairs.","Avoid sitting with legs crossed for prolonged periods.","When squatting (picking things up), actively push knees outward.","Wear supportive footwear if you have flat feet.","Practice single-leg balance daily to build hip stability."],
    timeline: [
      { week: "Weeks 1–2", description: "Learn to activate gluteus medius. Build awareness of knee position during daily activities." },
      { week: "Weeks 3–4", description: "Hip abductor strength begins to improve. Knee tracking improves during controlled exercises." },
      { week: "Weeks 5–8", description: "Visible improvement in knee alignment during squats and walking." },
      { week: "Weeks 8–12", description: "Significant valgus correction. Knees track properly during most activities." },
    ],
  },
  {
    slug: "flat-feet", name: "Flat Feet", category: "lower-body", brief: "Arches of the feet are flattened, affecting alignment up the chain.", icon: "🦶",
    overview: "Flat feet (pes planus) occurs when the medial longitudinal arch of the foot collapses, causing the entire sole to contact the ground. This alters biomechanics up the entire kinetic chain — contributing to ankle pronation, knee valgus, hip issues, and even lower back pain. While some people are born with flat feet, many develop them from weak intrinsic foot muscles, improper footwear, and prolonged standing on hard surfaces.",
    symptoms: ["Visible lack of foot arch when standing","Feet roll inward (overpronation)","Foot pain or fatigue after standing/walking","Shin splints","Knee pain (secondary)","Ankle instability","Shoes wear down unevenly on the inner edge"],
    selfTests: [
      { name: "Wet Footprint Test", steps: ["Wet the bottom of your foot.","Step onto a dark piece of paper or cardboard.","Examine the print.","If you see a complete footprint with no curve on the inner side, you have flat feet."] },
      { name: "Arch Observation", steps: ["Stand naturally and have someone look at your feet from behind.","If the inner ankle bones appear to roll inward and the arch is not visible, flat feet are present."] },
    ],
    stretches: [
      { name: "Calf Stretch", target: "Gastrocnemius", instructions: "Face a wall. Step back with one foot. Keep heel on ground and lean forward. Hold 30 seconds.", duration: "30s × 3 each" },
      { name: "Plantar Fascia Release", target: "Plantar fascia", instructions: "Roll a tennis ball or frozen water bottle under the arch of your foot. Apply moderate pressure.", duration: "2 min each foot" },
    ],
    exercises: [
      { name: "Short Foot Exercise", target: "Intrinsic foot muscles", instructions: "Sit with feet flat. Try to shorten your foot by pulling the arch up without curling toes. Hold 5 seconds.", reps: "10 × 3 sets" },
      { name: "Towel Scrunches", target: "Toe flexors, arch muscles", instructions: "Place a towel on the floor. Use toes to scrunch it toward you. Spread it back out.", reps: "10 × 3 sets" },
      { name: "Single Leg Balance", target: "Ankle stabilizers, arch", instructions: "Stand on one foot. Maintain balance for 30 seconds. Focus on keeping the arch lifted.", reps: "30s × 3 each foot" },
      { name: "Heel Raises", target: "Posterior tibialis, calves", instructions: "Stand on edge of a step. Rise onto toes slowly. Lower slowly below step level.", reps: "15 × 3 sets" },
    ],
    dailyHabits: ["Go barefoot on varied surfaces when safe to strengthen intrinsic foot muscles.","Avoid completely flat, unsupportive shoes.","Practice the short foot exercise while sitting at your desk.","Consider arch-supporting insoles for daily shoes.","Strengthen feet daily — they respond quickly to training."],
    timeline: [
      { week: "Weeks 1–2", description: "Begin activating intrinsic foot muscles. Short foot exercise may feel difficult initially." },
      { week: "Weeks 3–4", description: "Improved mind-muscle connection in the arch. Foot fatigue during exercises decreases." },
      { week: "Weeks 5–8", description: "Visible improvement in arch when weight-bearing. Foot pain and fatigue reduce." },
      { week: "Weeks 8–12", description: "Functional arch improvement. Downstream effects (knee, hip) begin to improve as well." },
    ],
  },
  {
    slug: "tight-hip-flexors", name: "Tight Hip Flexors", category: "lower-body", brief: "Shortened hip flexor muscles from prolonged sitting.", icon: "🪑",
    overview: "Tight hip flexors are one of the most widespread postural issues in the modern sedentary population. The iliopsoas and rectus femoris shorten adaptively when you sit for extended periods. This tightness pulls the pelvis into anterior tilt, increases lumbar lordosis, inhibits glute activation, and can contribute to lower back pain, hip pain, and reduced athletic performance. Addressing tight hip flexors is foundational to correcting most lower body postural issues.",
    symptoms: ["Tightness or pulling sensation at the front of the hip","Lower back pain, especially when standing","Difficulty standing fully upright after sitting","Anterior pelvic tilt","Weak or inhibited glutes","Hip pain during or after exercise","Reduced hip extension range of motion"],
    selfTests: [
      { name: "Thomas Test", steps: ["Sit on the edge of a table or firm bed.","Lie back while pulling one knee to your chest.","Let the other leg hang freely.","If the hanging thigh rises above horizontal or the knee bends significantly — hip flexors are tight."] },
      { name: "Standing Lunge Test", steps: ["Step into a deep lunge.","Try to keep your torso upright.","If you feel a strong pull at the front of the back hip, or your back arches to compensate — hip flexors are tight."] },
    ],
    stretches: [
      { name: "Half-Kneeling Hip Flexor Stretch", target: "Iliopsoas", instructions: "Kneel on one knee. Push hips forward gently. Keep torso upright. Squeeze back glute. Hold 30 seconds.", duration: "30s × 3 each side" },
      { name: "Couch Stretch", target: "Rectus femoris, iliopsoas", instructions: "Kneel with back foot elevated on a couch/wall behind you. Push hips forward. This is intense — build up gradually.", duration: "30s × 3 each side" },
      { name: "Pigeon Pose", target: "Hip flexors, external rotators", instructions: "From a push-up position, bring one knee forward toward the same-side wrist. Lower hips toward the floor.", duration: "30s–1 min each side" },
    ],
    exercises: [
      { name: "Glute Bridges", target: "Glutes (reciprocal inhibition)", instructions: "Lie on back, knees bent. Lift hips by squeezing glutes. Hold 3 seconds at top. Strong glutes counteract tight flexors.", reps: "12 × 3 sets" },
      { name: "Psoas March", target: "Core stability with hip flexion", instructions: "Lie on back. Press lower back into floor. Slowly lift one foot 2 inches off ground. Alternate legs.", reps: "10 each side × 3" },
      { name: "Standing Hip Extension", target: "Glutes, hip extensors", instructions: "Stand tall. Extend one leg straight behind you. Squeeze the glute. Hold 2 seconds. Return.", reps: "12 × 3 each side" },
    ],
    dailyHabits: ["Stand up and walk for 2 minutes every 30 minutes of sitting.","Perform the half-kneeling stretch after every prolonged sitting session.","Avoid sitting on soft, deep couches that flex the hips excessively.","Squeeze your glutes when standing — this helps lengthen hip flexors.","Sleep on your back or side — avoid stomach sleeping which shortens hip flexors."],
    timeline: [
      { week: "Weeks 1–2", description: "Daily stretching provides immediate relief. You become aware of how tight the hip flexors truly are." },
      { week: "Weeks 3–4", description: "Noticeable flexibility improvement. Glute activation improves as hip flexors lengthen." },
      { week: "Weeks 5–8", description: "Standing posture improves. Pelvic tilt reduces. Lower back pain decreases." },
      { week: "Weeks 8–12", description: "Functional hip flexor length restored. Maintain with daily stretching and regular movement." },
    ],
  },
];
