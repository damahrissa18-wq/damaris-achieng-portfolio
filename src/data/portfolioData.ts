import githubAvatarImg from '../assets/images/github_avatar.jpg';
import telemetryCanvasImg from '../assets/images/project_telemetry_canvas_1794674012395.jpg';
import designSystemImg from '../assets/images/project_design_system_1794674012686.jpg';
import audioDspImg from '../assets/images/project_audio_dsp_1794674013163.jpg';
import edgeRuntimeImg from '../assets/images/project_edge_runtime_1794674012651.jpg';

export type ProjectCategory = 'all' | 'fullstack' | 'web' | 'cloud';

export interface ProjectOutcome {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  year: string;
  role: string;
  clientOrOrg: string;
  summary: string;
  architectureNotes: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  stack: string[];
  outcomes: ProjectOutcome[];
  repoUrl: string;
  liveUrl: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  description: string;
  items: {
    name: string;
    detail: string;
    context: string;
  }[];
}

export interface ProfileLink {
  id: string;
  platform: string;
  handle: string;
  description: string;
  url: string;
}

export const PORTFOLIO_PROFILE = {
  name: 'Damaris Achieng',
  roleTitle: 'Technology Student & Software Developer',
  location: 'Nairobi, Kenya',
  email: 'damahrissa18@gmail.com',
  headline: 'Building practical software solutions that solve real-world problems.',
  lead: 'A passionate student of technology and software development—crafting full-stack products with the MERN stack, cloud tooling, and thoughtful interface design.',
  portrait: githubAvatarImg,
  portraitAlt: 'Profile photograph of Damaris Achieng working on a laptop in a collaborative tech workspace.',
  portraitCaption: 'Damaris Achieng · github.com/damahrissa18-wq',
};

