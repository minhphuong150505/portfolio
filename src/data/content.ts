// All site content centralized here for easy editing.
// Edit this file to update your portfolio — everything else
// is generic UI scaffolding.

export const profile = {
  name: "Nguyễn Minh Phương",
  firstName: "Nguyễn",
  lastName: "Minh Phương",
  shortName: "Minh Phương",
  initials: "MP",
  monogram: "M",
  seal: "M",
  role: {
    en: "Backend Developer",
    vi: "Backend Developer",
  },
  stack: "Java · Spring Boot · REST APIs",
  location: {
    en: "Ho Chi Minh City, Vietnam",
    vi: "Thành phố Hồ Chí Minh, Việt Nam",
  },
  email: "phuongnm150505@gmail.com",
  phone: "+84 896 980 529",
  github: "https://github.com/minhphuong150505",
  githubHandle: "minhphuong150505",
  linkedin: "https://www.linkedin.com/in/minhphuong150505",
  linkedinHandle: "minhphuong150505",
  facebook: "https://facebook.com/phuongnm150505",
  facebookHandle: "phuongnm150505",
  resumeUrl: "/resume.pdf",
};

export const tagline = {
  en: "I turn ideas into production-ready REST APIs — secure auth, clean schemas, and integrations that ship.",
  vi: "Mình biến ý tưởng thành REST API sẵn sàng cho production — auth an toàn, schema gọn gàng, integration chạy mượt.",
};

export const about = {
  en: [
    "Information Systems undergraduate at UIT – VNU-HCM, currently seeking a full-time Backend Developer internship to apply and deepen backend engineering skills in a real-world environment.",
    "I focus on building REST APIs with Java Spring Boot 3, implementing JWT-based authentication, designing relational schemas with MySQL / PostgreSQL, and integrating third-party services such as payment gateways, shipping, and OAuth2.",
    "I'm familiar with Docker, Docker Compose, and production deployment on GCP, and I lean into AI coding assistants (Claude Code, Cursor, Codex) through structured prompts and project context to ship faster without sacrificing code quality.",
  ],
  vi: [
    "Sinh viên ngành Hệ thống Thông tin tại UIT – VNU-HCM, đang tìm kiếm một vị trí Backend Developer Intern toàn thời gian để áp dụng và phát triển kỹ năng kỹ thuật trong môi trường thực tế.",
    "Mình tập trung xây dựng REST API với Java Spring Boot 3, triển khai xác thực JWT, thiết kế schema quan hệ trên MySQL / PostgreSQL và tích hợp các dịch vụ bên thứ ba như cổng thanh toán, vận chuyển, và OAuth2.",
    "Mình đã làm việc với Docker, Docker Compose và deploy production trên GCP. Đồng thời tận dụng AI coding assistants (Claude Code, Cursor, Codex) thông qua prompt có cấu trúc và project context để ship nhanh mà vẫn giữ chất lượng code.",
  ],
};

export const skills = [
  {
    category: { en: "Backend", vi: "Backend" },
    items: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT / OAuth2",
      "Spring Data JPA",
      "Hibernate",
      "REST API",
      "OOP / SOLID",
    ],
  },
  {
    category: { en: "Database", vi: "Cơ sở dữ liệu" },
    items: [
      "MySQL",
      "PostgreSQL",
      "Schema Design",
      "Indexing",
      "JPA Repositories",
      "Relational Modeling",
    ],
  },
  {
    category: { en: "API & Testing", vi: "API & Testing" },
    items: [
      "Postman",
      "Swagger / OpenAPI",
      "Layered Architecture",
      "DTO Mapping",
      "Global Exception Handling",
    ],
  },
  {
    category: {
      en: "Third-party Integration",
      vi: "Tích hợp bên thứ ba",
    },
    items: ["MoMo", "VNPay", "GHN Shipping", "Google OAuth2", "Resend Email"],
  },
  {
    category: { en: "DevOps & Cloud", vi: "DevOps & Cloud" },
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "Linux",
      "Caddy",
      "GCP",
      "AWS (basic)",
    ],
  },
  {
    category: { en: "Frontend (Basic)", vi: "Frontend (Cơ bản)" },
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    category: {
      en: "AI-Assisted Development",
      vi: "AI-Assisted Development",
    },
    items: [
      "Claude Code",
      "Cursor",
      "Codex",
      "Prompt Engineering",
      "Custom Skills",
      "CLAUDE.md / AGENT.md",
    ],
  },
];

