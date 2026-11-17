export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
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
    heroOneLiner:
      "Computer Science student, aspiring software developer, and curious mind who loves turning ideas into functional experiences.",
    heroSupporting:
      "Currently exploring software development, programming, and the endless possibilities of technology.",
    resumeUrl: "#",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
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
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/yogeshwari",
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
        technologies: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/yogeshwari",
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
        technologies: ["C", "Programming Fundamentals"],
        githubUrl: "https://github.com/yogeshwari",
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
        url: "https://github.com/yogeshwari",
        handle: "@yogeshwari",
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
    tagline: "Always learning. Always building.",
  },
};