export const PROOF_METRICS = [
  {
    value: '6 Repos',
    label: 'Public Open-Source Projects on GitHub',
  },
  {
    value: 'MERN Stack',
    label: 'MongoDB, Express, React & Node.js Focus',
  },
  {
    value: "NG Kenya '26",
    label: 'AI-Powered Web & Firebase Codelab Showcase',
  },
  {
    value: 'Cloud & UI',
    label: 'Google Cloud, Docker, Kubernetes & Figma',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-soko',
    title: 'Student Soko Marketplace',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Web App',
    year: '2026',
    role: 'Creator & Developer',
    clientOrOrg: 'Open Source · GitHub',
    summary:
      'A student-focused digital marketplace built with JavaScript to help campus communities discover, list, and exchange everyday goods and services cleanly online.',
    architectureNotes:
      'Inspired by building my first online shop before formally finishing coding fundamentals—structured with modular JavaScript components, clear product categorization, and responsive storefront navigation.',
    image: designSystemImg,
    imageAlt: 'Clean editorial studio layout representing Student Soko interface architecture and storefront design.',
    featured: true,
    stack: ['JavaScript', 'HTML5', 'CSS3', 'MERN Architecture', 'Git'],
    outcomes: [
      { label: 'Primary Language', value: 'JavaScript' },
      { label: 'Repository', value: 'student-soko' },
      { label: 'Last Updated', value: 'Nov 2026' },
    ],
    repoUrl: 'https://github.com/damahrissa18-wq/student-soko',
    liveUrl: 'https://github.com/damahrissa18-wq/student-soko',
  },
  {
    id: 'ng-ke-26',
    title: 'From Idea to MVP: AI & Firebase Apps',
    category: 'cloud',
    categoryLabel: 'AI & Cloud',
    year: '2026',
    role: 'Builder & Contributor',
    clientOrOrg: 'NG Kenya 2026',
    summary:
      'Complete companion repository for the NG Kenya 2026 session featuring the De{c0}dE demo application, codelabs, architectural slides, and Firebase/AI integration patterns.',
    architectureNotes:
      'Demonstrates taking an early product concept to a deployed MVP using structured frontend routing, real-time cloud persistence via Firebase, and practical generative AI workflows.',
    image: edgeRuntimeImg,
    imageAlt: 'Precision hardware fins illuminated with cobalt fiber light representing cloud and AI application architecture.',
    stack: ['Angular', 'Firebase', 'Google Cloud', 'AI Integration', 'TypeScript'],
    outcomes: [
      { label: 'Conference Track', value: 'NG-KE-26' },
      { label: 'Demo App', value: 'De{c0}dE' },
      { label: 'Backend Platform', value: 'Firebase' },
    ],
    repoUrl: 'https://github.com/damahrissa18-wq/NG-KE-26',
    liveUrl: 'https://github.com/damahrissa18-wq/NG-KE-26',
  },
  {
    id: 'certificate-generator',
    title: 'Automated Certificate Generator',
    category: 'web',
    categoryLabel: 'Web Utility',
    year: '2026',
    role: 'Author & Designer',
    clientOrOrg: 'Open Source · GitHub',
    summary:
      'Lightweight browser-based tool for generating clean, formatted digital certificates for workshops, student cohorts, and community events.',
    architectureNotes:
      'Built with semantic HTML5 and client-side layout templates so organizers can customize recipient details and export crisp credentials without heavy desktop design software.',
    image: telemetryCanvasImg,
    imageAlt: 'Studio monitor displaying clean geometric grids and structured typography layouts.',
    stack: ['HTML5', 'JavaScript', 'Typography', 'Print CSS'],
    outcomes: [
      { label: 'Format', value: 'Browser Native' },
      { label: 'Primary Stack', value: 'HTML / JS' },
      { label: 'Release', value: 'Sep 2026' },
    ],
    repoUrl: 'https://github.com/damahrissa18-wq/Certificate-generator',
    liveUrl: 'https://github.com/damahrissa18-wq/Certificate-generator',
  },
  {
    id: 'personal-web-archive',
    title: 'Personal Web & Portfolio Foundations',
    category: 'web',
    categoryLabel: 'Frontend Craft',
    year: '2026',
    role: 'Designer & Developer',
    clientOrOrg: 'Damahs Personal Web',
    summary:
      'Iterative web design exploration combining semantic markup, clean visual hierarchy, and responsive layout patterns across personal and early commerce builds.',
    architectureNotes:
      'Tracks my progression from foundational HTML5 documents and early e-commerce storefronts toward component-driven React, Vite, and Remix web applications.',
    image: audioDspImg,
    imageAlt: 'Clean minimalist hardware and studio surface representing tactile digital craft.',
    stack: ['HTML5', 'Responsive CSS', 'Figma', 'Vite'],
    outcomes: [
      { label: 'Repository', value: 'Personal Web' },
      { label: 'Design Tooling', value: 'Figma / Canva' },
      { label: 'Milestone', value: '2026' },
    ],
    repoUrl: 'https://github.com/damahrissa18-wq/Damahs-personal-website',
    liveUrl: 'https://github.com/damahrissa18-wq/Damahs-personal-website',
  },
];

