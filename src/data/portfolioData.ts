export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  approach: string;
  technologies: string[];
  keyLearnings: string[];
  futureImprovements: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  status: string;
  category: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  tagline: string;
  skills: SkillItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution?: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface CurrentlyData {
  sectionHeading: string;
  subtitle: string;
  learning: {
    title: string;
    subtitle: string;
    items: string[];
    badge: string;
  };
  building: {
    title: string;
    subtitle: string;
    items: string[];
    badge: string;
  };
  exploring: {
    title: string;
    subtitle: string;
    items: string[];
    badge: string;
  };
  listening: {
    track: string;
    artist: string;
    genre: string;
    note: string;
    badge: string;
  };
}

export const portfolioData = {
  personal: {
    name: "Yogeshwari S",
    shortName: "YS.",
    role: "Computer Science Student & Aspiring Software Developer",
    college: "Bangalore Institute of Technology, Bengaluru",
    degree: "B.E. in Computer Science & Engineering",
    location: "Bengaluru, Karnataka, India",
    availability: "Open to opportunities",
    email: "yogeshwari.sjr@gmail.com",
    phone: "8073072044",
    heroIntro: "HELLO, I'M",
    heroHeadline: "Yogeshwari S",
    rotatingRoles: ["Developer", "Learner", "Problem Solver", "Creator"],
    heroOneLiner:
      "Computer Science student, aspiring software developer, and curious mind who loves turning ideas into functional experiences.",
    heroSupporting:
      "Currently exploring software development, programming, and the endless possibilities of technology.",
    handwrittenNote: "Turning curiosity & coffee into clean code ✨",
    resumeUrl: "#",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Terminal", href: "#terminal" },
    { name: "Currently", href: "#currently" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  about: {
    sectionHeading: "A little about me.",
    subtitle: "Curiosity-driven, learning by building, and passionate about code.",
    paragraphs: [
      "I'm Yogeshwari, a Computer Science and Engineering student at Bangalore Institute of Technology, Bengaluru.",
      "I'm passionate about technology and enjoy understanding how things work behind the scenes. From writing my first programs to exploring web development, I've always been curious about building things using code.",
      "I'm currently strengthening my programming fundamentals while exploring frontend development and working on projects that help me learn through practical experience.",
      "I believe in learning by building, experimenting, and constantly challenging myself.",
    ],
    quickStats: [
      { label: "Institution", value: "Bangalore Inst. of Technology" },
      { label: "Degree", value: "B.E. Computer Science" },
      { label: "Location", value: "Bengaluru, India" },
      { label: "Core Focus", value: "Web Dev & Core CS" },
    ],
  },

  journey: {
    sectionHeading: "My Journey So Far",
    subtitle: "A timeline of milestones, curiosity-driven exploration, and growth in computer science.",
    milestones: [
      {
        year: "Chapter 01",
        period: "The Genesis",
        title: "Early Programming Spark",
        institution: "First Steps into Code",
        description:
          "Discovered the magic of instructing computers to solve logic puzzles. Writing my very first console programs ignited a deep curiosity for how software actually functions behind user interfaces.",
        highlights: ["First 'Hello World'", "Algorithmic thinking", "Curiosity about software"],
        tag: "Foundation",
      },
      {
        year: "Chapter 02",
        period: "Core Disciplines",
        title: "Strengthening Fundamentals: C, Java & Python",
        institution: "Computer Science Coursework",
        description:
          "Dove deep into procedural mechanics in C—understanding memory pointers and array allocations. Transitioned to Object-Oriented Principles in Java and expressive scripting with Python to tackle diverse problem sets.",
        highlights: ["Memory & Pointers in C", "OOP Paradigms in Java", "Python Scripting"],
        tag: "Core Engineering",
      },
      {
        year: "Chapter 03",
        period: "Campus Journey",
        title: "Joining Bangalore Institute of Technology (BIT)",
        institution: "Bengaluru, Karnataka",
        description:
          "Enrolled in the Department of Computer Science & Engineering at BIT. Immersed myself in university academics, collaborating with peers, and participating in tech discussions in the heart of India's Silicon Valley.",
        highlights: ["B.E. in Computer Science", "Engineering Mathematics & DS", "Tech Community"],
        tag: "Academics",
      },
      {
        year: "Chapter 04",
        period: "Web Exploration",
        title: "Stepping into Modern Web Development",
        institution: "Self-driven & Coursework",
        description:
          "Learned semantic HTML5, modern CSS flexbox and grid layouts, and JavaScript ES6+. Discovered the excitement of immediate visual feedback and building interactive interfaces.",
        highlights: ["DOM Manipulation", "CSS Responsive Design", "Vanilla JavaScript"],
        tag: "Frontend",
      },
      {
        year: "Chapter 05",
        period: "Component Architecture",
        title: "Embracing React & Next.js",
        institution: "Hands-on Project Building",
        description:
          "Evolved from static pages to declarative component architecture with React and modern fullstack features with Next.js App Router, TypeScript type safety, and Tailwind CSS design systems.",
        highlights: ["React Hooks & State", "Next.js 14 App Router", "TypeScript Typings"],
        tag: "Modern Stack",
      },
      {
        year: "Chapter 06",
        period: "Present & Future",
        title: "Learning by Building & Future Horizons",
        institution: "Continuous Evolution",
        description:
          "Actively expanding my knowledge through practical projects, open exploration, and refining both frontend artistry and algorithmic problem solving. Always excited for opportunities to learn and collaborate.",
        highlights: ["Interactive UX Experiments", "DSA Problem Solving", "Internship Ready"],
        tag: "Ongoing",
      },
    ] as TimelineItem[],
  },

  skills: {
    sectionHeading: "Technical Toolkit",
    subtitle: "Technologies and tools I am currently exploring and building with.",
    note: "These represent my current learning and familiarity areas, actively expanded through hands-on practice, university coursework, and project work.",
    categories: [
      {
        category: "Programming",
        tagline: "Foundational logic and algorithm implementation",
        skills: [
          {
            name: "C",
            description: "Core programming fundamentals, pointer mechanics & memory basics",
          },
          {
            name: "Java",
            description: "Object-oriented design patterns, classes, and robust logic",
          },
          {
            name: "Python",
            description: "Scripting, algorithm prototyping, and problem solving",
          },
        ],
      },
      {
        category: "Web Development",
        tagline: "Creating responsive, interactive web interfaces",
        skills: [
          {
            name: "HTML",
            description: "Semantic document structure, accessibility, and modern standards",
          },
          {
            name: "CSS",
            description: "Modern layout systems, responsive design, Flexbox & Grid",
          },
          {
            name: "JavaScript",
            description: "ES6+ syntax, asynchronous programming & dynamic DOM interactions",
          },
          {
            name: "React",
            description: "Component architecture, hooks, declarative UI & state flow",
          },
          {
            name: "Next.js",
            description: "Modern App Router, server-rendered components & optimized web apps",
          },
        ],
      },
      {
        category: "Tools & Workflow",
        tagline: "Development environments and collaboration tools",
        skills: [
          {
            name: "Git",
            description: "Version control, branching strategies, and commit history",
          },
          {
            name: "GitHub",
            description: "Remote repositories, code hosting, and open-source exploration",
          },
          {
            name: "VS Code",
            description: "Primary editor with custom extensions, debugging & productivity tools",
          },
          {
            name: "PowerPoint",
            description: "Structuring technical ideas, project showcases & visual documentation",
          },
        ],
      },
    ] as SkillCategory[],
  },

  currently: {
    sectionHeading: "Currently in my little corner of the internet",
    subtitle: "A real-time snapshot of what's keeping my mind curious, active, and inspired.",
    learning: {
      title: "Currently Learning",
      subtitle: "Deepening depth in frontend & computer science",
      badge: "In Progress",
      items: [
        "Advanced TypeScript generics & strict type architecture",
        "Next.js App Router performance & server-client component boundaries",
        "Data structures & algorithm optimization in C and Java",
        "Accessible web patterns (WCAG standards & keyboard navigation)",
      ],
    },
    building: {
      title: "Currently Building",
      subtitle: "Hands-on projects and experiments",
      badge: "Active Coding",
      items: [
        "Interactive personal portfolio with custom terminal emulator",
        "Conceptual Student Utility Platform for campus academic workflows",
        "Algorithmic problem-solving repository strengthening C mastery",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      subtitle: "Creative interests & tech frontiers",
      badge: "Curiosity",
      items: [
        "Micro-animations & gesture transitions with Framer Motion",
        "Editorial web typography and creative asymmetrical layouts",
        "UI/UX design systems balancing warmth with modern minimalism",
      ],
    },
    listening: {
      track: "Deep Focus & Lo-Fi Beats",
      artist: "Chillhop & Acoustic Coding Sessions",
      genre: "Lo-Fi / Ambient Instrumental",
      note: "My go-to soundscape while debugging code, reading docs, and drafting layouts late at night.",
      badge: "Now Playing",
    },
  } as CurrentlyData,

  projects: {
    sectionHeading: "Things I've been building.",
    subtitle: "A collection of projects, experiments, and ideas brought to life through code.",
    items: [
      {
        id: "personal-portfolio",
        number: "01",
        title: "Personal Portfolio Website",
        description:
          "A personal portfolio designed to showcase my journey, technical skills, projects, and interests in software development.",
        longDescription:
          "Engineered with Next.js (App Router), TypeScript, and Tailwind CSS. Features an elegant blush and dusty rose color scheme, interactive micro-animations with Framer Motion, accessible form validation, and fully responsive layouts across mobile, tablet, and widescreen monitors.",
        problemStatement:
          "Standard developer portfolios often feel cold, generic, or reliant on template clones. I wanted a personal digital presence that balances technical competence with an authentic aesthetic identity reflecting my personality as a woman in computer science.",
        approach:
          "Constructed a modular Next.js architecture with clean separation between content data (`portfolioData.ts`) and presentation components. Implemented a fully functional in-browser terminal emulator, interactive journey timeline, and tactile micro-interactions that reward visitor curiosity.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        keyLearnings: [
          "Harnessed Next.js App Router server and client component paradigms",
          "Engineered interactive keyboard-driven command navigation with command history in React",
          "Balanced rich animated interactions with accessibility and reduced-motion preferences",
        ],
        futureImprovements: [
          "Add dark/light dual theme toggle while preserving signature pink accents",
          "Integrate live GitHub API stats for automated commit and repository feeds",
        ],
        githubUrl: "https://github.com/yogeshwari2007",
        liveUrl: "#",
        featured: true,
        status: "Active Project",
        category: "Frontend Development",
      },
      {
        id: "student-utility-platform",
        number: "02",
        title: "Student Utility Platform",
        description:
          "A concept for a student-focused platform designed to make everyday college-related tasks and information more accessible.",
        longDescription:
          "A student-centric utility concept conceived to streamline campus routines, simplify access to academic schedules, syllabus reference materials, and vital announcements with a minimalist, distraction-free user interface.",
        problemStatement:
          "College students constantly juggle multiple disparate portals, scattered PDF syllabi, and group chat notifications just to find daily timetables and academic deadlines.",
        approach:
          "Conceptualized a centralized, distraction-free web dashboard prototype focusing on high information hierarchy, intuitive navigation, and lightweight semantic frontend code without unnecessary dependencies.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        keyLearnings: [
          "Conducted user-centric layout thinking tailored to student pain points",
          "Applied clean flexbox and CSS grid structures for multi-device timetable grids",
          "Strengthened vanilla DOM manipulation and modular script organization",
        ],
        futureImprovements: [
          "Convert into a full React application with local storage persistence",
          "Add interactive exam countdown timer and syllabus completion checklist",
        ],
        githubUrl: "https://github.com/yogeshwari2007",
        liveUrl: "#",
        featured: true,
        status: "Concept / Prototype",
        category: "Web Application",
      },
      {
        id: "c-programming-collection",
        number: "03",
        title: "C Programming Collection",
        description:
          "A collection of C programs and problem-solving exercises created while strengthening my programming fundamentals.",
        longDescription:
          "A structured repository of foundational programs addressing array manipulations, matrix calculations, pointers, string parsing, and recursive algorithms. Built during core coursework to cultivate solid algorithmic reasoning.",
        problemStatement:
          "Building complex high-level applications requires an intuitive grasp of how computers manage memory, CPU instructions, and data allocation at a low level.",
        approach:
          "Systematically solved and documented core algorithmic exercises in C: implementing dynamic memory allocation (`malloc`, `free`), pointer arithmetic, linked data structures, and sorting algorithms with step-by-step trace explanations.",
        technologies: ["C", "GCC", "Data Structures", "Algorithms"],
        keyLearnings: [
          "Mastered pointer dereferencing, memory allocation, and segmentation avoidance",
          "Developed deep appreciation for time and space complexity of fundamental algorithms",
          "Established clean commenting and documentation habits for technical codebases",
        ],
        futureImprovements: [
          "Implement custom implementations of trees and graph traversal algorithms",
          "Add automated test assertion scripts for each problem module",
        ],
        githubUrl: "https://github.com/yogeshwari2007",
        liveUrl: "#",
        featured: true,
        status: "Coursework & Practice",
        category: "Software Fundamentals",
      },
    ] as Project[],
  },

  contact: {
    sectionHeading: "Let's connect.",
    subtitle:
      "Have an interesting idea, opportunity, or just want to connect? I'd love to hear from you.",
    note: "This form has active frontend validation and feedback. To wire it to your personal inbox, plug in your preferred email API (such as Resend, EmailJS, Formspree, or Web3Forms).",
    email: "yogeshwari.sjr@gmail.com",
    phone: "8073072044",
    location: "Bengaluru, Karnataka, India",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/yogeshwari2007",
        handle: "@yogeshwari2007",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yogeshwari",
        handle: "in/yogeshwari",
        icon: "Linkedin",
      },
      {
        name: "Email",
        url: "mailto:yogeshwari.sjr@gmail.com",
        handle: "yogeshwari.sjr@gmail.com",
        icon: "Mail",
      },
      {
        name: "Phone",
        url: "tel:8073072044",
        handle: "+91 8073072044",
        icon: "Phone",
      },
    ],
  },

  footer: {
    builtBy: "Designed & Built by Yogeshwari S.",
    tagline: "Crafted with curiosity, code, and care.",
  },
};
