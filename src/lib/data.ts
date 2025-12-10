import { Github, Linkedin, Twitter, Briefcase, GraduationCap } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Alex Doe",
    email: "alex.doe@example.com",
    title: "IT Engineering Student",
    bio: "Passionate about building scalable web applications and exploring the world of cloud computing. Currently seeking opportunities to apply my skills in a real-world environment.",
    socials: [
      { name: "GitHub", url: "#", icon: Github },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "Twitter", url: "#", icon: Twitter },
    ],
  },
  projects: [
    {
      id: "proj-1",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce website built with Next.js, TypeScript, and Stripe integration for payments.",
      imageUrl: "project-1",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: "proj-2",
      title: "Task Management App",
      description: "A mobile-first task management application with real-time collaboration features using Firebase.",
      imageUrl: "project-2",
      tags: ["React Native", "Firebase", "Zustand"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: "proj-3",
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing sales data, created with D3.js and React.",
      imageUrl: "project-3",
      tags: ["React", "D3.js", "Python", "Flask"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2023 - Aug 2023",
      description: "Contributed to a client-facing web app using React and Node.js. Gained experience with Agile and CI/CD.",
      icon: Briefcase
    },
    {
      id: "exp-2",
      role: "IT Support Specialist",
      company: "University IT Services",
      period: "Sep 2022 - May 2023",
      description: "Provided technical assistance and troubleshooting for students and faculty, managing hardware and software issues.",
      icon: Briefcase
    },
    {
      id: "exp-3",
      role: "B.Sc. in Information Technology",
      company: "State University",
      period: "Graduating May 2024",
      description: "Focused on software development, database management, and network security. Maintained a 3.8 GPA.",
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
  careerInterests: {
    title: "My Career Aspirations",
    description: "I am deeply interested in roles related to Cloud Engineering and DevOps. I'm eager to work on building and maintaining resilient, scalable infrastructure. I also have a strong interest in backend development and creating efficient, robust APIs and services. I'm looking for a company where I can contribute to meaningful projects, learn from experienced mentors, and grow as a software engineer.",
  },
};
