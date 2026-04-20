export interface GuideSection {
  heading: string;
  content: string;
  steps?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  featured: boolean;
  overview: string;
  sections: GuideSection[];
  cta: string;
}

export const guides: Guide[] = [
  {
    slug: "proper-sitting-posture",
    title: "The Complete Guide to Proper Sitting Posture",
    category: "Ergonomics",
    readTime: "12 min",
    excerpt: "Everything you need to know about setting up your workstation and maintaining good posture throughout the workday.",
    featured: true,
    overview: "Most people spend 8–10 hours per day sitting. Poor sitting posture is the single biggest contributor to postural problems including forward head posture, rounded shoulders, and lower back pain. This guide covers the principles of ergonomic sitting and practical adjustments you can make today.",
    sections: [
      { heading: "The Ideal Sitting Position", content: "Your ideal sitting posture involves ears aligned over shoulders, shoulders over hips, feet flat on the floor, and a slight natural curve in the lower back. The goal is not rigid perfection — it's maintaining a position that minimizes stress on your muscles and joints.", steps: ["Sit with your hips pushed back in the chair.", "Keep feet flat on the floor, knees at 90 degrees.", "Maintain a small gap between the back of your knees and the seat.", "Rest your back against the chair with lumbar support.", "Keep shoulders relaxed, not shrugged or rounded.", "Position your head directly over your shoulders."] },
      { heading: "Monitor Setup", content: "Your monitor position has a direct impact on your neck and upper back posture. An incorrectly placed screen forces your head forward or your neck into flexion.", steps: ["Place the top of the screen at or slightly below eye level.", "Position the monitor an arm's length away (about 20–26 inches).", "Tilt the screen back 10–20 degrees.", "Center the screen directly in front of you — avoid twisting.", "If using a laptop, use an external keyboard and raise the screen."] },
      { heading: "Keyboard and Mouse Position", content: "Arm position affects shoulder and upper back tension. Your keyboard and mouse should allow your arms to stay relaxed at your sides.", steps: ["Keep elbows bent at 90–110 degrees.", "Forearms should be parallel to the floor.", "Wrists should be neutral — not bent up or down.", "Keep the mouse close to the keyboard to avoid reaching.", "Consider a split keyboard if you experience shoulder tension."] },
      { heading: "Chair Selection", content: "Not all chairs are created equal. A good ergonomic chair supports your natural spinal curves and allows adjustment. Look for adjustable seat height, lumbar support, armrest height, and seat depth. If buying a new chair isn't possible, a rolled-up towel behind your lower back provides effective lumbar support." },
      { heading: "Movement Breaks", content: "No sitting position is good enough to maintain for hours. The best posture is your next posture — meaning regular movement is essential.", steps: ["Stand up and move every 30 minutes.", "Perform 30-second stretches during breaks.", "Walk to get water, use the bathroom on a different floor.", "Try alternating between sitting and standing if you have a sit-stand desk.", "Do 5 chin tucks every hour to counteract forward head drift."] },
    ],
    cta: "Download our free Ergonomic Desk Setup Checklist",
  },
  {
    slug: "posture-while-sleeping",
    title: "Best Sleeping Positions for Your Posture",
    category: "Sleep",
    readTime: "8 min",
    excerpt: "Your sleeping position affects your posture more than you think. Learn the best positions and pillow setups for spinal health.",
    featured: false,
    overview: "You spend roughly one-third of your life sleeping. Your sleeping position directly influences spinal alignment, muscle tension, and whether you wake up stiff or refreshed. This guide covers the best and worst sleeping positions for posture and how to optimize your setup.",
    sections: [
      { heading: "Back Sleeping (Best)", content: "Sleeping on your back is generally the best position for spinal alignment. It distributes weight evenly and keeps your head, neck, and spine in a neutral position.", steps: ["Use a thin pillow that supports the natural curve of your neck without pushing your head forward.", "Place a small pillow or rolled towel under your knees to reduce lower back strain.", "Avoid using multiple stacked pillows — this pushes your head into forward flexion.", "Keep arms at your sides or on your chest, not overhead."] },
      { heading: "Side Sleeping (Good)", content: "Side sleeping is the second-best option and the most common position. The key is keeping your spine straight from head to tailbone.", steps: ["Use a pillow thick enough to fill the gap between your ear and the mattress.", "Place a pillow between your knees to keep hips aligned.", "Avoid curling into a tight fetal position — keep your body relatively straight.", "Alternate sides to prevent asymmetric muscle development."] },
      { heading: "Stomach Sleeping (Avoid)", content: "Stomach sleeping is the worst position for posture. It forces your neck into extreme rotation, flattens the natural lumbar curve, and compresses the cervical spine. If you currently sleep on your stomach, transition gradually to side sleeping by using a body pillow for support." },
      { heading: "Pillow Selection", content: "Your pillow should maintain cervical spine neutrality — meaning your neck shouldn't be flexed, extended, or side-bent. Back sleepers need a thinner pillow. Side sleepers need a thicker pillow. Stomach sleepers should use a very thin pillow or none at all (while transitioning away from this position). Memory foam or contoured cervical pillows are often the best choice." },
      { heading: "Mattress Considerations", content: "Your mattress should support your natural spinal curves. A mattress that's too soft allows your body to sink, creating spinal misalignment. Too firm and it creates pressure points. Medium-firm mattresses tend to work best for most people. Replace your mattress every 7–10 years." },
    ],
    cta: "Get our Sleep Posture Optimization Guide",
  },
  {
    slug: "posture-and-back-pain",
    title: "The Link Between Posture and Back Pain",
    category: "Pain Management",
    readTime: "10 min",
    excerpt: "Understanding how poor posture contributes to chronic back pain and what you can do about it.",
    featured: false,
    overview: "Back pain affects 80% of adults at some point in their lives, and poor posture is one of the most common contributing factors. When your spine is misaligned, muscles, ligaments, and discs are placed under abnormal stress. This guide explains the mechanism and provides actionable solutions.",
    sections: [
      { heading: "How Posture Causes Back Pain", content: "Your spine has natural curves — cervical lordosis, thoracic kyphosis, and lumbar lordosis. Poor posture exaggerates or flattens these curves, redistributing load unevenly. Slouching increases disc pressure by up to 190% compared to standing. Over time, this leads to muscle fatigue, trigger points, disc compression, and facet joint irritation." },
      { heading: "Upper Back Pain", content: "Upper back pain between the shoulder blades is almost always posture-related. It results from overstretched and weak rhomboids and middle trapezius muscles, combined with tight pectorals pulling the shoulders forward.", steps: ["Stretch the chest with doorway stretches daily.", "Strengthen the upper back with band pull-aparts and rows.", "Set up your workstation to prevent reaching forward.", "Practice scapular squeezes every hour."] },
      { heading: "Lower Back Pain", content: "Lower back pain from posture typically involves either excessive lordosis (too much arch) or loss of lordosis (flat back). Both create abnormal stress on the lumbar discs and facet joints.", steps: ["Identify whether you have anterior or posterior pelvic tilt.", "Stretch the hip flexors if you sit for long periods.", "Strengthen your core with dead bugs and planks.", "Use lumbar support when sitting.", "Avoid prolonged static positions — move every 30 minutes."] },
      { heading: "When to Seek Professional Help", content: "While most posture-related back pain responds well to exercise and habit changes, some symptoms require professional evaluation. Seek help if you experience pain radiating down your leg, numbness or tingling, loss of bladder or bowel control, pain that wakes you from sleep, or pain that doesn't improve after 6 weeks of consistent corrective exercise." },
    ],
    cta: "Get our Back Pain Recovery Program",
  },
  {
    slug: "desk-stretches",
    title: "10 Stretches You Can Do at Your Desk",
    category: "Exercises",
    readTime: "6 min",
    excerpt: "Quick, effective stretches designed for office workers who sit for long periods. No equipment needed.",
    featured: false,
    overview: "You don't need a gym or yoga mat to counteract the effects of sitting. These 10 stretches can be performed right at your desk in under 5 minutes. Do them every 1–2 hours for best results.",
    sections: [
      { heading: "Neck Stretches", content: "The neck bears the brunt of desk work. These three stretches target the most commonly tight muscles.", steps: ["Chin Tucks — Pull chin straight back, hold 5 seconds. Repeat 10 times.", "Upper Trap Stretch — Tilt ear to shoulder, gentle hand pressure. Hold 20 seconds each side.", "Neck Rotations — Slowly turn head to each side. Hold end range for 10 seconds."] },
      { heading: "Shoulder & Chest Stretches", content: "Opening up the chest counteracts the forward shoulder pull from typing and mouse work.", steps: ["Shoulder Rolls — Roll shoulders backward 10 times, then forward 10 times.", "Cross-Body Stretch — Pull one arm across your chest. Hold 20 seconds each side.", "Chest Opener — Clasp hands behind your back, lift arms and squeeze shoulder blades. Hold 15 seconds."] },
      { heading: "Back Stretches", content: "The upper and lower back stiffen quickly during prolonged sitting.", steps: ["Seated Twist — Cross one leg over the other. Twist toward the top knee. Hold 20 seconds each side.", "Cat-Cow (Seated) — Place hands on knees. Alternate between arching and rounding your back. 10 cycles.", "Thoracic Extension — Place hands behind head. Gently extend upper back over the chair. Hold 10 seconds."] },
      { heading: "Hip & Leg Stretches", content: "Tight hips from sitting contribute to lower back pain and pelvic tilt.", steps: ["Seated Figure-4 — Cross ankle over opposite knee. Lean forward gently. Hold 20 seconds each side.", "Standing Hip Flexor Stretch — Step one foot back into a lunge. Push hips forward. Hold 20 seconds each side."] },
    ],
    cta: "Download the printable Desk Stretch Routine",
  },
  {
    slug: "posture-myths",
    title: "5 Posture Myths Debunked",
    category: "Education",
    readTime: "7 min",
    excerpt: "Common misconceptions about posture that may be holding back your progress.",
    featured: false,
    overview: "There's a lot of misinformation about posture circulating online. Some of it is harmless, but some myths can actually prevent you from making progress. Here are five of the most common posture myths — and what the evidence actually says.",
    sections: [
      { heading: "Myth 1: There's One Perfect Posture", content: "Many people believe there's a single ideal posture they need to hold at all times. The reality is that the best posture is a dynamic one. Variation and movement are far more important than holding any one position perfectly. Your body is designed to move. The goal is to avoid sustained poor positions — not to achieve rigid perfection." },
      { heading: "Myth 2: Posture Correctors Fix Your Posture", content: "Wearable posture correctors (braces, straps) are extremely popular but fundamentally flawed as a long-term solution. They passively hold your shoulders back, which means your muscles don't have to work. Over time, this can actually weaken the muscles you need to strengthen. Use them sparingly as a reminder tool — not as a fix." },
      { heading: "Myth 3: Bad Posture Always Causes Pain", content: "Research shows that many people with significant postural deviations experience no pain at all, while some with near-perfect alignment have chronic pain. Posture is one factor among many — including stress, sleep, activity level, and genetics. That said, if your pain correlates with your posture, addressing it is absolutely worthwhile." },
      { heading: "Myth 4: You Can Fix Your Posture in a Week", content: "Postural change requires neuromuscular adaptation — your brain and muscles need to learn and sustain new patterns. While you may feel improvements within 1–2 weeks, meaningful structural change typically takes 8–12 weeks of consistent daily work. Be patient and focus on consistency over intensity." },
      { heading: "Myth 5: Sitting Up Straight Is Good Posture", content: "Forcing yourself to sit bolt upright with military posture is actually counterproductive. This position requires constant muscular effort, leads to fatigue, and often results in you slumping even more once tired. Good sitting posture is relaxed and supported — using your chair's backrest, maintaining a gentle lumbar curve, and keeping your body relaxed." },
    ],
    cta: "Get our Evidence-Based Posture Guide",
  },
  {
    slug: "morning-routine",
    title: "A 10-Minute Morning Posture Routine",
    category: "Routines",
    readTime: "5 min",
    excerpt: "Start your day with this quick routine designed to activate postural muscles and set you up for better alignment.",
    featured: false,
    overview: "How you start your morning sets the tone for your posture throughout the day. This 10-minute routine activates key postural muscles, releases overnight stiffness, and builds body awareness. Perform it immediately after waking, before sitting down.",
    sections: [
      { heading: "Minutes 1–2: Breathing & Awareness", content: "Start with diaphragmatic breathing to engage your core and release tension.", steps: ["Stand tall with feet hip-width apart.", "Place one hand on your chest, one on your belly.", "Breathe in through your nose — your belly should expand, not your chest.", "Exhale slowly through your mouth.", "Perform 10 deep breaths while focusing on tall, aligned posture."] },
      { heading: "Minutes 3–4: Neck & Shoulders", content: "Release overnight stiffness in the cervical spine and shoulders.", steps: ["Chin Tucks — 10 reps, hold 5 seconds each.", "Neck Rotations — Slowly turn head side to side, 5 each direction.", "Shoulder Rolls — 10 backward, 10 forward.", "Arm Circles — 10 small, 10 large in each direction."] },
      { heading: "Minutes 5–6: Thoracic Mobility", content: "Open up the upper back and chest after sleeping.", steps: ["Cat-Cow — On hands and knees, 10 slow cycles.", "Thread the Needle — From all fours, reach one arm under your body. 5 each side, hold 10 seconds.", "Doorway Chest Stretch — 30 seconds, 2 sets."] },
      { heading: "Minutes 7–8: Hip & Core Activation", content: "Wake up the glutes and core — the foundation of good posture.", steps: ["Glute Bridges — 12 reps, squeeze at top for 3 seconds.", "Dead Bugs — 8 reps each side, keep lower back flat.", "Bird-Dogs — 8 reps each side, hold 3 seconds."] },
      { heading: "Minutes 9–10: Standing Integration", content: "Bring it all together with standing exercises that reinforce good alignment.", steps: ["Wall Angels — 10 reps against a wall.", "Single Leg Balance — 30 seconds each foot.", "Posture Check — Stand tall, take 5 deep breaths, set your intention for good posture today."] },
    ],
    cta: "Download the printable Morning Routine Card",
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
