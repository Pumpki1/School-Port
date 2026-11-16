// ============================================================
//  content.js : every editable piece of the site lives here.
//
//  Anything that starts with "[PLACEHOLDER]" is shown with a soft
//  highlight on the site, so you can see what still needs filling.
//  Replace the text, delete the "[PLACEHOLDER]" part, and it shows
//  normally. No other file needs to change.
//
//  FILE TYPES for artifacts and achievements:
//    "pdf"  : a document   -> file: "files/your-file.pdf"
//    "img"  : an image     -> file: "assets/img/achievements/your-image.jpg"
//    "link" : a web link   -> file: "https://your-link.com"
// ============================================================

window.SITE = {

  // ---------- Profile (used on every page) ----------
  profile: {
    name: "Khen Mhar B. Ilao",
    shortName: "Khen Ilao",
    program: "BS Computer Engineering",
    school: "Jose Rizal University",
    year: "Fourth Year",
    graduation: "June 2027",
    location: "Pasig City, Philippines",
    photo: "assets/img/profile.jpg",
    email: "khenmhar.ilao@my.jru.edu",
    linkedin: "https://www.linkedin.com/in/khen-ilao-534572423",
    github: "https://github.com/Pumpki1",
    intro: "This portfolio presents the academic works, outputs, and reflections from my courses in the BS Computer Engineering program at Jose Rizal University."
  },

  // ---------- About page ----------
  about: {
    bio: [
      "Khen Mhar B. Ilao is a fourth year Bachelor of Science in Computer Engineering student at Jose Rizal University, expected to graduate in June 2027.",
      "[PLACEHOLDER] Describe your academic focus and the courses that shaped you the most.",
      "[PLACEHOLDER] Describe what you hope to achieve through your academic work."
    ],
    education: [
      { level: "College", school: "Bachelor of Science in Computer Engineering", place: "Jose Rizal University", note: "In progress, expected graduation June 2027", current: true },
      { level: "Senior High School", school: "Rizal High School" },
      { level: "Junior High School", school: "Rizal High School" },
      { level: "Elementary School", school: "Pasig Central Elementary School" }
    ],
    skills: [
      { label: "[PLACEHOLDER] Skill area", items: "[PLACEHOLDER] Skills developed through coursework" },
      { label: "[PLACEHOLDER] Skill area", items: "[PLACEHOLDER] Skills developed through coursework" },
      { label: "[PLACEHOLDER] Skill area", items: "[PLACEHOLDER] Skills developed through coursework" }
    ],
    involvements: [
      { title: "[PLACEHOLDER] Organization or activity", role: "[PLACEHOLDER] Your role", period: "[PLACEHOLDER] Period" },
      { title: "[PLACEHOLDER] Organization or activity", role: "[PLACEHOLDER] Your role", period: "[PLACEHOLDER] Period" }
    ]
  },

  // ---------- Relevant Works: one object per course ----------
  courses: [
    {
      id: "cpe-c313",
      code: "CPE C313",
      title: "Artificial Intelligence 1",
      description: "[PLACEHOLDER] A short description of what this course covers.",
      artifacts: [
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "pdf",
          file: "[PLACEHOLDER] files/your-file.pdf",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        },
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "pdf",
          file: "[PLACEHOLDER] files/your-file.pdf",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        },
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "link",
          file: "[PLACEHOLDER] https://your-link.com",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        }
      ]
    },
    {
      id: "egr-c204",
      code: "EGR C204",
      title: "Technopreneurship",
      description: "[PLACEHOLDER] A short description of what this course covers.",
      artifacts: [
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "pdf",
          file: "[PLACEHOLDER] files/your-file.pdf",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        },
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "pdf",
          file: "[PLACEHOLDER] files/your-file.pdf",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        }
      ]
    },
    {
      id: "course-3",
      code: "[PLACEHOLDER] Course code",
      title: "[PLACEHOLDER] Course title",
      description: "[PLACEHOLDER] A short description of what this course covers.",
      artifacts: [
        {
          title: "[PLACEHOLDER] Artifact title",
          type: "pdf",
          file: "[PLACEHOLDER] files/your-file.pdf",
          description: "[PLACEHOLDER] What this artifact is about.",
          outcomes: "[PLACEHOLDER] How this artifact contributes to the CpE Student Outcomes.",
          goals: "[PLACEHOLDER] How this artifact contributes to your personal goals."
        }
      ]
    }
  ],

  // ---------- Achievements ----------
  achievements: [
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "img",  file: "[PLACEHOLDER] assets/img/achievements/your-image.jpg" },
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "img",  file: "[PLACEHOLDER] assets/img/achievements/your-image.jpg" },
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "pdf",  file: "[PLACEHOLDER] files/your-file.pdf" },
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "pdf",  file: "[PLACEHOLDER] files/your-file.pdf" },
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "link", file: "[PLACEHOLDER] https://your-link.com" },
    { title: "[PLACEHOLDER] Certificate or award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "link", file: "[PLACEHOLDER] https://your-link.com" }
  ]
};
