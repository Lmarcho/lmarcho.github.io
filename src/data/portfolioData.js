export const portfolioData = {
  personal: {
    name: "Lakshitha",
    title: "Magento Full Stack Developer",
    tagline: "Building High-Performance eCommerce Solutions",
    bio: "I'm a Senior Software Engineer with over 5 years of professional experience in eCommerce development, specializing in Magento 2, PHP (LEMP stack), and cloud-native architectures. I lead enterprise-level projects for high-traffic websites with a strong focus on performance, security, and scalability. My expertise includes custom module development, payment gateway integrations, ERP system synchronizations, and performance tuning using Redis, Varnish, RabbitMQ, and Elasticsearch on AWS infrastructure.",
    email: "lmathngadeera@gmail.com",
    phone: ["+94 71 969 0981", "+94 76 125 1679"],
    location: "Moratuwa, Colombo, Sri Lanka",
    resumeUrl: "/Lakshitha_Resume.pdf",
    profileImage: "/img/file.webp",
    coverImage: "/img/cover.webp",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/lmarcho/",
    skype: "https://join.skype.com/invite/lEALQPjdURLT",
    facebook: "https://www.facebook.com/lmarchoo/",
    instagram: "https://www.instagram.com/l_marcho/",
  },

  skills: [
    // Backend & Frameworks
    { name: "Magento 2", level: 95, category: "eCommerce" },
    { name: "PHP 8.x (LEMP Stack)", level: 92, category: "Backend" },
    { name: "Laravel", level: 85, category: "Backend" },
    { name: "Flask", level: 82, category: "Backend" },
    { name: "Django", level: 80, category: "Backend" },
    { name: "Custom Module Development", level: 93, category: "eCommerce" },
    { name: "Magento 2 Design Patterns", level: 90, category: "eCommerce" },
    { name: "Payment Gateway Integration", level: 90, category: "eCommerce" },
    { name: "PWA Studio", level: 82, category: "eCommerce" },
    { name: "Headless Commerce", level: 80, category: "eCommerce" },
    { name: "Microservices & SOA", level: 83, category: "Architecture" },

    // Frontend
    { name: "React JS", level: 85, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Vue.js", level: 78, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 88, category: "Frontend" },
    { name: "HTML5 & CSS3", level: 90, category: "Frontend" },
    { name: "Knockout JS", level: 85, category: "Frontend" },
    { name: "LESS/SASS", level: 88, category: "Frontend" },

    // Database
    { name: "MySQL", level: 90, category: "Database" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "DynamoDB", level: 75, category: "Database" },

    // API Development
    { name: "REST API", level: 88, category: "API" },
    { name: "GraphQL", level: 82, category: "API" },
    { name: "Swagger/OpenAPI", level: 80, category: "API" },

    // Performance & Caching
    { name: "Redis", level: 88, category: "Performance" },
    { name: "Varnish", level: 85, category: "Performance" },
    { name: "RabbitMQ", level: 80, category: "Performance" },

    // Search
    { name: "Elasticsearch", level: 82, category: "Search" },
    { name: "OpenSearch", level: 80, category: "Search" },

    // Cloud & Hosting
    { name: "AWS (EC2, RDS, S3, Lambda)", level: 85, category: "Cloud" },
    { name: "Alibaba Cloud", level: 78, category: "Cloud" },
    { name: "Cloudflare", level: 82, category: "Cloud" },

    // DevOps & Tools
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "Kubernetes", level: 72, category: "DevOps" },
    { name: "Jenkins", level: 75, category: "DevOps" },
    { name: "GitHub Actions", level: 80, category: "DevOps" },
    { name: "CI/CD Pipelines", level: 78, category: "DevOps" },
    { name: "Nginx", level: 85, category: "DevOps" },
    { name: "Linux Administration", level: 82, category: "DevOps" },
    { name: "Git & Version Control", level: 92, category: "Tools" },

    // Testing & Monitoring
    { name: "PHPUnit & PestPHP", level: 80, category: "Testing" },
    { name: "Selenium & Cypress", level: 75, category: "Testing" },
    { name: "New Relic & Blackfire.io", level: 78, category: "Monitoring" },

    // Integration & CMS
    { name: "ERP Integration", level: 85, category: "Integration" },
    { name: "Contentful & Strapi", level: 75, category: "Integration" },
  ],

  projects: [
    {
      id: 1,
      title: "Nomin",
      description: "Developed an E-Commerce website using Magento 2.4 and Frontend with ReactJS using PWA technology.",
      technologies: ["PHP", "Magento PWA", "React JS", "GraphQL", "AWS"],
      image: "/img/nomin.webp",
      url: "https://eshop.nomin.mn/",
      featured: true,
    },
    {
      id: 2,
      title: "J20 Sports",
      description: "Designed and developed a complete Magento 2.4-based eCommerce website for an international sportswear brand. Implemented custom themes, checkout flows, and performance optimizations.",
      technologies: ["Magento 2.4", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/j20.webp",
      url: "https://j20sports.com/",
      featured: true,
    },
    {
      id: 3,
      title: "Arienti",
      description: "High-traffic Magento 2 eCommerce platform maintenance and enhancements. Implemented custom features and performance optimizations.",
      technologies: ["Magento 2.2", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/arienti.webp",
      url: "https://arienti.lk/",
      featured: false,
    },
    {
      id: 4,
      title: "Chihuly",
      description: "Maintenance and feature development for luxury art glass eCommerce platform using Magento 2.",
      technologies: ["Magento 2.4", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/chihuly.webp",
      url: "https://chihuly.com/",
      featured: false,
    },
    {
      id: 5,
      title: "Bonz",
      description: "Enterprise eCommerce platform maintenance with custom integrations and performance tuning.",
      technologies: ["Magento 2.3", "PHP", "MySQL", "Knockout JS", "LESS", "Alibaba Cloud"],
      image: "/img/bonz.webp",
      url: "https://bonz.com/",
      featured: false,
    },
    {
      id: 6,
      title: "Airport Home Appliances",
      description: "Leading Magento 2 development for a high-volume US-based appliance retailer. Implemented custom checkout features, ERP integration, Redis caching, Elasticsearch, and Varnish for optimal performance and scalability.",
      technologies: ["Magento 2.4", "PHP 8.2", "MySQL", "Redis", "Elasticsearch", "Varnish", "AWS"],
      image: "/img/airport.webp",
      url: "https://www.airportappliance.com/",
      featured: true,
    },
    {
      id: 7,
      title: "Buyabans",
      description: "Designed, developed, and deployed complete Magento 2 platform from scratch for leading Sri Lankan electronics brand. Integrated ERP system for real-time inventory synchronization.",
      technologies: ["Magento 2", "PHP", "MySQL", "Redis", "Varnish", "AWS", "ERP Integration"],
      image: "/img/buyabans.webp",
      url: "https://www.buyabans.com/",
      featured: true,
    },
    {
      id: 8,
      title: "Kiddoz",
      description: "Developed and maintained Magento 2 store for baby and kids' products. Implemented custom modules, homepage carousels, and performance optimizations.",
      technologies: ["Magento 2", "PHP", "Redis", "Varnish", "Knockout JS"],
      image: "/img/kiddoz.webp",
      url: "https://kiddoz.lk/",
      featured: false,
    },
    {
      id: 9,
      title: "KDG Cars",
      description: "Built PWA-enabled Magento 2 website for luxury vehicle brand with React-based frontend, advanced filtering, booking system, and SEO optimizations.",
      technologies: ["Magento 2", "PWA Studio", "ReactJS", "GraphQL", "Elasticsearch"],
      image: "/img/kdgcars.webp",
      url: "https://kdgbotswana.com/",
      featured: true,
    },
  ],

  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Efutures PVT Limited",
      period: "September 2024 - Present",
      description: "Leading Magento 2 development team for Airport Home Appliances (airportappliance.com), a high-traffic US-based eCommerce store. Responsible for custom development, performance optimization, AWS infrastructure management, and team mentorship.",
      achievements: [
        "Led Magento 2 development team for high-volume US retailer with millions in annual revenue",
        "Developed custom modules, checkout enhancements, and performance optimizations",
        "Implemented Redis caching, Elasticsearch, and Varnish for faster load times and scalability",
        "Managed AWS-based hosting and server optimizations for better uptime and reliability",
        "Integrated custom ERP solutions for real-time inventory, sales, and customer data synchronization",
        "Mentored junior developers, ensuring best coding practices and high-quality deliverables"
      ]
    },
    {
      id: 2,
      title: "Associate Software Manager",
      company: "NeoSolax PVT Limited",
      period: "October 2020 - September 2024",
      description: "Built and maintained multiple high-traffic Magento 2 eCommerce websites including Buyabans, Nomin, Bonz, J20 Sports, Chihuly, Arienti, and more. Led team initiatives, performance optimization, and complex system integrations.",
      achievements: [
        "Built and maintained 10+ high-traffic Magento 2 eCommerce websites for international clients",
        "Integrated AI-powered search for Magento 2, leveraging Flask (backend) and Django (admin dashboard)",
        "Performance Optimization: Improved MySQL queries, Redis caching, and Varnish configurations to enhance site speed by 60%",
        "Custom ERP & API Integrations: Implemented real-time stock, sales, and customer synchronization with external systems",
        "Payment Gateway Customization: Developed custom payment methods supporting bank-specific discounts and promotions",
        "Service-Oriented Architecture (SOA): Designed scalable hosting solutions using AWS, Alibaba Cloud, and cPanel",
        "Team Leadership: Managed development team, conducted code reviews, and mentored developers on Magento best practices",
        "Implemented headless PWA solutions using PWA Studio, React, Redux, and GraphQL"
      ]
    }
  ]
};
