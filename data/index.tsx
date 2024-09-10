export const extendedNavItems = [
    {label: "About", link: "/about", subItems: [
        {label: "Our Org", link: ""}
    ]},
    {label: "Team", link: "/team", subItems: []},
    {label: "Partners", link: "/partners", subItems: []},
    {label: "Stories", link: "/stories", subItems: [
        {label: "Blogs", link: ""},
        {label: "Events", link: ""}
    ]},
    {label: "Branches", link: "/branches", subItems: []},
    {label: "Take Action", link: "/#take-action", subItems: [
        {label: "Start a Branch", link: "/start-a-branch"},
        {label: "Volunteer", link: "volunteer"},
    ]}
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

import { PiRecycleDuotone, PiChalkboardTeacherDuotone, PiHandHeartDuotone } from "react-icons/pi";

export const whatWeDo = [
    {icon: <PiRecycleDuotone />, title: "Collect and Refurbish School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {icon: <PiHandHeartDuotone />, title: "Donate School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {icon: <PiChalkboardTeacherDuotone />, title: "Educate About Climate Change/Art Education", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
]

export const takeAction = [
    {image: "/splash_one.jpg", title: "Start a Branch", link: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."},
    {image: "/splash_three.jpg", title: "Volunteer", link: "", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."}
]