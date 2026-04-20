import { ConditionDetail } from "../conditions";

export const shouldersConditions: ConditionDetail[] = [
  {
    slug: "rounded-shoulders", name: "Rounded Shoulders", category: "shoulders-upper-back", brief: "Shoulders roll forward due to tight chest muscles and weak upper back.", icon: "🔄",
    overview: "Rounded shoulders occur when the shoulders drift forward from their neutral alignment, typically caused by tight pectoral muscles and weak upper back muscles. This is extremely common in desk workers, drivers, and anyone who spends extended time with arms in front of the body. The muscle imbalance creates a cycle — tight chest pulls shoulders forward, weak back muscles fail to pull them back.",
    symptoms: ["Shoulders visibly rolled forward when standing naturally","Tightness across the chest","Pain or aching between the shoulder blades","Upper back fatigue","Reduced shoulder range of motion, especially overhead","Difficulty maintaining upright posture","Neck pain (secondary to compensatory positioning)"],
    selfTests: [
      { name: "Standing Palm Test", steps: ["Stand naturally with arms at your sides.","Look at your hand position.","If your palms face behind you (thumbs pointing inward), your shoulders are likely rounded.","Neutral alignment shows palms facing your thighs."] },
      { name: "Lying Shoulder Test", steps: ["Lie on your back on a flat surface.","Let arms rest at your sides naturally.","If your shoulders don't touch the floor, or there's a significant gap, you have rounded shoulders."] },
    ],
    stretches: [
      { name: "Doorway Pec Stretch", target: "Pectoralis major/minor", instructions: "Stand in a doorway with arms at 90°. Lean forward until you feel a stretch across the chest. Hold 30 seconds.", duration: "30s × 3" },
      { name: "Cross-Body Shoulder Stretch", target: "Posterior deltoid", instructions: "Bring one arm across your chest. Use the other hand to gently press above the elbow. Hold 30 seconds.", duration: "30s × 3 each" },
      { name: "Foam Roller Chest Opener", target: "Pectorals, anterior deltoids", instructions: "Lie lengthwise on a foam roller. Let arms fall to the sides with palms up. Relax and breathe deeply.", duration: "2–3 min" },
    ],
    exercises: [
      { name: "Band Pull-Aparts", target: "Rear deltoids, rhomboids", instructions: "Hold band at shoulder height. Pull apart squeezing shoulder blades. Control the return.", reps: "15 × 3 sets" },
      { name: "Prone Y-T-W Raises", target: "Lower/mid trapezius", instructions: "Lie face down. Perform arm raises in Y, T, then W positions. Squeeze shoulder blades each rep.", reps: "8 each × 3 sets" },
      { name: "Face Pulls", target: "Rear deltoids, external rotators", instructions: "Use a band at face height. Pull toward face with elbows high. Externally rotate at end range.", reps: "12 × 3 sets" },
      { name: "Wall Angels", target: "Scapular stabilizers", instructions: "Back against wall. Arms in goal-post position. Slide up and down keeping contact with wall.", reps: "10 × 3 sets" },
    ],
    dailyHabits: ["Open your chest by rolling shoulders back and down periodically.","Set up your desk so your arms aren't reaching forward.","Avoid crossing arms for prolonged periods.","Sleep on your back or side — avoid stomach sleeping.","Strengthen awareness: check shoulder position hourly."],
    timeline: [
      { week: "Weeks 1–2", description: "Chest stretching provides immediate relief. Begin awareness of shoulder position throughout the day." },
      { week: "Weeks 3–4", description: "Chest feels more open. Strengthening helps shoulders hold corrected position for longer." },
      { week: "Weeks 5–8", description: "Visible improvement in shoulder alignment. Upper back muscles are adapting to new demands." },
      { week: "Weeks 8–12", description: "Neutral shoulder position becomes your default. Continue maintenance exercises 3× per week." },
    ],
  },
  {
    slug: "kyphosis", name: "Kyphosis", category: "shoulders-upper-back", brief: "Excessive rounding of the upper back creating a hunched appearance.", icon: "🏔️",
    overview: "Kyphosis refers to an excessive outward curvature of the thoracic spine, creating a rounded or hunched upper back. While some thoracic curvature is normal (20–45°), postural kyphosis exceeds this range. It develops from prolonged slouching, weak extensor muscles, and tight anterior muscles. Unlike structural kyphosis (Scheuermann's), postural kyphosis is reversible with targeted intervention.",
    symptoms: ["Visibly rounded upper back","Stiffness in the thoracic spine","Difficulty standing fully upright","Fatigue when trying to maintain good posture","Aching between the shoulder blades","Tight chest and anterior shoulders","Secondary neck pain from compensatory head positioning"],
    selfTests: [
      { name: "Wall Test", steps: ["Stand with heels 6 inches from a wall.","Try to press your upper back and head against the wall.","If you cannot touch both without arching your lower back, you likely have kyphosis."] },
      { name: "Photo Assessment", steps: ["Have someone photograph you from the side in your natural standing posture.","Look at the curve of your upper back.","An exaggerated C-shape indicates kyphosis."] },
    ],
    stretches: [
      { name: "Thoracic Extension on Foam Roller", target: "Thoracic spine", instructions: "Place roller under upper back. Support head with hands. Gently extend over roller. Hold 5 seconds at each segment.", duration: "3 min" },
      { name: "Cat-Cow Stretch", target: "Entire spine", instructions: "On hands and knees. Alternate between arching (cow) and rounding (cat) your back. Focus on thoracic movement.", duration: "10 cycles × 3" },
      { name: "Pec Stretch", target: "Pectorals", instructions: "Stand in a doorway. Place arms on the frame at 90°. Step forward to stretch the chest.", duration: "30s × 3" },
    ],
    exercises: [
      { name: "Thoracic Extension", target: "Thoracic erector spinae", instructions: "Sit in a chair. Place hands behind head. Extend upper back over the chair back. Hold 3 seconds.", reps: "10 × 3 sets" },
      { name: "Prone Y Raises", target: "Lower trapezius", instructions: "Lie face down. Lift arms overhead in Y shape by squeezing shoulder blades. Hold 3 seconds.", reps: "10 × 3 sets" },
      { name: "Seated Row (Band)", target: "Rhomboids, mid trapezius", instructions: "Sit with band around feet. Pull band toward waist squeezing shoulder blades. Slow return.", reps: "12 × 3 sets" },
    ],
    dailyHabits: ["Avoid prolonged slouching — set 30-minute posture reminders.","Use a lumbar support to help maintain thoracic extension while seated.","Practice thoracic extension stretches during work breaks.","Strengthen upper back 3–4 times per week.","When reading, hold material at eye level."],
    timeline: [
      { week: "Weeks 1–2", description: "Thoracic mobility exercises reduce stiffness. You begin noticing how often you slouch." },
      { week: "Weeks 3–4", description: "Extension range improves. You can hold an upright posture for longer periods." },
      { week: "Weeks 5–8", description: "Upper back strength increases. The rounded posture is less pronounced." },
      { week: "Weeks 8–12", description: "Meaningful improvement in thoracic curve. Upright posture feels more natural." },
    ],
  },
  {
    slug: "scapular-winging", name: "Scapular Winging", category: "shoulders-upper-back", brief: "Shoulder blades protrude from the back due to muscle weakness.", icon: "🦋",
    overview: "Scapular winging occurs when the medial (inner) border of the shoulder blade lifts away from the rib cage, creating a visible protrusion. This is primarily caused by weakness of the serratus anterior muscle, though the lower trapezius and rhomboids may also contribute. It affects shoulder mechanics, reducing overhead strength and increasing injury risk.",
    symptoms: ["Visible protrusion of one or both shoulder blades","Pain around the shoulder blade","Weakness with overhead movements","Difficulty performing push-ups","Clicking or snapping sensation around the scapula","Shoulder fatigue during arm activities","Reduced shoulder range of motion"],
    selfTests: [
      { name: "Wall Push-Up Test", steps: ["Stand facing a wall at arm's length.","Perform a slow wall push-up.","Have someone observe your shoulder blades.","If one or both wing out (lift off your back), you have scapular winging."] },
      { name: "Mirror Check", steps: ["Stand with your back to a mirror. Look over your shoulder.","Let your arms hang naturally.","Check if the inner edges of your shoulder blades stick out prominently."] },
    ],
    stretches: [
      { name: "Pec Minor Release", target: "Pectoralis minor", instructions: "Place a lacrosse ball between your chest (below collarbone) and a wall. Roll gently to release tight spots.", duration: "1–2 min each side" },
      { name: "Thoracic Rotation", target: "Thoracic spine", instructions: "On hands and knees. Place one hand behind head. Rotate that elbow toward the ceiling. Return. Repeat.", duration: "10 × each side" },
    ],
    exercises: [
      { name: "Serratus Anterior Punch", target: "Serratus anterior", instructions: "Lie on back. Hold light weight arm extended toward ceiling. Push arm further toward ceiling by protracting shoulder blade.", reps: "12 × 3 sets" },
      { name: "Scapular Push-Ups", target: "Serratus anterior", instructions: "In push-up position. Without bending elbows, let shoulder blades come together, then push them apart.", reps: "12 × 3 sets" },
      { name: "Low Trap Raises", target: "Lower trapezius", instructions: "Lie face down on an incline bench. Arms hanging down. Raise arms in a Y shape with thumbs up.", reps: "10 × 3 sets" },
    ],
    dailyHabits: ["Avoid carrying heavy bags on one shoulder.","Practice scapular push-ups daily.","When sitting, gently press shoulder blades flat against the chair back.","Avoid excessive overhead activity until strength improves.","Focus on serratus anterior activation during all pushing movements."],
    timeline: [
      { week: "Weeks 1–2", description: "Learn to activate the serratus anterior. You may struggle to feel the muscle initially." },
      { week: "Weeks 3–4", description: "Improved mind-muscle connection. Winging may be slightly less pronounced during exercises." },
      { week: "Weeks 5–8", description: "Noticeable strength gains. Winging reduces during daily activities." },
      { week: "Weeks 8–12", description: "Significant improvement. Shoulder blades sit flatter against the rib cage." },
    ],
  },
];
