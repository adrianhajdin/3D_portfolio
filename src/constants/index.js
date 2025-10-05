import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'SECRUR VAULT',
        description: 'Developed a secure Password Manager web application using the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring user authentication with JWT and bcrypt for password hashing. The app enables users to store, manage, and retrieve encrypted passwords with a responsive React UI, protected routes, and features like password generation and clipboard copy. Implemented RESTful APIs for CRUD operations, used Mongoose for data modeling, and deployed the application with environment-based configuration for enhanced security .',
        link: '#',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'URL SHORTNER',
        description: 'Built a full-stack URL Shortener using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create and manage shortened URLs with click tracking and expiration features. Implemented secure user authentication with JWT and bcrypt, created RESTful APIs for generating, redirecting, and managing short links, and used MongoDB to store original URLs along with metadata. Designed a clean, responsive UI in React, with real-time .',
        link: '#',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'DEPLOY-X',
        description: 'Designed and developed a web platform for hosting static websites, enabling users to upload and deploy HTML, CSS, and JavaScript files with ease. Built the front end using React.js for a responsive and user-friendly interface, and used Node.js and Express.js on the backend to handle file uploads, routing, and deployment logic. Integrated cloud storage  to serve static assets efficiently and implemented user authentication for secure access and management .',
        link: '#',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack THREADS',
        description: 'Developed a full-stack social media application inspired by Threads using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling users to post, like, and comment on short text-based threads in real time. Implemented secure user authentication with JWT and bcrypt, and built scalable RESTful APIs for creating, retrieving, and interacting with posts. Designed an intuitive React front end with dynamic feeds, user profiles, and responsive UI using Tailwind CSS or Material-UI .',
        link: '#',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'IMAGE DB',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: '#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'JAVA COMPILER',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: '#',
    }
];