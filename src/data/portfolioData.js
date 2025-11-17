export const portfolioData = {
  personal: {
    name: "Lakshitha",
    title: "Magento Full Stack Developer",
    tagline: "Your Complete Web Solution",
    bio: "I'm a Senior Software Engineer with over 5 years of experience in building and scaling eCommerce platforms using Magento 2 and Flask.",
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
    { name: "Magento 2", level: 95, category: "eCommerce" },
    { name: "PHP 8.x", level: 90, category: "Backend" },
    { name: "MySQL", level: 90, category: "Database" },
    { name: "React JS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "GraphQL", level: 80, category: "API" },
    { name: "PWA Studio", level: 82, category: "eCommerce" },
    { name: "AWS", level: 78, category: "Cloud" },
    { name: "Redis", level: 85, category: "Cache" },
    { name: "Elasticsearch", level: 80, category: "Search" },
    { name: "Knockout JS", level: 85, category: "Frontend" },
    { name: "LESS/CSS", level: 88, category: "Frontend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "Varnish", level: 78, category: "Cache" },
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
      description: "Designed and developed a complete Magento 2.4-based eCommerce website for an international sportswear brand. Implemented custom themes, checkout flows, and performance optimizations. Worked as a full-stack developer with NeoSolax group.",
      technologies: ["Magento 2.4", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/j20.webp",
      url: "https://j20sports.com/",
      featured: true,
    },
    {
      id: 3,
      title: "Arienti",
      description: "Maintenance of an E-Commerce website of Magento 2 platform. Was involved as a full stack developer with NeoSolax group.",
      technologies: ["Magento 2.2", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/arienti.webp",
      url: "https://arienti.lk/",
      featured: false,
    },
    {
      id: 4,
      title: "Chihuly",
      description: "Maintenance of an E-Commerce website of Magento 2 platform. Was involved as a full stack developer with NeoSolax group.",
      technologies: ["Magento 2.4", "PHP", "MySQL", "Knockout JS", "LESS", "AWS"],
      image: "/img/chihuly.webp",
      url: "https://chihuly.com/",
      featured: false,
    },
    {
      id: 5,
      title: "Bonz",
      description: "Maintenance of an E-commerce website of Magento 2 platform. Was involved as a full stack developer with NeoSolax group.",
      technologies: ["Magento 2.3", "PHP", "MySQL", "Knockout JS", "LESS", "Alibaba Cloud"],
      image: "/img/bonz.webp",
      url: "https://bonz.com/",
      featured: false,
    },
    {
      id: 6,
      title: "Airport Home Appliances",
      description: "Led the development and scaling of a high-traffic Magento 2.4 eCommerce website for a major appliance retailer in the US.",
      technologies: ["Magento 2.4", "PHP 8.2", "MySQL", "Redis", "Elasticsearch", "AWS"],
      image: "/img/airport.webp",
      url: "https://www.airportappliance.com/",
      featured: true,
    },
    {
      id: 7,
      title: "Buyabans",
      description: "Designed, developed, and deployed the complete Magento 2-based eCommerce platform from the ground up for a leading Sri Lankan electronics brand.",
      technologies: ["Magento 2", "PHP", "MySQL", "Redis", "Varnish", "AWS", "Knockout JS"],
      image: "/img/buyabans.webp",
      url: "https://www.buyabans.com/",
      featured: true,
    },
    {
      id: 8,
      title: "Kiddoz",
      description: "Developed and maintained this Magento 2 store specialized in baby and kids' products. Implemented custom modules and homepage carousels.",
      technologies: ["Magento 2", "PHP", "Redis", "Varnish", "Knockout JS"],
      image: "/img/kiddoz.webp",
      url: "https://kiddoz.lk/",
      featured: false,
    },
    {
      id: 9,
      title: "KDG Cars",
      description: "Built a PWA-enabled Magento 2 website for a luxury vehicle brand, featuring blazing-fast React-based frontend with enhanced filtering, booking, and SEO.",
      technologies: ["Magento 2", "PWA Studio", "ReactJS", "GraphQL", "Elasticsearch"],
      image: "/img/kdgcars.webp",
      url: "https://kdgbotswana.com/",
      featured: true,
    },
  ],

  experience: [
    {
      id: 1,
      title: "Senior Magento Developer",
      company: "NeoSolax",
      period: "2020 - Present",
      description: "Leading development of enterprise-level Magento 2 eCommerce solutions for international clients. Architecting scalable platforms, implementing custom modules, and optimizing performance.",
      achievements: [
        "Led development of 5+ major Magento 2.4 projects",
        "Implemented PWA solutions using React and GraphQL",
        "Improved site performance by 40% through optimization",
        "Mentored junior developers in Magento best practices"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "eCommerce Solutions",
      period: "2018 - 2020",
      description: "Developed and maintained multiple Magento 2 websites, working on both frontend and backend development.",
      achievements: [
        "Built 3 complete Magento 2 stores from scratch",
        "Integrated payment gateways and shipping providers",
        "Customized themes and checkout processes",
        "Implemented Redis and Varnish caching"
      ]
    },
    {
      id: 3,
      title: "Junior Magento Developer",
      company: "Tech Startup",
      period: "2017 - 2018",
      description: "Started career in Magento development, learning the platform and contributing to various eCommerce projects.",
      achievements: [
        "Developed custom Magento 2 modules",
        "Fixed bugs and improved existing functionality",
        "Created responsive email templates",
        "Assisted in deployment and maintenance"
      ]
    }
  ]
};
