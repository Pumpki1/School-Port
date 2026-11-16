// ============================================================
//  content.js : every editable piece of the site lives here.
//
//  FILE TYPES for artifacts and achievements:
//    "pdf"   : a document  -> file: "files/your-file.pdf"
//    "img"   : an image    -> file: "assets/img/achievements/your-image.jpg"
//    "video" : a video     -> file: "https://your-video-link"
//    "link"  : a web link  -> file: "https://your-link.com"
//
//  OPTIONAL FIELDS
//    thumb : a preview image shown for a PDF  -> thumb: "assets/img/thumbs/name.jpg"
//    cta   : the button label                 -> cta: "Watch Demo"
//
//  Anything that starts with "[PLACEHOLDER]" is shown with a soft
//  highlight on the site, so unfinished items are easy to spot.
// ============================================================

window.SITE = {

  // ---------- Profile (used on every page) ----------
  profile: {
    name: "Khen Mhar B. Ilao",
    shortName: "Khen Ilao",
    tagline: "Logic in Motion",
    program: "BS Computer Engineering",
    school: "Jose Rizal University",
    year: "Fourth Year",
    section: "",
    graduation: "June 2027",
    location: "Pasig City, Philippines",
    photo: "assets/img/profile.jpg",
    email: "khenmhar.ilao@my.jru.edu",
    email2: "khenilao285@gmail.com",
    linkedin: "https://www.linkedin.com/in/khen-ilao-534572423",
    github: "https://github.com/Pumpki1",
    facebook: "https://www.facebook.com/khen.m.ilao",
    intro: "Khen Mhar is a curious, driven, and collaborative fourth year Computer Engineering student with a passion for artificial intelligence, software development, and hardware systems. He thrives at the intersection of code and creativity, always eager to learn, build, and contribute to technology that makes a difference."
  },

  // ---------- About page ----------
  about: {
    bio: [
      "A fourth year BS Computer Engineering student with a strong interest in artificial intelligence, embedded systems, software development, and hardware systems. Passionate about building innovative and practical technologies, he has worked on projects such as an image classification AI using CNN, an AI powered air monitoring system capable of detecting gases through physical hardware integration, and a face detection system.",
      "Known for being adaptable, curious, driven, and collaborative, he continuously seeks opportunities to expand his technical knowledge and problem solving skills. Outside the field of technology, he enjoys music, movies, video games, and reading books, which help inspire creativity and balance in both academic and personal life."
    ],
    education: [
      { level: "College", school: "Bachelor of Science in Computer Engineering", place: "Jose Rizal University", note: "In progress, expected graduation June 2027", current: true },
      { level: "Senior High School", school: "Rizal High School" },
      { level: "Junior High School", school: "Rizal High School" },
      { level: "Elementary School", school: "Pasig Central Elementary School" }
    ],
    skills: [
      { label: "Programming", items: "Python, C++, Java" },
      { label: "AI and ML", items: "Scikit-learn, TensorFlow" },
      { label: "Web", items: "HTML, CSS, JavaScript" },
      { label: "Tools", items: "GitHub, VS Code, Jupyter" }
    ],
    academicGoals: [
      "Deepen understanding of computer engineering concepts and technologies",
      "Improve skills in programming, electronics, and system design",
      "Gain hands on experience through projects, research, and laboratory activities",
      "Develop strong analytical and problem solving abilities",
      "Enhance knowledge in emerging technologies such as AI, IoT, and cybersecurity"
    ],
    personalGoals: [
      "Become more disciplined, responsible, and consistent in studies and daily life",
      "Improve communication and teamwork skills when working on projects",
      "Develop confidence in presenting ideas and solving technical challenges",
      "Build leadership skills through collaboration and participation in activities",
      "Grow into a reliable and ethical future engineer"
    ],
    // Add items here to show a Curricular Involvements section, for example:
    // { title: "Organization or activity", role: "Your role", period: "Period" }
    involvements: []
  },

  // ---------- Relevant Works: one object per course ----------
  worksIntro: "A collection of academic works, projects, and outputs from my courses in BS Computer Engineering.",

  courses: [
    {
      id: "cpe-c313",
      code: "CPE C313",
      title: "Artificial Intelligence 1",
      description: "Laboratory activities, a research article, and a working AI project built around a CNN and a MobileNetV2 model for dog emotion detection.",
      artifacts: [
        {
          title: "Compilation of Activities",
          type: "pdf",
          file: "files/ai/aws-challenges.pdf",
          thumb: "assets/img/thumbs/aws-challenges.jpg",
          cta: "View File",
          description: "A compiled PDF of all laboratory activities and performance tasks completed throughout the course.",
          outcomes: "Demonstrates ability to apply AI concepts through hands on laboratory work.",
          goals: "Strengthened my understanding of AI algorithms and their real world applications."
        },
        {
          title: "Journal Article",
          type: "pdf",
          file: "files/ai/trimindtech-project-documentation.pdf",
          thumb: "assets/img/thumbs/trimindtech-project-documentation.jpg",
          cta: "View File",
          description: "A journal article discussing a relevant topic in the field of Artificial Intelligence, focusing on dogs emotion detection using a CNN and MobileNetV2 model.",
          outcomes: "Enhances technical communication and research skills in the context of AI.",
          goals: "Developed my ability to critically analyze and communicate AI research effectively."
        },
        {
          title: "AI Project Source Code",
          type: "pdf",
          file: "files/ai/ai-project-source-code-trimindtech.pdf",
          thumb: "assets/img/thumbs/ai-project-source-code-trimindtech.jpg",
          cta: "View File",
          description: "Source code of the AI project developed during the course, exported from VS Code. Featuring a CNN and a MobileNetV2 model.",
          outcomes: "Demonstrates ability to design, implement, and document AI based solutions.",
          goals: "Built practical experience in developing and deploying AI models."
        },
        {
          title: "Working Model Demo",
          type: "video",
          file: "https://drive.google.com/file/d/115XC4IG-SsvipDErAHbl_4RLyigEYvny/preview",
          cta: "Watch Video",
          description: "A video demonstration of the working AI model, web application developed for the course.",
          outcomes: "Showcases ability to build and present functional AI powered systems.",
          goals: "Gained experience in prototyping and presenting technical solutions clearly."
        }
      ]
    },
    {
      id: "egr-c204",
      code: "EGR C204",
      title: "Technopreneurship",
      description: "A technopreneurship venture, PawsomeCare, documented through the Wadhwani milestones, an MVP demo, a final pitch deck, and a video pitch.",
      artifacts: [
        {
          title: "Wadhwani Milestones 1 to 3",
          type: "pdf",
          file: "files/techno/venture-journey.pdf",
          thumb: "assets/img/thumbs/venture-journey.jpg",
          cta: "View File",
          description: "A compiled PDF of Wadhwani Milestones 1 through 3, documenting the progress of our entrepreneurial project.",
          outcomes: "Demonstrates ability to apply engineering solutions in an entrepreneurial context.",
          goals: "Developed an entrepreneurial mindset and learned to validate ideas systematically."
        },
        {
          title: "MVP Demo",
          type: "video",
          file: "https://drive.google.com/file/d/16c8IXW9iCNOAEmsRIWuvR0zhNYMxNBD3/preview",
          cta: "Watch Demo",
          description: "A demonstration of our Minimum Viable Product, showcasing the core features of our PawsomeCare project.",
          outcomes: "Reflects ability to design and prototype solutions for real world problems.",
          goals: "Strengthened my ability to turn ideas into tangible, working products."
        },
        {
          title: "Final Pitch Deck",
          type: "pdf",
          file: "files/techno/pawsomecare-pitch-deck.pdf",
          thumb: "assets/img/thumbs/pawsomecare-pitch-deck.jpg",
          cta: "View File",
          description: "The final pitch deck presentation used to present our technopreneurship project to an audience.",
          outcomes: "Demonstrates communication, teamwork, and technical presentation skills.",
          goals: "Improved my ability to present complex ideas in a clear and compelling way."
        },
        {
          title: "Video Pitch",
          type: "video",
          file: "https://drive.google.com/file/d/1RmhfmjpZziyKURtMTsVAna5h_323Qm9d/preview",
          cta: "Watch Pitch",
          description: "A recorded video pitch presenting our technopreneurship project, its value proposition, and our team's vision.",
          outcomes: "Showcases ability to communicate engineering solutions to a broader audience.",
          goals: "Built confidence in public speaking and pitching technical ideas professionally."
        }
      ]
    },
        {
      id: "cpe-c314",
      code: "CPE C314",
      title: "Artificial Intelligence 2",
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
    },
    {
      id: "cpe-c405",
      code: "CPE C405",
      title: "Emerging Technologies",
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
    },
    {
      id: "cpe-c409",
      code: "CPE C409",
      title: "Seminars and Fieldtrips",
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
  //  category: "certification", "award", or "seminar"
  achievements: [
    // ----- Certifications -----
    { category: "certification", title: "Relational Database Certification", issuer: "freeCodeCamp", date: "November 16, 2025", type: "img", file: "assets/img/achievements/fcc-relational-database.jpg" },
    { category: "certification", title: "AWS ML Certificate", issuer: "AWS Academy", date: "April 29, 2026", type: "pdf", file: "files/certifications/aws-ml-certificate.pdf", thumb: "assets/img/thumbs/aws-ml-certificate.jpg" },
    { category: "certification", title: "Wadhwani Foundation Certificate", issuer: "Wadhwani Foundation", date: "April 30, 2026", type: "pdf", file: "files/certifications/wadhwani-certificate.pdf", thumb: "assets/img/thumbs/wadhwani-certificate.jpg" },
    { category: "certification", title: "Employability Skills: JobReady with AI v1", issuer: "Wadhwani Foundation", date: "November 2026", type: "pdf", file: "[PLACEHOLDER] files/certifications/jobready.pdf" },
    { category: "certification", title: "AWS Academy Graduate Cloud Foundations Training Badge", issuer: "Amazon Web Services", date: "October 2026", type: "pdf", file: "[PLACEHOLDER] files/certifications/aws-cloud-foundations.pdf" },
    { category: "certification", title: "AWS Academy Graduate Machine Learning for Natural Language Processing Training Badge", issuer: "Amazon Web Services", date: "November 2026", type: "pdf", file: "[PLACEHOLDER] files/certifications/aws-ml-nlp.pdf" },
    { category: "certification", title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "October 2026, expires October 2029", type: "pdf", file: "[PLACEHOLDER] files/certifications/aws-cloud-practitioner.pdf" },
    { category: "certification", title: "Overview of AI", issuer: "Huawei", date: "March 2026", type: "pdf", file: "[PLACEHOLDER] files/certifications/huawei-overview-of-ai.pdf" },
    { category: "certification", title: "Introduction to AI Literacy and Responsible Use", issuer: "Mapúa University", date: "September 2026", type: "pdf", file: "[PLACEHOLDER] files/certifications/mapua-ai-literacy.pdf" },

    // ----- Awards -----
    { category: "award", title: "ICPEP CPE Python Programming Competition", issuer: "CSE Week 2025, Jose Rizal University", date: "March 19, 2025, 2nd Runner Up", type: "img", file: "assets/img/achievements/python-competition.jpg" },
    { category: "award", title: "Dean's List", issuer: "Jose Rizal University", date: "First Semester, School Year 2025 to 2026", type: "pdf", file: "files/certifications/deans-list.pdf", thumb: "assets/img/thumbs/deans-list.jpg" },
    { category: "award", title: "Dean's List", issuer: "Jose Rizal University", date: "[PLACEHOLDER] Semester and school year", type: "pdf", file: "[PLACEHOLDER] files/certifications/deans-list-2.pdf" },
    { category: "award", title: "[PLACEHOLDER] Award title", issuer: "[PLACEHOLDER] Issuer", date: "[PLACEHOLDER] Date", type: "img", file: "[PLACEHOLDER] assets/img/achievements/your-image.jpg" },

    // ----- Seminars and Fieldtrips -----
    { category: "seminar", title: "[PLACEHOLDER] Seminar title", issuer: "[PLACEHOLDER] Organizer", date: "[PLACEHOLDER] Date", type: "img", file: "[PLACEHOLDER] assets/img/achievements/your-image.jpg" },
    { category: "seminar", title: "[PLACEHOLDER] Seminar title", issuer: "[PLACEHOLDER] Organizer", date: "[PLACEHOLDER] Date", type: "pdf", file: "[PLACEHOLDER] files/your-file.pdf" },
    { category: "seminar", title: "[PLACEHOLDER] Fieldtrip title", issuer: "[PLACEHOLDER] Company or place visited", date: "[PLACEHOLDER] Date", type: "img", file: "[PLACEHOLDER] assets/img/achievements/your-image.jpg" }
  ],

  // ---------- Contact page ----------
  contact: {
    intro: "Feel free to reach out. I am always open to connecting with fellow engineers, collaborators, and opportunities."
  }
};
