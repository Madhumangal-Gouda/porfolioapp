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
    location: "Berhampur, Odisha (IN)",
    infohead: "From Visual Concepts to Functional Code",
    infocontent: {
        specialization: "Frontend Development",
        frontendTechnologies: ["React Js", "Angular", "Next.js", "and Vue Js"],
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
                    projectdomain: "NexERA is a Fraight Forwarding & Liner System .",
                    projectdetail: "Working in team and developing module as per market requiredment for enhacing the product",
                },
                {
                    projectName: "Ascent",
                    usedFor: "Full Stack Developer",
                    tech: ".Net Framwork 4, Crystal Report(For Invoice Generation) , MVSS (Version Control) , And Oracle",
                    projectdomain: "NexERA is a Fraight Forwarding & Liner System .",
                    projectdetail: "Key Role is working in team and developing module as per market requiredment for enhacing the product",
                }
            ],

        }
    ],
    projects: [
        {
            projectid: 1,
            projectType: "ONE_HAND",
            projectcode: 'DEV2024001',
            name: "Sansadhana",
            description: 'This Project help to HR their day to day life easier with fresh UI Interface.',
            image: "hrportalthumbnail.png",
            status: "Inprogress",
            siteurl: "https://hrportal.com",
        },

        {
            projectid: 2,
            projectType: "TEAM",
            projectcode: 'DEV2024002',
            name: 'Caterer System',
            description: 'This Project help to HR their day to day life easier with fresh UI Interface.',
            image: "hrportalthumbnail.png",
            status: "Gethering Requirement",
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
            siteurl: "https://madhumangalgouda.com",

        },
    ]
}
