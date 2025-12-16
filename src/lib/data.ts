import { Github, Linkedin, Twitter, Briefcase, GraduationCap } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Sanskar Bandgar",
    email: "mr.sanskar19@gmail.com",
    phone: "+91 8767595276",
    title: "IT Engineering Student",
    bio: "Passionate about building scalable web applications and exploring the world of cloud computing. Currently seeking opportunities to apply my skills in a real-world environment.",
    socials: [
      { name: "GitHub", url: "https://github.com/mrsanskar19/", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sanskar-bandgar-719bb336a/", icon: Linkedin },
      // { name: "Twitter", url: "#", icon: Twitter },
    ],
  },
  projects: [
    {
      id: "proj-1",
      title: "Stylish QR Code Generator",
      description: "A highly customizable QR code generator allowing users to create branded codes with gradients, logo embedding, and custom eye-frame designs.",
      imageUrl: "project-1",
      tags: ["Next.js", "Tailwind CSS", "Canvas API"],
      liveUrl: "https://qrcodeforge.vercel.app/",
      repoUrl: "https://github.com/mrsanskar19/QRCodeForge.git",
    },
    {
      id: "proj-2",
      title: "Multi-Vendor Marketplace",
      description: "A scalable e-commerce platform allowing multiple vendors to manage their own storefronts.",
      imageUrl: "project-2",
      tags: ["Vite.js", "MongoDB", "Stripe Connect", "Redux Toolkit"],
      liveUrl: "http://rushsphere.com/",
      repoUrl: "",
    },
    {
      id: "proj-3",
      title: "Hotel Order Management System",
      description: "An operational software suite for hotels to manage room service and restaurant orders.",
      imageUrl: "project-3",
      tags: ["Next.js", "MongoDB", "SSE", "Express"],
      liveUrl: "https://www.foodslinkx.com/",
      repoUrl: "https://github.com/foodslinkxcom-TEAM/hotel-order.git",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Freelancer",
      company: "Client Base",
      period: "Jun 2022 - Aug 2023",
      description: "Contributed to a client-facing web app using React and Node.js. Gained experience with Agile and CI/CD.",
      icon: Briefcase
    },
    {
      id: "exp-2",
      role: "Full Stack Intern",
      company: "Cybexonics IT Consultants",
      period: "Aug 2023 - May 2024",
      description: "Assisted senior developers in building RESTful APIs and optimizing database queries. Collaborated on frontend UI components using Tailwind CSS.",
      icon: Briefcase, 
    },
    {
      id: "exp-3",
      role: "BE in Information Technology",
      company: "SPPU University",
      period: "Graduating May 2024 - 2028",
      description: "Focused on software development, database management, and network security. Maintained a 6.8 SGPA.",
      icon: GraduationCap
    },
  ],
  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mar 2023",
      imageUrl: "certificate-1",
    },
    {
      id: "cert-2",
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Jan 2023",
      imageUrl: "certificate-2",
    },
    {
      id: "cert-3",
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "Nov 2022",
      imageUrl: "certificate-3",
    },
    {
      id: "cert-4",
      title: "Hackathon Winner - 1st Place",
      issuer: "Hack The Future 2022",
      date: "Oct 2022",
      imageUrl: "certificate-4",
    },
  ],
  articles: [
    {
      id: "article-1",
      title: "The Rise of Serverless Computing",
      description: "An in-depth look at serverless architectures, their benefits, and how they are changing the landscape of cloud computing.",
      imageUrl: "article-1",
      tags: ["Cloud", "Serverless", "Architecture"],
      readUrl: "#",
      date: "Oct 15, 2023",
    },
    {
      id: "article-2",
      title: "A Guide to Modern Authentication",
      description: "Exploring different authentication methods like OAuth 2.0, OpenID Connect, and JWTs in modern web applications.",
      imageUrl: "article-2",
      tags: ["Security", "Authentication", "WebDev"],
      readUrl: "#",
      date: "Sep 28, 2023",
    },
    {
      id: "article-3",
      title: "Mastering State Management in React",
      description: "A comparative analysis of state management libraries in React, including Redux, Zustand, and Context API.",
      imageUrl: "article-3",
      tags: ["React", "State Management", "Frontend"],
      readUrl: "#",
      date: "Aug 12, 2023",
    },
  ],
  careerInterests: {
    title: "My Career Aspirations",
    description: "I am deeply interested in roles related to Cloud Engineering and DevOps. I'm eager to work on building and maintaining resilient, scalable infrastructure. I also have a strong interest in backend development and creating efficient, robust APIs and services. I'm looking for a company where I can contribute to meaningful projects, learn from experienced mentors, and grow as a software engineer.",
  },
};