export const projects = [
  {
    name: "Camera Shop Backend",
    subtitle: {
      en: "E-commerce Camera Marketplace",
      vi: "Sàn thương mại điện tử mua bán Camera",
    },
    period: "2024",
    method: "POST",
    endpoint: "/api/camera-shop",
    description: {
      en: "A full-featured Spring Boot 3 e-commerce backend with 11 controllers covering Auth, Products, Cart, Orders, Rentals, Favorites, Notifications, Payments, Shipping, Categories, and Assets.",
      vi: "Backend e-commerce hoàn chỉnh với Spring Boot 3, gồm 11 controller bao quát Auth, Products, Cart, Orders, Rentals, Favorites, Notifications, Payments, Shipping, Categories và Assets.",
    },
    highlights: {
      en: [
        "JWT-based auth (HMAC-SHA256, 24h expiry) with Spring Security filter chain",
        "Google OAuth2 login + email verification flow for local registration",
        "Integrated MoMo & VNPay payment gateways with IPN callback handling",
        "GHN shipping API integration for fee calculation and order tracking",
        "Relational schema on MySQL 8 + Spring Data JPA, layered architecture",
        "Containerized with Docker + Docker Compose for dev / prod parity",
      ],
      vi: [
        "Xác thực JWT (HMAC-SHA256, hết hạn 24h) với Spring Security filter chain",
        "Đăng nhập Google OAuth2 + luồng xác minh email cho đăng ký local",
        "Tích hợp cổng thanh toán MoMo & VNPay với xử lý IPN callback",
        "Tích hợp GHN API tính phí ship và tracking đơn hàng",
        "Schema quan hệ trên MySQL 8 + Spring Data JPA, kiến trúc phân lớp",
        "Đóng gói bằng Docker + Docker Compose cho môi trường dev / prod đồng nhất",
      ],
    },
    tech: [
      "Java 17",
      "Spring Boot 3.2.4",
      "Spring Security",
      "JPA / Hibernate",
      "MySQL 8",
      "JWT",
      "Maven",
      "Docker",
    ],
    github: "https://github.com/minhphuong150505/Mobile-App_Backend",
    demo: null as string | null,
  },
  {
    name: "BABÉ 26",
    subtitle: {
      en: "Running Event Landing Page & Admin Dashboard",
      vi: "Landing Page sự kiện chạy bộ & Admin Dashboard",
    },
    period: "2024",
    method: "POST",
    endpoint: "/api/babe-26",
    description: {
      en: "Designed and implemented 6 REST endpoints for contact submission, newsletter subscribe / unsubscribe, UGC challenge registration, slot booking, and admin authentication using Spring Boot 3.2.",
      vi: "Thiết kế và triển khai 6 REST endpoint cho contact, newsletter subscribe / unsubscribe, đăng ký UGC challenge, đặt slot và admin authentication trên Spring Boot 3.2.",
    },
    highlights: {
      en: [
        "JWT-based admin auth with Spring Security protecting the /admin dashboard",
        "MySQL 8 schema for UGC submissions, contacts, and newsletter",
        "Resend API integration for transactional confirmation emails",
        "Production deployed on GCP — Compute Engine (e2-small VM) + Cloud SQL MySQL",
        "Caddy reverse proxy configured for automatic HTTPS / TLS, routing API + frontend",
      ],
      vi: [
        "Xác thực admin bằng JWT với Spring Security bảo vệ /admin dashboard",
        "Schema MySQL 8 cho UGC submissions, contacts và newsletter",
        "Tích hợp Resend API gửi email xác nhận giao dịch",
        "Deploy production trên GCP — Compute Engine (e2-small VM) + Cloud SQL MySQL",
        "Cấu hình Caddy reverse proxy tự động HTTPS / TLS, route API + frontend",
      ],
    },
    tech: [
      "Java 17",
      "Spring Boot 3.2",
      "Spring Security",
      "JPA",
      "MySQL 8",
      "Cloud SQL",
      "Docker Compose",
      "Caddy",
      "GCP",
    ],
    github: "https://github.com/minhphuong150505/landing-page",
    demo: null as string | null,
  },
];

export const education = [
  {
    school: {
      en: "University of Information Technology (UIT) – VNU-HCM",
      vi: "Đại học Công nghệ Thông tin (UIT) – ĐHQG-HCM",
    },
    degree: {
      en: "Bachelor's Degree, Information Systems",
      vi: "Cử nhân, ngành Hệ thống Thông tin",
    },
    period: "2023 — 2027",
    location: {
      en: "Ho Chi Minh City",
      vi: "Thành phố Hồ Chí Minh",
    },
    gpa: "8.5 / 10",
    major: { en: "IS", vi: "HTTT" },
  },
];

export const awards = [
  {
    title: { en: "Outstanding Student", vi: "Sinh viên Xuất sắc" },
    issuer: "UIT",
    period: { en: "Sem 2 · 2024–2025", vi: "HK2 · 2024–2025" },
    glyph: "★",
  },
  {
    title: {
      en: "Academic Scholarship — Top 8% of major",
      vi: "Học bổng Khuyến khích Học tập — Top 8% ngành",
    },
    issuer: "UIT",
    period: { en: "Sem 2 · 2024–2025", vi: "HK2 · 2024–2025" },
    glyph: "◆",
  },
  {
    title: {
      en: "Academic Scholarship — Top 8% of major",
      vi: "Học bổng Khuyến khích Học tập — Top 8% ngành",
    },
    issuer: "UIT",
    period: { en: "Sem 2 · 2023–2024", vi: "HK2 · 2023–2024" },
    glyph: "◇",
  },
];

