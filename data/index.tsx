export const extendedNavItems = [
    {label: "About", link: "/about", subItems: [
        {label: "Our Org", link: ""},
        {label: "Partners", link: ""},
        {label: "Why We Matter", link: ""}
    ]},
    {label: "Team", link: "/team", subItems: [
        {label: "Executive Board", link: ""},
        {label: "Advisory Board", link: ""},
    ]},
    {label: "Blogs", link: "/blog", subItems: []},
    {label: "Branches", link: "/branches", subItems: []},
    {label: "Take Action", link: "/take-action", subItems: [
        {label: "Start a Branch", link: ""},
        {label: "Volunteer", link: ""},
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

import { BsCollectionFill } from "react-icons/bs";
import { FaRecycle, FaDonate, FaPaintBrush } from "react-icons/fa";

export const services = [
    {icon: <FaDonate />, title: "Collect School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum, repellat et deserunt quasi neque."},
    {icon: <FaDonate />, title: "Refurbish school Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum, repellat et deserunt quasi neque."},
    {icon: <FaDonate />, title: "Donate School Supplies", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum, repellat et deserunt quasi neque."},
    {icon: <FaDonate />, title: "Educate About Climate Change/Art Education", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum, repellat et deserunt quasi neque."},
]