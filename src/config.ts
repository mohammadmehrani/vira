// Site configuration
// Replace placeholder values with your own content

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Mohammad Mehrani | DevOps Engineer",
  description: "DevOps Engineer with hands-on experience in CI/CD, Kubernetes, infrastructure automation, observability, and production-grade Linux environments.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "M.Mehrani",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Contact",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Mohammad Mehrani",
  roles: ["DevOps Engineer", "Cloud Architect", "Platform Engineer", "Infrastructure Specialist"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I focus on improving software delivery quality by designing dependable deployment workflows, secure infrastructure, and scalable cloud services. My core strengths include automation, cross-team collaboration, and incident-resistant platform design. I have practical experience with Linux systems, GitOps-style workflows, container platforms, and infrastructure as code across modern cloud environments.",
  experienceValue: "7+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "50+", label: "Projects\nDelivered" },
    { value: "99.9%", label: "Uptime\nAchieved" },
    { value: "24/7", label: "Infrastructure\nSupport" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Cloud Infrastructure" },
    { src: "/images/about-2.jpg", alt: "Kubernetes Orchestration" },
    { src: "/images/about-3.jpg", alt: "CI/CD Pipeline" },
    { src: "/images/about-4.jpg", alt: "Monitoring Dashboard" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Do",
  services: [
    {
      iconName: "Cloud",
      title: "DevOps Engineering",
      description: "End-to-end DevOps solutions including CI/CD pipeline design, infrastructure automation, and deployment workflow optimization for faster, more reliable software delivery.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Container",
      title: "Kubernetes & Containers",
      description: "Container orchestration with Kubernetes, Docker containerization, and microservices architecture design for scalable, resilient applications.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "GitBranch",
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment pipelines using GitHub Actions, GitLab CI, and Jenkins for seamless software delivery.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Shield",
      title: "Cloud Security",
      description: "Security policy enforcement, runtime controls, secrets management with Vault, and comprehensive cloud security hardening.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Selected Work",
  description: "Snapshots of infrastructure and engineering delivery work. Each project represents a unique challenge solved with modern DevOps practices and cloud-native technologies.",
  projects: [
    {
      title: "Cloud Migration Pipeline",
      category: "Cloud Infrastructure",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "Container Platform Hardening",
      category: "Security",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Observability Stack",
      category: "Monitoring",
      year: "2023",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "Infrastructure as Code",
      category: "Automation",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Linux Server Automation",
      category: "System Administration",
      year: "2023",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Let's Work Together",
    heading: "Have a project in mind?",
    linkText: "Get in Touch",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Mohammad transformed our deployment process completely. Our release cycle went from weeks to days, with significantly fewer production issues. His expertise in Kubernetes and CI/CD is exceptional.",
      author: "Ahmad Rezaei",
      role: "CTO",
      company: "ParsPack",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Mohammad was a game-changer for our infrastructure. He implemented robust monitoring and observability solutions that helped us reduce MTTR by 70%.",
      author: "Sarah Mohammadi",
      role: "Engineering Manager",
      company: "TNZ Oil",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "His deep knowledge of Linux systems and cloud platforms helped us build a secure, scalable platform. Mohammad's approach to automation saved us countless hours of manual work.",
      author: "Hassan Karimi",
      role: "Technical Lead",
      company: "Enermonde",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["DevOps Engineer", "Cloud Architect", "Platform Specialist"],
  heading: "Let's Build Something Amazing Together",
  description: "Available for remote contracts and full-time opportunities. I help organizations build fast, secure, and reliable cloud platforms that scale.",
  buttonText: "Get in Touch",
  buttonHref: "mailto:admin@m-mehrani.ir",
  email: "admin@m-mehrani.ir",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "M.Mehrani",
  description: "DevOps Engineer specializing in cloud infrastructure, Kubernetes, CI/CD pipelines, and platform engineering. Building reliable, scalable systems for modern applications.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "DevOps Engineering", href: "#services" },
        { label: "Kubernetes", href: "#services" },
        { label: "CI/CD Pipelines", href: "#services" },
        { label: "Cloud Security", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com/mohammadmehrani" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammadmehrani/" },
        { label: "Telegram", href: "https://t.me/mohammad_mehrani" },
        { label: "Instagram", href: "https://instagram.com/madi_mehrani" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Github", href: "https://github.com/mohammadmehrani", label: "GitHub" },
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/mohammadmehrani/", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:admin@m-mehrani.ir", label: "Email" },
    { iconName: "MapPin", href: "https://www.openstreetmap.org/?mlat=35.7605&mlon=51.3665#map=14/35.7605/51.3665", label: "Location" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on new projects and DevOps insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2026 Mohammad Mehrani. All rights reserved.",
  credit: "Designed & Built with passion",
};
