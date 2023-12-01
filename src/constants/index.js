import {
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    indegene,
    gopoolit,
    happiest_minds_technology,
    social_media,
    e_com,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

];

const experiences = [
    {
        title: "Web Designer",
        company_name: "Indegene",
        icon: indegene,
        iconBg: "#383E56",
        date: "November 2016 - August 2019",
        points: [
            "Developed a modern and responsive website design that increased user engagement",
            "Implemented custom animations and transitions that improved user experience. Integrated animation and motion graphics that improved the overall aesthetics of the website",
            "Optimized the iDetail application for iPad devices, ensuring a seamless crossplatform experience",
            "Developed a web-based data visualization tool that allowed for better decisionmaking by management",
        ],
    },
    {
        title: "Web Developer",
        company_name: "GoPoolit",
        icon: gopoolit,
        iconBg: "#E6DEDD",
        date: "July 2020 - March 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Happiest Minds Technology",
        icon: happiest_minds_technology,
        iconBg: "#383E56",
        date: "April 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Social Media",
        description:
            "Web-based platform that allows users to post images and text and donate to the charities linked to GoPoolit platform",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
        ],
        image: social_media,
        website_link: "https://gopoolit.com/"
    },
    {
        name: "Shopping",
        description:
            "Web application that enables users to shop products of their choice online.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: e_com,
        source_code_link: "https://github.com/Archana1660/my-ecom-project",
        website_link: "https://cheerful-biscotti-e4e34f.netlify.app/"

    },

];

export { services, technologies, experiences, testimonials, projects };