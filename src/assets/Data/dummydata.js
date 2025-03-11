import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { LuProjector } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiAuthelia } from "react-icons/si";

export const portfolioInfo =
{
    name: "Madhumangal gouda",
    role: "Software Developer | UI Designer",
    location: "Brahmapur, Odisha (IN)",
    infohead: "From Visual Concepts to Functional Code",
    infocontent: {
        specialization: "Frontend Development",
        frontendTechnologies: ["React Js", "Angular", "HTML", "CSS", "and Vue Js"],
        description: "I have a strong passion for creating dynamic and responsive web applications.",
        backendTechnologies: [".NET", "JavaScript", "Node.js"],
        databaseExperience: ["Oracle", "SQL Server"],
        designTools: ["Figma"],
        additionalSkills: "Experienced in creating visually appealing and user-friendly interfaces."
    },
    externallink: [
        {
            url: "https://github.com/Madhumangal-Gouda",
            icon: "GIT" // Replace with actual icons from a library like FontAwesome, Material-UI, or React Icons
        },
        {
            url: "https://www.linkedin.com/in/madhumangal-gouda-94a09b265/",
            icon: "LinkedIn"
        },
        {
            url: "mailto:madhumangalgouda.bca@gmail.com",
            icon: "Mail"
        }
    ],
    experience: [
        {
            duration: "Sept, 2022 - Present",
            company: "ESSENZAA",
            companyLink: "https://www.essenzaasolutions.com/",
            role: "Full Stack Developer",
            companyProjects: [
                {
                    projectName: "NexERA",
                    usedFor: "Fraight Forwarding & Liner System",
                    tech: ".Net Core, Angular 2 +, Crystal Report(For Invoice Generation) , Git (Version Control), And Oracle",
                    projectdomain: " Full Fleg FF System also supporting the Agency and Liner .",
                    projectdetail: "Working in team and developing module as per market requiredment for enhacing the product",
                },
                {
                    projectName: "Ascent",
                    usedFor: "Full Stack Developer",
                    tech: ".Net Framwork 4, Crystal Report(For Invoice Generation) , MVSS (Version Control) , And Oracle",
                    projectdomain: " Liner System .",
                    projectdetail: "Key Role is working in team and developing module as per market requiredment for enhacing the product",
                }
            ],

        }, {
            duration: "Sept, 2022 - Present",
            company: "DIGIFIRM",
            companyLink: "https://thedigifirm.com/",
            role: "Developer",
            companyProjects: [
                {
                    projectName: "FilterForFridge",
                    usedFor: "E-commerce Site",
                    tech: " Wordpress, Elementor, Woo-commerce, HTML, CSS , And SEO, SMO",
                    projectdomain: " E-commerce Site",
                    projectdetail: " Developing full site from scratch and also working on the SEO, SMO part for the site.",
                },
                {
                    projectName: "Azoness",
                    usedFor: "E-commerce Site",
                    tech: " Wordpress, Elementor, Woo-commerce, HTML, CSS , And SEO, SMO",
                    projectdomain: " Sprots E-commerce Site",
                    projectdetail: " Developing full site from scratch and also working on the SEO, SMO part for the site",
                }
            ],

        }
    ],
    projects: [
        // {
        //     projectid: 1,
        //     projectType: "ONE_HAND",
        //     projectcode: 'DEV2024001',
        //     name: "Sansadhana",
        //     description: 'This Project help to HR their day to day life easier with fresh UI Interface.',
        //     image: "hrportalthumbnail.png",
        //     status: "Inprogress",
        //     siteurl: "https://hrportal.com",
        // },
        {
            projectid: 1,
            projectType: "TEAM",
            projectcode: 'DEV2024001',
            name: "NexERA",
            description: 'Fraight Forwarding, Agency & Liner System',
            image: "hrportalthumbnail.png",
            status: "",
            siteurl: "",
        },

        {
            projectid: 2,
            projectType: "TEAM",
            projectcode: 'DEV2024002',
            name: 'Ascent',
            description: 'Shipping Liner Liner System.',
            image: "hrportalthumbnail.png",
            status: "",
            siteurl: "",

        },
        {
            projectid: 3,
            projectType: "ONE_HAND",
            projectcode: 'DEV2024003',
            name: 'ODIRFIRM Website',
            description: 'This Project is used for Marketing the local vendor.',
            image: "sspng.png",
            status: "Inprogress",
            siteurl: "https://odifirm.com",

        },
        {
            projectid: 4,
            projectType: "ONE_HAND",
            projectcode: 'DEV2024001',
            name: 'Portfolio Site',
            description: 'Personal Portfolio Site. Its Basically its a virtual resume of show the knowlaged you have.',
            image: "portfoliosite.png",
            status: "Completed",
            siteurl: "https://madhumangalgouda.odifirm.in",
        },
    ]
}
