import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    anyclip,
    mishloha,
    servicenow,
    unity,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    pricewise,
    react,
    sass,
    typescript,
    jira
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Scrum",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "GameDev",
    },
];

export const experiences = [
    {
        title: "Junior Web Developer",
        company_name: "Mishloha Int",
        icon: mishloha,
        iconBg: "#accbe1",
        date: "Aug 2014 - Dec 2015",
        points: [
            "Developing components and features for existing hybrid web application.",
            "Developing CMS for Generic Landing Pages (MVC.NET, SQL, jQuery, Bootstrap)",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-End Web Developer",
        company_name: "SkyGyraffe (ServiceNow)",
        icon: servicenow,
        iconBg: "#fbc3bc",
        date: "Mar 2016 - Mar 2018",
        points: [
            "Developing components for existing Angular Web Applications.",
            "Developing small web applications using Angular2 for POC (Proof of Concept) purposes using Angular Material.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Large Scale refactoring of existing core project.",
        ],
    },
    {
        title: "Front-End Web Developer",
        company_name: "AnyClip",
        icon: anyclip,
        iconBg: "#b7e4c7",
        date: "Mar 2018 - Oct 2022",
        points: [
            "Design, development and support the core AnyClip Platform component - LRE Video Player.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create lightest possible Media Player.",
            "Developing mobile browser-oriented web applications (PHP, Backbone.js)",
        ],
    }
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
        link: 'https://github.com/IgorIziyoAlhasov',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/igor-alhasov-20a3b312/',
    }
];

export const projects = [
    {
        iconUrl: anyclip,
        theme: 'btn-back-red',
        name: 'Project Name',
        description: 'Project Description',
        link: 'git link here',
    },
];