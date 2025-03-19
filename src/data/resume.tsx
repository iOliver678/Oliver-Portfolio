import { Icons } from "@/components/icons";
import { FileIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Oliver Majano",
  initials: "OM",
  url: "https://olivermajano.com",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/sanjose",
  description:
    "Computer Science student passionate about building impactful projects and helping others grow. Officer at SCE SJSU. Always learning, always improving. Active on LinkedIn.",
  summary:
    "At the beginning of 2024, I joined the Software and Computer Engineering (SCE) club at SJSU, where I took on leadership roles to help students accelerate their careers in tech. Since then, I've worked on multiple software projects, including Canvai, a startup project I'm currently building to provide better tools for the CS community. In the past, I've interned with SJSU's College of Engineering, led a team of developers to build a club project, and competed in hackathons. I also have experience working across both frontend and backend development, and I'm passionate about building impactful software and scaling projects from the ground up. Currently, I'm focused on growing as an engineer, expanding my personal brand, and pursuing opportunities to break into the industry.",
  avatarUrl: "/oliver.jpg",
  skills: [
    "Python",
    "Next.js",
    "React",
    "JavaScript",
    "Java",
    "FastAPI",
    "Figma",
    "MySQL",
    "Postgres",
    "SQLite",
    "Docker",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileIcon, label: "Resume" },
  ],
  contact: {
    email: "olivermajano01@gmail.com",
    tel: "+18315122453",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iOliver678",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olivermajano/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Salesforce",
      badges: [],
      href: "https://salesforce.com",
      location: "San Francisco, CA",
      title: "Software Engineering Fellow",
      logoUrl: "/salesforce_logo.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Upcoming internship with Salesforce x CodePath Futureforce Tech Launchpad. Will be working on a project with the Salesforce team to help them build a new product.",
    },
    {
      company: "Software and Computer Engineering Society",
      badges: [],
      href: "https://sce.sjsu.edu",
      location: "Remote",
      title: "Software Engineer Intern Lead",
      logoUrl: "/SCE_Logo.png",
      start: "December 2024",
      end: "January 2025",
      description:
      "Led a club internship, managing a team of 4 software engineering students to develop a dynamic leaderboard for 100+ users. Queried LeetCode's GraphQL API to track user stats weekly, storing progress in an SQLite database for persistence. Developed a FastAPI backend to process requests, update rankings, and serve real-time leaderboard data. Engineered a Raspberry Pi system with a HUB75 HAT, chaining four LED panels for dynamic leaderboard display. Designed a frontend with user registration, real-time previews, and an admin dashboard for user management and rankings.",
    },
    {
      company: "SJSU College of Engineering",
      href: "https://sjsu.edu",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineering Intern",
      logoUrl: "/sjsu.png",
      start: "July 2024",
      end: "June 2024",
      description:
        "Developed and deployed a URL shortening service using FastAPI, SQLite, Docker, and React for a club with 500+ users. Designed a scalable backend architecture using SQLite for efficient URL storage and HTTP 302 redirection. Implemented a responsive frontend using React, ensuring seamless user interaction and fast loading times. Tracked performance metrics such as redirect response times and error rates to improve system reliability.",
    },
  ],
  education: [
    {
      school: "San Jose State University",
      href: "https://sjsu.edu",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/sjsu.png",
      start: " ",
      end: " ",
    },
  ],
  projects: [
    {
      title: 'A.V.A.',
      href: "https://devpost.com/software/ava-zamdu0?ref_content=my-projects-tab&ref_feature=my_projects",
      dates: "HackHayward 2025",
      active: true,
      description:
       "**A.V.A. (Accesible Voice Assistant)** is a voice-controlled browser automation tool that enables hands-free web navigation. It leverages **multi-stage AI agents**, **speech recognition**, and **text-to-speech** to interpret commands and execute tasks efficiently, making web interactions seamless and accessible.​",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Browser-Use",
        "Groq",
        "Perplexity"
      ],
      links: [
        {
          type: "Website",
          href: "https://devpost.com/software/ava-zamdu0?ref_content=my-projects-tab&ref_feature=my_projects",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./ava.mp4",
    },
    {
      title: "Canvai",
      href: "https://canvai.app",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "**Canvai** is a **Chrome extension** that enhances the **Canvas LMS experience** by integrating **Gemini AI** to automate tasks and improve workflow. It helps students streamline coursework, manage assignments more efficiently, and reduce repetitive actions. With AI-powered assistance, Canvai makes navigating Canvas **faster, smarter, and more intuitive**.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "Supabase",
        "FastAPI",
        "Gemini"
      ],
      links: [
        {
          type: "Website",
          href: "https://canvai.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Canvai-preview.png",
      video:
        "",
    },
    {
      title: "LeetCode Leaderboard",
      href: "https://github.com/SCE-Development/LedMatrix/blob/master/README.MD",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "The **LED Leaderboard** is a **real-time LeetCode tracking system** that enables club members to register and compete. It integrates with **LeetCode's GraphQL API** and uses a **FastAPI backend** to track members' progress and statistics. This gamified approach transforms individual LeetCode practice into an engaging, competitive experience, fostering a more interactive and motivating environment for improving coding skills.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLite",
        "Raspberry Pi",
        "HUB75",
        "React",
        "C++"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SCE-Development/LedMatrix/blob/master/README.MD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/led-front.mp4",
    },
    {
      title: "NutriLense",
      href: "https://devpost.com/software/nutrilens-1u9jo4#updates",
      dates: "CalHacks 11",
      active: true,
      description:
      "**NutriLens AR** uses **Snapchat Spectacles and AI** to provide **real-time nutritional insights** while cooking. By analyzing food through video capture, it overlays **macros and nutritional facts** in augmented reality, making meal tracking **seamless and interactive**.",
      technologies: [
        "Snapchat Spectacles",
        "Snapchat Lens Studio",
        "Python",
        "TypeScript",
        "FastAPI"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://devpost.com/software/nutrilens-1u9jo4#updates",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
      "/NutriLense.mp4",
    },
    {
      title: "SJSU Reverse Rate My Professor",
      href: "https://github.com/iOliver678/rrmp-init/blob/main/README.md",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "**Reverse Rate My Professor** is a **web app for SJSU students** that simplifies the process of finding the best professors for their courses. Instead of searching for professors manually, students can **enter a course name** and instantly see a **ranked list of professors** based on reviews and ratings. By automating professor selection, the platform helps students make **informed decisions** about their schedules, ensuring they get the best possible learning experience.",
      technologies: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL",
        "Docker"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iOliver678/rrmp-init/blob/main/README.md",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rrmp.gif",
      video:"",
    },
    {
      title: "Url Shortener",
      dates: " ",
      active: true,
      description:
        "**Url Shortener** is a **web app** that allows users to **shorten** long URLs into **short URLs**. It uses a **FastAPI backend** to retrieve URLs, stored in an **SQLite database**, and a **React frontend** to display the shortened URLs.",
      technologies: [
        "Python",
        "FastAPI",
        "SQLite",
        "React",
      ],
      image: "/url-shortener.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "CalHacks 11.0",
      dates: "October 18-20, 2024",
      location: "Berkeley, CA",
      description:
        "Developed NutriLens AR, a Snapchat Lens that provides real-time nutritional insights while cooking using computer vision and augmented reality.",
      image: "/Calhacks.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/nutrilens-1u9jo4#updates",
        },
      ],
    },
    {
      title: "HackHayward",
      dates: "March 1-2, 2025",
      location: "Hayward, CA",
      description: "Lead my team to win best use of Groq. Developed AVA, Accessible Voice Assistant that uses LLMs to fully automate browser tasks using voice commands.",
      image: "/hackhayward_logo.jpeg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/ava-zamdu0?ref_content=my-projects-tab&ref_feature=my_projects",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "April 19-21, 2025",
      location: "Davis, CA",
      description:
        "Upcoming hackathon I will be attending at UC Davis.",
      image: "/hackdavis-logo.png",
      links: [],
    },
    {
      title: "LA Hacks",
      dates: "April 25-27, 2025",
      location: "Los Angeles, CA",
      description:
        "Upcoming hackathon I will be attending at UCLA.",
      image: "/lahacks_logo.jpeg",
      links: [],
    },
  ],
} as const;
