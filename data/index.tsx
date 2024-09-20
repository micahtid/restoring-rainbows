export const extendedNavItems = [
    {label: "About", link: "/about", subItems: []},
    {label: "Team", link: "/team", subItems: []},
    {label: "Partners", link: "/partners", subItems: []},
    {label: "Stories", link: "/stories", subItems: [
        {label: "Blogs", link: ""},
        {label: "Events", link: ""}
    ]},
    {label: "Branches", link: "/branches", subItems: []},
    {label: "Take Action", link: "/#take-action", subItems: [
        {label: "Start Branch", link: "/start-a-branch"},
        {label: "Volunteer", link: "volunteer"},
    ]}
]

import { PiRecycleDuotone, PiChalkboardTeacherDuotone, PiHandHeartDuotone } from "react-icons/pi";

export const whatWeDo = [
    {icon: <PiRecycleDuotone />, title: "Collect and Refurbish School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {icon: <PiHandHeartDuotone />, title: "Donate School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {icon: <PiChalkboardTeacherDuotone />, title: "Educate About Climate Change/Art Education", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
]

export const takeAction = [
    {image: "/splash_two.png", title: "Start a Branch", link: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {image: "/splash_three.png", title: "Volunteer", link: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."}
]

export const whyWeMatter = [
    {number: "700 Million", caption: "Environment", description: "700 million plastic markers are produced annually by the world’s leading marker brand, contributing to the 158,943,925 tons of plastic produced each year!"},
    {number: "33% of Parents", caption: "Cost", description: "Many people struggle to afford educational supplies like markers. In fact, in the United States, 1 in 3 parents expect to go into debt due to Back to School Shopping."},
    {number: "14% Decrease", caption: "Art", description: "A UPenn study found that art exposure in lower socioeconomic neighborhoods was linked to a 14% decrease in cases of child abuse and neglect, 5% decrease in obesity, and an 18% decrease in serious crime rate."},
]

export const contacts = [
    "Phone: 123123123",
    "Email: iluvcats@gmail.com",
    "Address: Pineapple Street NYC"
]

import { FaInstagram, FaFacebook } from "react-icons/fa";

export const socials = [
    {icon: <FaInstagram />, link: ""},
    {icon: <FaFacebook />, link: ""},
]

export const gradientDivs = [
    "absolute top-0 left-10 w-[800px] h-[800px] bg-primary blur-[300px] opacity-30",
    "absolute top-20 right-20 w-[850px] h-[850px] bg-secondary blur-[250px] opacity-30",
    "absolute bottom-10 left-40 w-[900px] h-[900px] bg-secondary blur-[400px] opacity-30",
    "absolute bottom-20 right-10 w-[800px] h-[800px] bg-primary blur-[350px] opacity-30"
  ];