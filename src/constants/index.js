import {
    contact, css, express, git, github, html, javascript, nextjs, nodejs, react, redux, tailwindcss, linkedin,
    java, springBoot, oracleSql, mySql, msSql
} from '../assets/icons'


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "JAVA",
        type: "Backend"
    },
    {
        imageUrl: springBoot,
        name: "SPRING BOOT",
        type: "Backend"
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: oracleSql,
        name: "Oracle SQL",
        type: "DataBase",
    },
    {
        imageUrl: mySql,
        name: "MySQL",
        type: "DataBase",
    },
    {
        imageUrl: msSql,
        name: "Microsoft SQL Server",
        type: "DataBase",
    },
];

export const experiences = [
    {
        title: "Junior Developer",
        company_name: "C TECH SERVICES",
        icon: null,
        iconBg: "#accbe1",
        date: "September 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: null,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: null,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: null,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        link: 'https://github.com/Akhilesh-Shabadi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akhilesh-shabadi',
    }
];

export const projects = [
    {
        iconUrl: git,
        theme: 'btn-back-red',
        name: 'Small & Medium Enterprise Dashboard',
        description: 'Developed a comprehensive real-time analytics and collaboration platform specifically designed for Small and Medium Enterprises to monitor business metrics, facilitate team collaboration, and enable data-driven decision making.',
        link: 'https://github.com/Akhilesh-Shabadi/SME--Small_and_Medium-sized_Enterprise--Dashboard',
    },
    {
        iconUrl: github,
        theme: 'btn-back-green',
        name: 'Full Stack Bus Ticket Booking Application',
        description: 'Created a full-stack replica of the popular bus ticket booking platform, enabling users to book tickets and manage their bookings.',
        link: 'https://github.com/Akhilesh-Shabadi/Spring-Blue-Bus-project',
    },
    {
        iconUrl: react,
        theme: 'btn-back-pink',
        name: 'Movies Management Application',
        description: 'Developed a movie management application using React.js, allowing users to search for movies, view movie details, and manage their movie collection.',
        link: 'https://github.com/Akhilesh-Shabadi/Reactjs_movie_project',
    },
    {
        iconUrl: nextjs,
        theme: 'btn-back-blue',
        name: 'Streaming Movies Application',
        description: 'Developed a streaming movies application using Next.js, allowing users to watch movies and manage their movie collection.',
        link: 'https://github.com/Akhilesh-Shabadi/Servlet_movies_project',
    },
    // {
    //     iconUrl: nodejs,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a real-estate application that facilitates property listings and searches, connecting buyers with available properties.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: javascript,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise summaries of long text content using OpenAI GPT-4.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
