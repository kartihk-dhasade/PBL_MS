import { ConditionDetail } from "../conditions";

export const headNeckConditions: ConditionDetail[] = [
  {
    slug: "forward-head-posture", name: "Forward Head Posture", category: "head-neck", brief: "Head positioned in front of the shoulders, often caused by prolonged screen use.", icon: "🧠",
    overview: "Forward Head Posture (FHP) occurs when the head shifts forward relative to the shoulders. For every inch the head moves forward, an additional 10 pounds of force is placed on the cervical spine. This is one of the most common postural dysfunctions seen in clinical practice, largely driven by prolonged desk work, smartphone use, and poor ergonomic habits. Left unaddressed, FHP can lead to chronic neck pain, tension headaches, and reduced range of motion.",
    symptoms: ["Neck pain and stiffness, especially at the end of the day","Tension headaches originating from the base of the skull","Pain between the shoulder blades","Jaw pain or TMJ dysfunction","Rounded upper back (often co-exists with kyphosis)","Reduced ability to turn the head fully","Fatigue in the neck and shoulder muscles","Numbness or tingling in the arms (in severe cases)"],
    selfTests: [
      { name: "Wall Test", steps: ["Stand with your back against a flat wall.","Place your heels about 6 inches from the wall.","Press your buttocks and shoulder blades against the wall.","Check if the back of your head naturally touches the wall.","If your head does not touch — you likely have forward head posture."] },
      { name: "Photo Test", steps: ["Have someone take a side-profile photo of you standing naturally.","Draw a vertical line from the center of your ear downward.","This line should pass through the center of your shoulder.","If the line falls in front of the shoulder, your head is forward."] },
    ],
    stretches: [
      { name: "Upper Trapezius Stretch", target: "Upper trapezius", instructions: "Sit tall. Gently pull your head toward one shoulder with the opposite hand. Hold for 30 seconds. Repeat other side.", duration: "30s × 3 each side" },
      { name: "Suboccipital Release", target: "Suboccipital muscles", instructions: "Place two tennis balls in a sock. Lie down and position them at the base of your skull. Gently nod your head up and down.", duration: "2–3 min" },
      { name: "SCM Stretch", target: "Sternocleidomastoid", instructions: "Tilt your head back slightly. Rotate to one side. Feel a stretch along the front/side of your neck. Hold 30 seconds.", duration: "30s × 3 each side" },
      { name: "Chest Doorway Stretch", target: "Pectoralis major/minor", instructions: "Stand in a doorway. Place forearms on the door frame at 90°. Step forward and lean gently until you feel a chest stretch.", duration: "30s × 3" },
    ],
    exercises: [
      { name: "Chin Tucks", target: "Deep neck flexors", instructions: "Sit or stand tall. Pull your chin straight back making a double chin. Hold 5 seconds. Return to start.", reps: "10 × 3 sets" },
      { name: "Prone Y Raises", target: "Lower trapezius", instructions: "Lie face down. Extend arms in a Y. Lift arms by squeezing shoulder blades. Hold 3 seconds.", reps: "10 × 3 sets" },
      { name: "Wall Angels", target: "Rhomboids, lower traps", instructions: "Stand with back against wall. Place arms in goal-post position. Slide arms up and down maintaining wall contact.", reps: "10 × 3 sets" },
      { name: "Band Pull-Aparts", target: "Rear deltoids, rhomboids", instructions: "Hold resistance band at shoulder height. Pull apart by squeezing shoulder blades. Slowly return.", reps: "15 × 3 sets" },
    ],
    dailyHabits: ["Position monitor at eye level.","Hold phone at eye level instead of looking down.","Take a chin tuck break every 30 minutes of desk work.","Sleep with a supportive cervical pillow.","Adjust your car headrest to touch the back of your head.","Set hourly reminders to check head position."],
    timeline: [
      { week: "Weeks 1–2", description: "Focus on body awareness and habit formation. Start with gentle stretches and chin tucks." },
      { week: "Weeks 3–4", description: "Add strengthening exercises. Stretching becomes easier. Improved resting position for short periods." },
      { week: "Weeks 5–8", description: "Strengthening is the focus. Corrected posture feels more natural for longer periods." },
      { week: "Weeks 8–12", description: "Significant improvement. Corrected posture feels like your new normal. Continue maintenance 3–4× per week." },
    ],
  },
  {
    slug: "tech-neck", name: "Tech Neck", category: "head-neck", brief: "Neck strain from looking down at devices for extended periods.", icon: "📱",
    overview: "Tech Neck (also called text neck) is a modern postural syndrome caused by prolonged flexion of the cervical spine while looking down at smartphones, tablets, and laptops. The average person spends 2–4 hours per day with their head tilted forward, placing up to 60 pounds of force on the cervical spine. Over time, this leads to muscle imbalances, disc compression, and chronic pain.",
    symptoms: ["Aching pain in the neck and upper back","Stiffness when looking up after device use","Headaches concentrated at the base of the skull","Sharp pain between shoulder blades","Reduced neck range of motion","Shoulder tension and tightness","Tingling or numbness in the hands (advanced cases)"],
    selfTests: [
      { name: "Device Position Test", steps: ["Use your phone normally for 2 minutes.","Have someone photograph your posture from the side.","Note the angle of your neck — anything over 15° of forward flexion indicates tech neck."] },
      { name: "Look-Up Test", steps: ["After 30 minutes of device use, try to look straight up at the ceiling.","If you feel significant stiffness, tightness, or pain — your neck muscles are being affected."] },
    ],
    stretches: [
      { name: "Neck Extension Stretch", target: "Anterior neck muscles", instructions: "Gently tilt your head back looking at the ceiling. Hold 15 seconds. Return slowly. Avoid if you feel dizzy.", duration: "15s × 5" },
      { name: "Lateral Neck Stretch", target: "Scalenes, upper trapezius", instructions: "Drop one ear toward the shoulder. Use same-side hand to gently add pressure. Hold 30 seconds each side.", duration: "30s × 3 each side" },
      { name: "Levator Scapulae Stretch", target: "Levator scapulae", instructions: "Turn head 45° to one side. Tuck chin down toward armpit. Use hand to gently assist. Hold 30 seconds.", duration: "30s × 3 each side" },
    ],
    exercises: [
      { name: "Chin Tucks", target: "Deep cervical flexors", instructions: "Retract chin straight back without tilting head. Hold 5 seconds. Repeat.", reps: "10 × 3 sets" },
      { name: "Prone Cobra", target: "Thoracic extensors", instructions: "Lie face down, arms at sides. Lift chest and squeeze shoulder blades. Hold 10 seconds.", reps: "8 × 3 sets" },
      { name: "Resistance Band Rows", target: "Mid/lower trapezius", instructions: "Attach band at chest height. Pull toward you squeezing shoulder blades. Slow return.", reps: "12 × 3 sets" },
    ],
    dailyHabits: ["Hold devices at eye level.","Use a laptop stand to raise screen height.","Follow the 20-20-20 rule: every 20 min, look 20 feet away for 20 seconds.","Limit continuous device use to 20-minute blocks.","Stretch neck gently every hour."],
    timeline: [
      { week: "Weeks 1–2", description: "Reduce device-related strain. Build awareness of head position during device use." },
      { week: "Weeks 3–4", description: "Stretching reduces stiffness. Begin strengthening weak posterior chain muscles." },
      { week: "Weeks 5–8", description: "Noticeable reduction in end-of-day neck pain. Better device ergonomics become habitual." },
      { week: "Weeks 8–12", description: "Significant symptom relief. Maintain with daily stretches and ergonomic habits." },
    ],
  },
  {
    slug: "neck-pain", name: "Neck Pain", category: "head-neck", brief: "Chronic or acute neck discomfort often linked to poor posture habits.", icon: "😣",
    overview: "Postural neck pain is one of the most common musculoskeletal complaints, affecting up to 70% of adults at some point. It typically results from sustained poor positioning of the cervical spine — slouching at a desk, sleeping in awkward positions, or carrying heavy bags. Unlike acute injuries, postural neck pain develops gradually and is maintained by muscle imbalances and poor daily habits.",
    symptoms: ["Dull, aching pain in the neck","Stiffness and reduced range of motion","Pain that worsens through the day","Headaches starting from the neck","Muscle knots (trigger points) in the upper trapezius","Pain radiating to shoulders or between shoulder blades","Difficulty concentrating due to discomfort"],
    selfTests: [
      { name: "Range of Motion Test", steps: ["Sit upright. Slowly turn head to the right as far as comfortable.","Note the range. Repeat to the left.","Tilt ear to each shoulder.","Look up and down.","Significant asymmetry or pain during any movement suggests postural dysfunction."] },
      { name: "Trigger Point Check", steps: ["Press firmly along the top of your shoulders (upper trapezius).","Check the base of your skull.","If you find spots that are painful and refer pain elsewhere — these are trigger points contributing to your neck pain."] },
    ],
    stretches: [
      { name: "Upper Trapezius Stretch", target: "Upper trapezius", instructions: "Tilt ear toward shoulder. Apply gentle pressure with hand. Hold 30 seconds each side.", duration: "30s × 3 each" },
      { name: "Neck Rotation Stretch", target: "Cervical rotators", instructions: "Slowly turn head to one side until you feel a gentle stretch. Hold 20 seconds. Repeat other side.", duration: "20s × 3 each" },
      { name: "Chin-to-Chest Stretch", target: "Posterior cervical muscles", instructions: "Gently tuck chin and lower head forward. Place hands behind head for gentle assistance. Hold 20 seconds.", duration: "20s × 3" },
    ],
    exercises: [
      { name: "Isometric Neck Holds", target: "All cervical muscles", instructions: "Place hand on forehead. Push head into hand without moving. Hold 10 seconds. Repeat for sides and back of head.", reps: "5 × each direction" },
      { name: "Chin Tucks", target: "Deep neck flexors", instructions: "Pull chin straight back. Hold 5 seconds. Key exercise for neck pain relief.", reps: "10 × 3 sets" },
      { name: "Scapular Squeezes", target: "Rhomboids, mid trapezius", instructions: "Sit tall. Squeeze shoulder blades together. Hold 5 seconds. Release slowly.", reps: "12 × 3 sets" },
    ],
    dailyHabits: ["Set up workstation ergonomically — monitor at eye level, keyboard at elbow height.","Avoid holding phone between ear and shoulder.","Change positions every 30 minutes.","Use a supportive pillow that keeps cervical spine neutral.","Manage stress — tension directly increases neck muscle tightness."],
    timeline: [
      { week: "Weeks 1–2", description: "Pain awareness increases. Gentle stretching provides temporary relief. Focus on ergonomic changes." },
      { week: "Weeks 3–4", description: "Pain episodes become less frequent. Trigger points begin to release with consistent stretching." },
      { week: "Weeks 5–8", description: "Strengthening builds resilience. Neck feels more supported throughout the day." },
      { week: "Weeks 8–12", description: "Significant pain reduction. New habits are established. Maintenance program prevents recurrence." },
    ],
  },
];
