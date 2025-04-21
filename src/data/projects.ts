export interface ProjectFeature {
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    image: string;
    previewImages: string[];
    role: string;
    client: string;
    description: string;
    overview: string;
    techStack: string[];
    features: ProjectFeature[];
    implementation: {
        frontend?: string[];
        backend?: string[];
        deployment?: string[];
    };
    githubUrl: string;
    liveUrl: string;
    demoUrl?: string;
    backgroundVideo?: string; // New property for project-specific background video
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "grocery-shopping-website",
        title: "Grocery Shopping Website",
        subtitle: "Online Grocery Store",
        category: "Web Development",
        year: "2023",
        image: "/grocery/home.jpeg",
        previewImages: ["/grocery/login.jpg", "/grocery/home.jpeg", "/grocery/card.jpeg", "/grocery/feedback.jpeg", "/grocery/order.jpeg", "/grocery/admin.jpg"],
        role: "Full-Stack Developer",
        client: "Personal Project",
        description: "A comprehensive online grocery shopping platform that allows users to browse products, search by name, add items to cart, and complete purchases. The website includes user authentication, feedback system, and an admin panel for inventory management.",
        overview: "Built with PHP and MySQL, this grocery shopping website offers a seamless shopping experience with intuitive navigation and responsive design. Users can create accounts, search for products, manage their shopping carts, and complete transactions. The system also features a feedback mechanism where customers can share their experiences directly on the site.",
        techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap", "jQuery", "AJAX"],
        features: [
            {
                title: "Product Search",
                description: "Robust search functionality allows users to find products by name, category, or keywords with instant results.",
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            },
            {
                title: "Shopping Cart",
                description: "Dynamic cart system with real-time updates, quantity adjustments, and persistent storage across sessions.",
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            },
            {
                title: "User Feedback System",
                description: "Customers can submit reviews and feedback directly on the site, which are displayed on product pages and the homepage.",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            },
            {
                title: "Admin Dashboard",
                description: "Comprehensive backend system for administrators to manage inventory, process orders, and view customer data.",
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            }
        ],
        implementation: {
            frontend: [
                "HTML5 and CSS3 for structure and styling",
                "Bootstrap for responsive design",
                "JavaScript and jQuery for interactive elements",
                "AJAX for asynchronous data loading"
            ],
            backend: [
                "PHP for server-side processing",
                "MySQL for database management",
                "Session management for user authentication"
            ],
            deployment: [
                "Apache web server configuration",
                "MySQL database optimization",
                "Server security hardening",
                "Regular data backups"
            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Grocery-Shopping-Website",
        liveUrl: "https://grocery-shop-dsabbirtanvir.infinityfreeapp.com/",
        backgroundVideo: "/grocery/test.mp4"
    },
    {
        id: 2,
        slug: "online-banking",
        title: "Online Banking App",
        subtitle: "Modern Banking Solution",
        category: "Development & Design",
        year: "2024",
        image: "/p2.png",
        previewImages: ["/p2.png", "/p2.png"],
        role: "Full-Stack Developer",
        client: "Personal Project",
        description: "A comprehensive banking platform that allows users to manage their finances, transfer money, and track expenses. Built with security and ease of use in mind.",
        overview: "This banking application uses React and Redux for state management on the frontend, with a secure Node.js backend. PostgreSQL handles transaction data with robust security measures in place. Real-time notifications keep users informed of account activity.",
        techStack: ["React", "Redux", "Node.js", "PostgreSQL", "Express", "JWT", "Tailwind CSS"],
        features: [
            {
                title: "Secure Transactions",
                description: "Bank-level encryption for all financial transactions and personal data.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Real-time Balance Updates",
                description: "Instant updates on account balances after transactions are processed.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            },
            {
                title: "Budget Tracking",
                description: "Set budgets and track expenses with intuitive visualizations and reports.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                title: "Multi-factor Authentication",
                description: "Enhanced security with multiple verification steps to protect user accounts.",
                icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            }
        ],
        implementation: {
            frontend: [
                "React for UI components",
                "Redux for state management",
                "Chart.js for financial visualizations",
                "React Router for navigation"
            ],
            backend: [
                "Node.js runtime",
                "Express.js framework",
                "PostgreSQL for transaction data",
                "Passport.js for authentication"
            ],
            deployment: [
                "AWS EC2 for hosting",
                "AWS RDS for database",
                "Nginx for server configuration",
                "Docker for containerization"
            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Payit",
        liveUrl: "https://github.com/sabbir-tanvir/Payit",
        backgroundVideo: "/grocery/test.mp4" // You can replace with a different video
    },
    {
        id: 3,
        slug: "mock-interview-ai",
        title: "Mock Interview AI",
        subtitle: "AI-Powered Interview Practice",
        category: "AI & Web Development",
        year: "2024",
        image: "/mock/m.png",
        previewImages: [
            "/mock/m.png",
            "/mock/m1.png",
            "/mock/m3.png",
            "/mock/m4.png"
        ],
        role: "Full-Stack & AI Developer",
        client: "Personal Project",
        description: "A web application that simulates real interview scenarios using Vapi AI agent and Gemini API. Users can practice technical and behavioral interviews with instant feedback and realistic AI-driven conversations.",
        overview: "Mock Interview AI leverages the Vapi AI agent for dynamic voice-based interview simulations and integrates Gemini API for advanced question generation and feedback. The platform provides a realistic interview environment, tracks user performance, and helps users improve their interview skills through personalized feedback.",
        techStack: [
            "Next.js",
            "Firebase",
            "Tailwind CSS",
            "Vapi AI",
            "shadcn/ui",
            "Google Gemeni",
            "Zod"
        ],
        features: [
            {
                title: "AI-Powered Interviewer",
                description: "Simulates real interviewers using Vapi AI agent for voice-based and text-based interviews.",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            },
            {
                title: "Dynamic Question Generation",
                description: "Gemini API generates technical and behavioral questions tailored to the user's profile and job role.",
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            },
            {
                title: "Instant Feedback",
                description: "Provides real-time feedback and suggestions to help users improve their answers and interview skills.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            },
            {
                title: "Performance Tracking",
                description: "Tracks user progress and provides analytics on strengths and areas for improvement.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
        ],
        implementation: {
            frontend: [
                "Next.js and TypeScript for modern web development",
                "Tailwind CSS and shadcn/ui for responsive, accessible design",
                "Zod for schema validation",
                "Firebase for authentication and data storage"
            ],
            backend: [
                "Integration with Vapi AI agent for real-time interview simulation",
                "Google Gemini API for question generation and feedback",
                "Custom endpoints for session and analytics management"
            ],
            deployment: [
                "Vercel for seamless deployment and hosting",
                "Environment variables for secure API key management",
                "GitHub for version control and CI/CD"
            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Mock-interview",
        liveUrl: "https://mock-interview-three-alpha.vercel.app/",
        demoUrl: "/grocery/test.mp4",
        backgroundVideo: "/grocery/test.mp4" // You can replace with a different video
    },

    {
        id: 4,
        slug: "sage-ai",
        title: "Sage AI",
        subtitle: "Intelligent Assistant",
        category: "Development & Design",
        year: "2024",
        image: "/p33.png",
        previewImages: ["/sage/1.png", "/sage/2.png", "/sage/3.png", "/p33.png"],
        role: "AI Developer",
        client: "Personal Project",
        description: "An AI assistant application that helps users with various tasks from answering questions to generating content and providing recommendations.",
        overview: "Powered by advanced natural language processing models, Sage AI delivers intelligent responses to user queries. The application features a conversational interface and can handle multiple types of requests including text generation, data analysis, and information retrieval.",
        techStack: ["React", "Gemni API", "Axiox", "Convex", "dedent", "uuid", "Tailwind CSS"],
        features: [
            {
                title: "Natural Language Understanding",
                description: "Advanced AI that comprehends complex queries and provides relevant responses.",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            },
            {
                title: "Content Generation",
                description: "Create articles, summaries, and creative content based on user prompts.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            },
            {
                title: "Personalized Recommendations",
                description: "AI learns user preferences to provide increasingly relevant suggestions over time.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            },
            {
                title: "Prompt to React Application",
                description: "Convert user prompts into actionable tasks and provide detailed responses.",
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            }
        ],
        implementation: {
            frontend: [
                "React for interactive UI",
                "Tailwind CSS for styling",
                "axios data fetching",
                "Gemni API for AI responses",
                "dedent for text formatting",

            ],
            backend: [

                "Gemni API integration",
                "Convex for DataBases",
                "uuid for unique identifiers",

            ],
            deployment: [
                "Vercel for frontend deployment",
                "convex for backend deployment",
                "CI/CD with GitHub Actions"
            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Sage-Ai",
        liveUrl: "https://sageai-xi.vercel.app/",
        backgroundVideo: "/grocery/test.mp4" // You can replace with a different video
    },
    {
        id: 5,
        slug: "portfolio-website",
        title: "Portfolio Website",
        subtitle: "Professional Showcase",
        category: "Development & Design",
        year: "2022",
        image: "/p4.png",
        previewImages: ["/p4.png", "/portfolio/1.png", "/portfolio/3.png", "/portfolio/2.png",],
        role: "Frontend Developer",
        client: "Personal Project",
        description: "A modern portfolio website showcasing projects and professional experience. Features a clean design with smooth animations and responsive layout.",
        overview: "Built with HTML, CSS and JS, this portfolio site offers fast performance and seamless page transitions. The responsive design ensures optimal viewing on all devices, while Framer Motion provides engaging animations.",
        techStack: ["HTML", "CSS", "JS", "Vercel"],
        features: [
            {
                title: "Responsive Design",
                description: "Optimized for all screen sizes from mobile to large desktop displays.",
                icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            },
            {
                title: "Smooth Animations",
                description: "Subtle and engaging animations enhance the user experience without being distracting.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            {
                title: "Dark Mode",
                description: "dark themes for comfortable viewing in any environment.",
                icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            },
            {
                title: "Contact Form",
                description: "Interactive contact form for easy communication with visitors.",
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            }
        ],
        implementation: {
            frontend: [
                "HTML for semantic structure",
                "CSS for styling and layout",
                "JavaScript for interactivity",
                "CSS for animations"
            ],
            deployment: [
                "Vercel for hosting and deployment",
                "GitHub for version control",

            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Portfolio",
        liveUrl: "https://portfolio-sabbir.vercel.app/",
        demoUrl: "/portfolio/portfolio.mp4",
        backgroundVideo: "/portfolio/portfolio.mp4" // You can replace with a different video
    },
    {
        id: 6,
        slug: "anonymous-messenger",
        title: "Anonymous Messenger",
        subtitle: "Private Messaging Platform",
        category: "Development & Design",
        year: "2024",
        image: "/p1.png",
        previewImages: ["/p1.png", "/p1.png"],
        role: "Full-Stack Developer",
        client: "Personal Project",
        description: "This anonymous messaging application allows users to send and receive messages without revealing their identity. Built with privacy in mind, it enables candid communication in a secure environment while maintaining user anonymity throughout the experience.",
        overview: "Built using React and TypeScript on the frontend with MongoDB as the database, this application provides a seamless anonymous messaging experience. The RESTful API built with Node.js handles message encryption and user authentication while maintaining privacy. Axios is utilized for efficient API communication, ensuring fast message delivery without compromising user identity.",
        techStack: ["React", "TypeScript", "MongoDB", "Node.js", "Express", "Axios", "Tailwind CSS"],
        features: [
            {
                title: "Secure Authentication",
                description: "Identity protection with advanced security protocols while maintaining anonymity. Users can create accounts without revealing personal information.",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            },
            {
                title: "Real-time Messaging",
                description: "Instant message delivery with real-time notifications for new messages. Messages appear instantly without requiring page refreshes.",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            },
            {
                title: "Message Encryption",
                description: "End-to-end encryption ensures messages remain private and secure. Even server administrators cannot access message contents.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
            },
            {
                title: "Self-Destructing Messages",
                description: "Set messages to automatically delete after being viewed or after a set time period, enhancing privacy and security.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            }
        ],
        implementation: {
            frontend: [
                "React for component-based UI",
                "TypeScript for type safety",
                "Tailwind CSS for styling",
                "Axios for API requests"
            ],
            backend: [
                "Node.js for server environment",
                "Express.js for API routing",
                "MongoDB for data storage",
                "JWT for authentication"
            ],
            deployment: [
                "Vercel for frontend hosting",
                "MongoDB Atlas for database",
                "Render for backend API",
                "GitHub Actions for CI/CD"
            ]
        },
        githubUrl: "https://github.com/sabbir-tanvir/Send-Me-",
        liveUrl: "https://sendmee.netlify.app/",
        backgroundVideo: "/grocery/test.mp4" // You can replace with a different video
    }

];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
    return projects.map(project => project.slug);
}
