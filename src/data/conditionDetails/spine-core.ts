import { ConditionDetail } from "../conditions";

export const spineCoreConditions: ConditionDetail[] = [
  {
    slug: "anterior-pelvic-tilt", name: "Anterior Pelvic Tilt", category: "spine-core", brief: "Pelvis tilts forward causing an exaggerated lower back arch.", icon: "⬇️",
    overview: "Anterior Pelvic Tilt (APT) occurs when the front of the pelvis drops and the back rises, creating an excessive arch in the lower back. This is extremely common in people who sit for long periods. It results from tight hip flexors and lower back muscles combined with weak glutes and abdominals. APT changes the alignment of the entire spine and can contribute to lower back pain.",
    symptoms: ["Exaggerated curve in the lower back","Protruding belly (even in lean individuals)","Tight hip flexors","Lower back pain, especially when standing for long periods","Tight hamstrings (compensatory)","Glute weakness","Discomfort when lying flat on your back"],
    selfTests: [
      { name: "Thomas Test", steps: ["Lie on the edge of a bed/table.","Pull one knee to your chest and hold it.","Let the other leg hang off the edge.","If the hanging thigh rises above horizontal, your hip flexors are tight — indicating APT."] },
      { name: "Wall Test", steps: ["Stand with back against wall, heels 6 inches away.","Check the space between your lower back and the wall.","If you can fit more than your flat hand (>2 inches), you likely have APT."] },
    ],
    stretches: [
      { name: "Kneeling Hip Flexor Stretch", target: "Iliopsoas, rectus femoris", instructions: "Kneel on one knee. Push hips forward keeping torso upright. Squeeze the glute of the kneeling leg. Hold 30 seconds.", duration: "30s × 3 each side" },
      { name: "Quad Stretch", target: "Rectus femoris", instructions: "Stand on one leg. Pull other foot toward your glute. Keep knees together. Push hips slightly forward.", duration: "30s × 3 each side" },
      { name: "Lower Back Release", target: "Erector spinae", instructions: "Lie on back. Pull both knees to chest. Gently rock side to side. Breathe deeply.", duration: "1–2 min" },
    ],
    exercises: [
      { name: "Glute Bridges", target: "Gluteus maximus", instructions: "Lie on back, knees bent. Push through heels to lift hips. Squeeze glutes at top. Hold 3 seconds.", reps: "12 × 3 sets" },
      { name: "Dead Bugs", target: "Deep core (transverse abdominis)", instructions: "Lie on back. Arms to ceiling, legs at 90°. Slowly extend opposite arm and leg. Keep lower back pressed to floor.", reps: "8 each side × 3 sets" },
      { name: "Posterior Pelvic Tilts", target: "Abdominals", instructions: "Lie on back, knees bent. Flatten lower back into floor by engaging abs and tilting pelvis. Hold 5 seconds.", reps: "10 × 3 sets" },
      { name: "Plank", target: "Core stabilizers", instructions: "Hold a forearm plank with body in a straight line. Tuck pelvis slightly to avoid arching. Build up duration gradually.", reps: "20–60s × 3" },
    ],
    dailyHabits: ["Avoid sitting for more than 30 minutes without standing.","When standing, gently engage your glutes and core.","Avoid wearing high heels regularly — they promote APT.","Practice posterior pelvic tilts throughout the day.","Stretch hip flexors daily, especially after sitting."],
    timeline: [
      { week: "Weeks 1–2", description: "Hip flexor stretching provides immediate relief. Begin building awareness of pelvic position." },
      { week: "Weeks 3–4", description: "Glute and core activation improves. You can consciously correct pelvic position more easily." },
      { week: "Weeks 5–8", description: "Noticeable reduction in lower back arch. Core stability increases significantly." },
      { week: "Weeks 8–12", description: "Neutral pelvic position becomes more natural. Lower back pain significantly reduced." },
    ],
  },
  {
    slug: "posterior-pelvic-tilt", name: "Posterior Pelvic Tilt", category: "spine-core", brief: "Pelvis tucks under, flattening the natural lumbar curve.", icon: "⬆️",
    overview: "Posterior Pelvic Tilt (PPT) is the opposite of anterior tilt — the pelvis rotates backward, flattening the natural lumbar curve. This creates a slouched, flat-back appearance. It's common in people who sit slumped in chairs, those with tight hamstrings, or individuals with weak hip flexors and lower back extensors. PPT reduces shock absorption and can lead to disc issues.",
    symptoms: ["Flattened lower back (loss of natural curve)","Slouched sitting posture","Tight hamstrings","Lower back stiffness","Difficulty arching the lower back","Tucked-under tailbone appearance","Discomfort when sitting upright for long periods"],
    selfTests: [
      { name: "Wall Test", steps: ["Stand with back against wall.","Check space between lower back and wall.","If there is no gap (lower back is flat against the wall), you likely have PPT."] },
      { name: "Seated Posture Check", steps: ["Sit in a chair without back support.","Notice if you naturally slouch with a rounded lower back.","If you find it difficult to maintain the natural lumbar curve, PPT is likely present."] },
    ],
    stretches: [
      { name: "Hamstring Stretch", target: "Hamstrings", instructions: "Lie on back. Lift one leg straight up. Use a strap around the foot to gently pull the leg toward you. Keep knee straight. Hold 30 seconds.", duration: "30s × 3 each side" },
      { name: "Glute Stretch", target: "Gluteus maximus", instructions: "Lie on back. Cross one ankle over opposite knee. Pull the bottom leg toward your chest. Hold 30 seconds.", duration: "30s × 3 each side" },
    ],
    exercises: [
      { name: "Hip Flexor Strengthening", target: "Iliopsoas", instructions: "Sit on edge of chair. Lift one knee toward ceiling against hand resistance. Hold 5 seconds.", reps: "10 × 3 each side" },
      { name: "Superman", target: "Lower back extensors", instructions: "Lie face down. Simultaneously lift arms and legs off the floor. Hold 3 seconds. Lower slowly.", reps: "10 × 3 sets" },
      { name: "Bird-Dog", target: "Core and back extensors", instructions: "On hands and knees. Extend opposite arm and leg. Hold 3 seconds. Return with control.", reps: "8 each side × 3 sets" },
    ],
    dailyHabits: ["Sit on a slight wedge cushion to encourage lumbar curve.","Avoid slouching — use lumbar support.","Stand with a natural arch in your lower back.","Stretch hamstrings daily.","Strengthen lower back extensors 3× per week."],
    timeline: [
      { week: "Weeks 1–2", description: "Hamstring stretching reduces posterior pull on pelvis. Begin learning to maintain lumbar curve." },
      { week: "Weeks 3–4", description: "Lower back extensor activation improves. Sitting upright becomes less fatiguing." },
      { week: "Weeks 5–8", description: "Lumbar curve begins to normalize. Pelvic position improves in standing." },
      { week: "Weeks 8–12", description: "Natural lumbar curve is largely restored. Maintenance program keeps improvements." },
    ],
  },
  {
    slug: "lumbar-lordosis", name: "Lumbar Lordosis", category: "spine-core", brief: "Excessive inward curve of the lower back beyond normal range.", icon: "〰️",
    overview: "Hyperlordosis (excessive lumbar lordosis) is an exaggerated inward curve of the lower back. While some lordosis is normal and healthy, excessive curvature places increased stress on the lumbar facet joints and compresses the posterior disc space. It often coexists with anterior pelvic tilt and is commonly seen in individuals with weak core muscles, tight hip flexors, and weak glutes.",
    symptoms: ["Pronounced lower back arch","Lower back pain, especially after standing","Tight lower back muscles","Weak abdominal muscles","Protruding abdomen","Pain with prolonged standing or walking","Difficulty lying flat comfortably"],
    selfTests: [
      { name: "Wall Test", steps: ["Stand with back against wall.","Check the gap between lower back and wall.","More than a hand's thickness (2+ inches) suggests hyperlordosis."] },
      { name: "Prone Assessment", steps: ["Lie face down on a flat surface.","Have someone observe your lower back.","A visible significant arch while lying down indicates hyperlordosis."] },
    ],
    stretches: [
      { name: "Child's Pose", target: "Lower back extensors", instructions: "Kneel and sit back on heels. Extend arms forward on the floor. Rest forehead on the ground. Breathe deeply.", duration: "1–2 min" },
      { name: "Knee-to-Chest Stretch", target: "Lower back, glutes", instructions: "Lie on back. Pull both knees to chest. Hold and gently rock.", duration: "30s × 3" },
      { name: "Hip Flexor Stretch", target: "Iliopsoas", instructions: "Half-kneeling position. Push hips forward while keeping torso upright. Squeeze back glute.", duration: "30s × 3 each side" },
    ],
    exercises: [
      { name: "Pelvic Tilts", target: "Abdominals", instructions: "Lie on back, knees bent. Flatten lower back into floor by engaging abs. Hold 5 seconds. Release.", reps: "10 × 3 sets" },
      { name: "Dead Bug", target: "Deep core", instructions: "Lie on back, arms up, legs at 90°. Slowly extend opposite arm and leg while maintaining flat back.", reps: "8 each side × 3" },
      { name: "Glute Bridges", target: "Glutes", instructions: "Lie on back. Drive through heels to lift hips. Squeeze glutes. Hold 3 seconds at top.", reps: "12 × 3 sets" },
      { name: "Plank", target: "Core stabilizers", instructions: "Forearm plank. Tuck pelvis to prevent arching. Maintain straight line. Build duration.", reps: "20–60s × 3" },
    ],
    dailyHabits: ["Engage core gently when standing for long periods.","Avoid excessive arching during overhead activities.","Stretch hip flexors daily.","Strengthen core and glutes consistently.","Use a supportive chair that promotes neutral spine."],
    timeline: [
      { week: "Weeks 1–2", description: "Lower back stretching reduces discomfort. Pelvic tilts teach you to control lumbar position." },
      { week: "Weeks 3–4", description: "Core strength begins to build. You can flatten the curve consciously for longer periods." },
      { week: "Weeks 5–8", description: "Visible reduction in excessive lordosis. Standing and walking become more comfortable." },
      { week: "Weeks 8–12", description: "Lumbar curve normalizes. Core and glute strength maintain the correction." },
    ],
  },
];
