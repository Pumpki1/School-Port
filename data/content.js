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
      description: "A natural language processing course that ended with a machine translation project: a tourism translator between English and Cebuano, Hiligaynon, and Waray, built with a GRU model and a fine tuned NLLB-200 model.",
      artifacts: [
        {
          title: "Final NLP Project Documentation",
          type: "pdf",
          file: "files/ai/nlp-project-documentation.pdf",
          cta: "View File",
          description: "A research paper on the Tourism Translator, a bidirectional machine translation system for English, Cebuano, Hiligaynon, and Waray. It covers the dataset, the three models compared, the results, and the limitations of the study.",
          outcomes: "Demonstrates ability to design, run, and report an experiment, comparing models with standard metrics such as chrF and sacreBLEU.",
          goals: "Strengthened my skills in natural language processing, technical writing, and reporting results honestly, including their limitations."
        },
        {
          title: "Project Demo",
          type: "video",
          file: "https://drive.google.com/file/d/1kW0q0zXVzfQVg_VDK42-tmRIKVQb-kxB/preview",
          cta: "Watch Demo",
          description: "A video demonstration of the Tourism Translator chatbot, which translates tourism sentences between English and Cebuano, Hiligaynon, and Waray in the browser.",
          outcomes: "Showcases ability to turn a trained model into a working application that people can use.",
          goals: "Gained experience in serving an AI model through a simple web interface and presenting it clearly."
        }
      ]
    },
    {
      id: "cpe-c405",
      code: "CPE C405",
      title: "Emerging Technologies",
      description: "A course on emerging technologies, with work centered on cloud computing, including a cloud migration proposal for a real dental clinic and a final class project.",
      artifacts: [
        {
          title: "Prelim Project: Smile Republic Cloud Migration",
          type: "pdf",
          file: "files/emerging/prelim-smile-republic.pdf",
          cta: "View File",
          description: "A proposal for moving Smile Republic Dental Clinic in Pateros from paper charts and an offline spreadsheet to a web based clinic management system on AWS. It includes a needs assessment, Data Privacy Act requirements, a deployment model, and a cost estimate from the AWS Pricing Calculator.",
          outcomes: "Demonstrates ability to assess a client's needs and design a secure, cost estimated engineering solution that follows legal requirements.",
          goals: "Built my understanding of cloud services and how to balance cost, security, and compliance when recommending a technology."
        },
        {
          title: "Final Project",
          type: "link",
          file: "https://drive.google.com/drive/folders/1dgvgxSsnhApW6jgeIleSu5HXrkJDAmip?usp=drive_link",
          cta: "Open Folder",
          description: "The final project for the course, with its files and deliverables compiled in a shared Google Drive folder.",
          outcomes: "Demonstrates ability to apply emerging technology concepts in a complete and documented project.",
          goals: "Strengthened my ability to plan, build, and organize a project from start to finish."
        }
      ]
    },
    {
      id: "cpe-c409",
      code: "CPE C409",
      title: "Seminars and Fieldtrips",
      description: "Seminars attended, Wadhwani Foundation role plays, and industry field trips to Schneider Electric and Hytech that connect classroom learning to the engineering profession.",
      artifacts: [
        {
          title: "Seminars",
          type: "link",
          file: "https://drive.google.com/drive/folders/1rKEu3H1m7BVdIoHKeeW8iOl-vNsElFwP?usp=drive_link",
          cta: "Open Folder",
          description: "A shared folder with the records of the seminars I attended during the course.",
          outcomes: "Shows commitment to lifelong learning and awareness of current trends in the engineering field.",
          goals: "Widened my view of the industry and helped me see where my interests in AI and cloud technology can lead."
        },
        {
          title: "Wadhwani Role Plays",
          type: "link",
          file: "https://drive.google.com/drive/folders/1DlkosWmUrUV5tUvPNdVlnPv1sG38mGsO?usp=drive_link",
          cta: "Open Folder",
          description: "A shared folder with my Wadhwani Foundation role play activities, practicing professional communication in realistic workplace situations.",
          outcomes: "Demonstrates professional communication and teamwork in realistic workplace scenarios.",
          goals: "Improved my confidence in speaking and in handling professional situations."
        },
        {
          title: "Schneider Electric Field Trip: Group Photo",
          type: "img",
          file: "assets/img/achievements/schneider-qcxweek-group.jpg",
          cta: "View Photo",
          description: "Our Computer Engineering class at the Schneider Electric office in Cavite, taken during the company's QCXWeek 2026 event, in front of a display about its supply chain.",
          outcomes: "Shows exposure to how a global energy management company runs its operations, quality, and supply chain.",
          goals: "Gave me a clearer picture of the industry I am preparing to enter and how engineering work connects to quality and customer needs."
        },
        {
          title: "Schneider Electric Field Trip: Welcome Lounge",
          type: "img",
          file: "assets/img/achievements/schneider-lobby-group.jpg",
          cta: "View Photo",
          description: "Our class in the Schneider Electric reception lounge in Cavite on October 8, 2026, where the welcome screen showed the Jose Rizal University seal.",
          outcomes: "Reflects participation in an industry visit hosted by a leading company in electrical and automation technology.",
          goals: "Built my professional awareness and showed me what a working engineering environment looks like."
        },
        {
          title: "Hytech Field Trip: Electrical Control Training Modules",
          type: "img",
          file: "assets/img/achievements/hytech-control-modules.jpg",
          cta: "View Photo",
          description: "A wall of electrical control training modules at Hytech, covering motor control, pressure water supply, DC motor speed control, a vending machine simulation, and more, beside a bench power supply console.",
          outcomes: "Shows exposure to hands on trainers used to teach industrial control and electrical circuits.",
          goals: "Helped me connect the control and circuit theory from class to real equipment."
        },
        {
          title: "Hytech Field Trip: Industry 4.0 Automation Lab",
          type: "img",
          file: "assets/img/achievements/hytech-industry-4-lab.jpg",
          cta: "View Photo",
          description: "An Industry 4.0 training area at Hytech with PLC trainers, touchscreen control stations for testing, processing, handling, and sorting, and a model factory with a quality control station.",
          outcomes: "Demonstrates exposure to smart automation, PLC based control, and Industry 4.0 concepts.",
          goals: "Widened my interest in automation and in how AI and hardware work together in smart factories."
        }
      ]
    }
  ],

  // ---------- Achievements ----------
  //  category: "certification", "award", or "seminar"
  achievements: [
    // ----- Certifications -----
    { category: "certification", title: "Relational Database Certification", issuer: "freeCodeCamp", date: "November 16, 2025", type: "img", file: "assets/img/achievements/fcc-relational-database.jpg" },
    { category: "certification", title: "Overview of AI", issuer: "Huawei ICT Academy", date: "March 1, 2026", type: "img", file: "assets/img/achievements/huawei-overview-of-ai.jpg" },
    { category: "certification", title: "AWS ML Certificate", issuer: "AWS Academy", date: "April 29, 2026", type: "pdf", file: "files/certifications/aws-ml-certificate.pdf", thumb: "assets/img/thumbs/aws-ml-certificate.jpg" },
    { category: "certification", title: "Wadhwani Foundation Certificate", issuer: "Wadhwani Foundation", date: "April 30, 2026", type: "pdf", file: "files/certifications/wadhwani-certificate.pdf", thumb: "assets/img/thumbs/wadhwani-certificate.jpg" },
    { category: "certification", title: "Introduction to AI Literacy and Responsible Use", issuer: "Mapúa University and CHED", date: "September 14, 2026", type: "img", file: "assets/img/achievements/mapua-ai-literacy.jpg" },
    { category: "certification", title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "October 28, 2026, expires October 28, 2029", type: "pdf", file: "files/certifications/aws-cloud-practitioner.pdf" },
    { category: "certification", title: "AWS Academy Graduate Cloud Foundations Training Badge", issuer: "AWS Academy", date: "October 30, 2026", type: "pdf", file: "files/certifications/aws-cloud-foundations.pdf" },
    { category: "certification", title: "AWS Academy Graduate Machine Learning for Natural Language Processing Training Badge", issuer: "AWS Academy", date: "November 2, 2026", type: "pdf", file: "files/certifications/aws-ml-nlp.pdf" },
    { category: "certification", title: "Employability Skills: JobReady with AI v1, Advanced Level", issuer: "Wadhwani Foundation", date: "November 12, 2026", type: "pdf", file: "files/certifications/jobready.pdf" },
    { category: "certification", title: "AWS Academy Graduate Cloud Web Application Builder Training Badge", issuer: "AWS Academy", date: "November 15, 2026", type: "pdf", file: "files/certifications/aws-web-app-builder.pdf" },

    // ----- Awards -----
    { category: "award", title: "Top 9 Student, Certificate of Recognition", issuer: "Jose Rizal University, CPE Department", date: "First Semester, School Year 2023 to 2024", type: "img", file: "assets/img/achievements/top-9-student.jpg" },
    { category: "award", title: "ICPEP CPE Python Programming Competition", issuer: "CSE Week 2025, Jose Rizal University", date: "March 19, 2025, 2nd Runner Up", type: "img", file: "assets/img/achievements/python-competition.jpg" },
    { category: "award", title: "Dean's List", issuer: "Jose Rizal University", date: "First Semester, School Year 2025 to 2026", type: "pdf", file: "files/certifications/deans-list.pdf", thumb: "assets/img/thumbs/deans-list.jpg" },
    { category: "award", title: "Dean's List", issuer: "Jose Rizal University", date: "Second Semester, School Year 2025 to 2026", type: "img", file: "assets/img/achievements/deans-list-2.png" },

    // ----- Seminars and Fieldtrips -----
    { category: "seminar", title: "Balancing Act: Mental Health Matters and Time Management Strategies for College Success", issuer: "ICpEP.SE, Jose Rizal University Chapter", date: "November 16, 2023", type: "img", file: "assets/img/achievements/mental-health-seminar.png" },
    { category: "seminar", title: "Academic Learning Enhancement Program (ALEP)", issuer: "Electronics Engineering League", date: "February 21, 2024", type: "img", file: "assets/img/achievements/alep-participation.png" },
    { category: "seminar", title: "Generative AI Workshop", issuer: "CSE Week 2025, Jose Rizal University", date: "March 24, 2025", type: "img", file: "assets/img/achievements/generative-ai-workshop.jpg" },
    { category: "seminar", title: "Schneider Electric Field Trip", issuer: "Schneider Electric, Cavite", date: "October 8, 2026", type: "img", file: "assets/img/achievements/schneider-lobby-group.jpg" },
    { category: "seminar", title: "Hytech Field Trip", issuer: "Hytech", date: "2026", type: "img", file: "assets/img/achievements/hytech-industry-4-lab.jpg" }
  ],

  // ---------- Contact page ----------
  contact: {
    intro: "Feel free to reach out. I am always open to connecting with fellow engineers, collaborators, and opportunities."
  }
};