export const ui = {
  nav: {
    about: { en: "about", vi: "giới thiệu" },
    skills: { en: "skills", vi: "kỹ năng" },
    projects: { en: "projects", vi: "dự án" },
    education: { en: "education", vi: "học vấn" },
    contact: { en: "contact", vi: "liên hệ" },
  },
  sections: {
    about: { en: "About", vi: "Giới thiệu" },
    aboutTitle: {
      en: "A backend engineer in the *making*.",
      vi: "Một backend engineer đang *trưởng thành*.",
    },
    aboutSub: {
      en: "Where I come from, what I build, and how I work.",
      vi: "Mình đến từ đâu, mình build gì, và mình làm việc thế nào.",
    },
    aboutAsideLabel: { en: "Personnel file", vi: "Hồ sơ cá nhân" },
    aboutAsideTitle: {
      en: "Information Systems, Class of '27.",
      vi: "Hệ thống Thông tin, khóa '27.",
    },

    skills: { en: "Skills", vi: "Kỹ năng" },
    skillsTitle: {
      en: "The *toolkit* I bring.",
      vi: "Bộ *công cụ* mình mang theo.",
    },
    skillsSub: {
      en: "Languages, frameworks, services — what I reach for when starting a project.",
      vi: "Ngôn ngữ, framework, dịch vụ — những gì mình dùng khi bắt đầu một dự án.",
    },

    projects: { en: "Projects", vi: "Dự án" },
    projectsTitle: {
      en: "Work that *shipped*.",
      vi: "Những dự án đã *go-live*.",
    },
    projectsSub: {
      en: "Selected backend systems I've designed, built, and deployed end-to-end.",
      vi: "Một số hệ thống backend mình đã thiết kế, xây dựng và deploy end-to-end.",
    },

    education: { en: "Education", vi: "Học vấn" },
    eduTitle: {
      en: "Academics & *recognition*.",
      vi: "Học vấn & *thành tích*.",
    },
    eduSub: {
      en: "Current degree program and recent scholarships.",
      vi: "Chương trình học hiện tại và các học bổng gần đây.",
    },

    contact: { en: "Contact", vi: "Liên hệ" },
    contactTitle: {
      en: "Let's build *something*.",
      vi: "Cùng build *một thứ gì đó*.",
    },
    contactIntro: {
      en: "Open to backend internships, freelance projects, or simply a chat about Spring Boot.",
      vi: "Mở ra cho cơ hội thực tập Backend, dự án freelance, hoặc đơn giản là một cuộc trò chuyện về Spring Boot.",
    },
    contactCardTitle: {
      en: "Open to internships.",
      vi: "Đang tìm cơ hội thực tập.",
    },
    contactCardBody: {
      en: "Looking for a full-time Backend Developer internship where I can ship real APIs alongside an experienced team. Reply within 24 hours, almost always sooner.",
      vi: "Đang tìm vị trí Backend Developer Intern full-time để được ship API thực tế cùng đội ngũ có kinh nghiệm. Reply trong 24 giờ, hầu hết là sớm hơn.",
    },
    stampLabel: { en: "Available · Q1 2026", vi: "Sẵn sàng · Q1 2026" },
    respTime: {
      en: "Usually replies within a few hours",
      vi: "Thường phản hồi trong vài giờ",
    },
  },
  labels: {
    downloadCv: { en: "Download CV", vi: "Tải CV" },
    sayHello: { en: "Get in touch", vi: "Liên hệ" },
    viewCode: { en: "Source code", vi: "Mã nguồn" },
    liveDemo: { en: "Live demo", vi: "Xem demo" },
    techStack: { en: "Tech stack", vi: "Công nghệ" },
    highlights: { en: "Key highlights", vi: "Điểm nổi bật" },
    available: {
      en: "Available for internship · Q1 2026",
      vi: "Sẵn sàng cho thực tập · Q1 2026",
    },
    availableFor: {
      en: "Available for internship opportunities",
      vi: "Đang tìm cơ hội thực tập",
    },
    degree: { en: "Degree", vi: "Bằng cấp" },
    gpa: { en: "GPA", vi: "GPA" },
    years: { en: "Period", vi: "Thời gian" },
    major: { en: "Major", vi: "Ngành" },
    awards: { en: "Awards & Scholarships", vi: "Giải thưởng & Học bổng" },
    role: { en: "Role", vi: "Vai trò" },
    basedIn: { en: "Based in", vi: "Vị trí" },
    school: { en: "School", vi: "Trường" },
    statusKey: { en: "Status", vi: "Trạng thái" },
    statusValue: {
      en: "Open to internships",
      vi: "Tìm internship",
    },
    openToWork: { en: "open to work", vi: "đang tìm việc" },
    builtWith: {
      en: "Crafted with care · Built with Next.js + design tokens",
      vi: "Thiết kế kỹ lưỡng · Xây dựng với Next.js + design tokens",
    },
  },
};