export const BIOGRAPHY = {
  paragraphs: [
    'I am a technology student and software developer passionate about turning ideas into practical software solutions that address real-world problems. My journey into engineering started hands-on—I built my first online shop even before I finished formally learning to code.',
    'Today, I focus on full-stack web product development using the MERN stack (MongoDB, Express, React, and Node.js), alongside Python, PHP, and modern frontend tooling like Vite and Remix. I enjoy pairing clean backend logic with intentional user interfaces prototyped in Figma.',
    'Beyond coursework and personal builds, I actively explore cloud-native deployment and AI-assisted application workflows with Google Cloud, Firebase, Docker, and Kubernetes while sharing open-source repositories on GitHub.',
  ],
  highlights: [
    {
      label: 'Current Learning Focus',
      detail: 'Shipping end-to-end production web products with MongoDB, Express, React, and Node.js.',
    },
    {
      label: 'Builder Fun Fact',
      detail: 'Launched my first working digital shop before completing formal programming coursework.',
    },
    {
      label: 'Community & Events',
      detail: 'Exploring AI-powered web MVPs and Firebase architectures with the NG Kenya developer community.',
    },
  ],
  milestones: [
    {
      year: 'Nov 2026',
      title: 'Student Soko Marketplace',
      venue: 'JavaScript · GitHub Open Source',
    },
    {
      year: 'Oct 2026',
      title: 'NG-KE-26: From Idea to MVP with AI & Firebase',
      venue: 'NG Kenya 2026 · Resources & Demo App',
    },
    {
      year: 'Sep 2026',
      title: 'Certificate Generator & Personal Website Builds',
      venue: 'HTML5, CSS & Frontend Tooling',
    },
  ],
  quote: {
    text: 'I am passionate about technology, software solutions, and innovative ideas that solve real-world problems—bridging design curiosity with full-stack engineering.',
    attribution: 'Damaris Achieng',
    context: 'GitHub Developer Profile · @damahrissa18-wq',
  },
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '2026–Present',
    role: 'Full-Stack Developer & Student Builder',
    organization: 'Independent & Open Source',
    location: 'Nairobi, Kenya',
    summary:
      'Building real-world web products with the MERN stack, publishing open-source projects like Student Soko and Certificate Generator on GitHub.',
  },
  {
    period: '2026',
    role: 'AI & Web MVP Explorer',
    organization: 'NG Kenya 2026 (NG-KE-26)',
    location: 'Nairobi, Kenya',
    summary:
      'Worked with Firebase, Google Cloud, and Angular AI integration patterns to take software concepts from initial idea to working MVP.',
  },
  {
    period: 'Early Journey',
    role: 'E-Commerce & Web Creator',
    organization: 'First Digital Shop',
    location: 'Nairobi, Kenya',
    summary:
      'Designed and launched an early online storefront before completing formal coding studies, sparking a lasting focus on practical software engineering.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    index: '01.',
    title: 'Frontend & UI Design',
    description: 'Accessible interfaces, responsive layouts, and visual design prototypes.',
    items: [
      {
        name: 'JavaScript & HTML5',
        detail: 'Semantic markup · DOM APIs · Interactive web utilities',
        context: 'Core Stack',
      },
      {
        name: 'React, Vite & Remix',
        detail: 'Component architecture · Fast bundling · Modern web routing',
        context: 'MERN Frontend',
      },
      {
        name: 'Figma & Canva',
        detail: 'Wireframing · Interface layouts · Visual brand assets',
        context: 'UI Prototyping',
      },
    ],
  },
  {
    index: '02.',
    title: 'Backend, Data & Languages',
    description: 'Server-side application logic, API design, and database modeling.',
    items: [
      {
        name: 'Node.js & MongoDB',
        detail: 'RESTful endpoints · Document schemas · Full-stack MERN workflows',
        context: 'Primary Focus',
      },
      {
        name: 'Python & PHP',
        detail: 'Scripting · Server-side web development · Problem solving',
        context: 'Multi-language',
      },
      {
        name: 'Firebase',
        detail: 'Real-time data · Authentication · Rapid MVP deployment',
        context: 'App Backend',
      },
    ],
  },
  {
    index: '03.',
    title: 'Cloud, DevOps & Workflow',
    description: 'Version control, containerization, and scalable cloud infrastructure.',
    items: [
      {
        name: 'Git & GitHub',
        detail: 'Branching workflows · Open-source documentation · Markdown',
        context: '6 Public Repos',
      },
      {
        name: 'Google Cloud',
        detail: 'Cloud hosting · AI-powered app integration · Managed services',
        context: 'Cloud Platform',
      },
      {
        name: 'Docker & Kubernetes',
        detail: 'Container packaging · Reproducible environments · Orchestration',
        context: 'Infrastructure',
      },
    ],
  },
];

export const PROFESSIONAL_PROFILES: ProfileLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: '@damahrissa18-wq',
    description: 'Source code for Student Soko, NG-KE-26, Certificate Generator, and ongoing MERN builds.',
    url: 'https://github.com/damahrissa18-wq/',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'in/damaris-achieng',
    description: 'Professional profile, academic background, and technology network.',
    url: 'https://www.linkedin.com/in/damaris-achieng-7ba8b23a6?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    id: 'mastodon',
    platform: 'Mastodon',
    handle: '@DamahRissa',
    description: 'Updates on coding milestones, software ideas, and developer community notes.',
    url: 'https://mastodon.social/@DamahRissa',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@duh.its_.rissa',
    description: 'Behind-the-scenes snapshots from tech events, workshops, and creative projects.',
    url: 'https://instagram.com/duh.its_.rissa',
  },
];
