// Landing Page
export const landingPageSocialMediaDescription = "Stay connected with Restoring Rainbows by following us on social media for the latest updates and creative opportunities. Join our online community and be part of the movement; spreading creativity and sustainability worldwide!"
export const landingPagePartnerDescription = "We collaborate with a wide range of organizations from around the world, including many that are youth-led. Our partners help us spread creativity, sustainability, and art education globally."

export const landingPageTakeAction = [
    {image: "/branch.png", title: "Start a Branch", link: "/take-action#start-a-branch", description: "No matter your age, location, or experience, anyone can start a Restoring Rainbows branch. We provide all the resources and support needed to ensure your branch thrives. Join a global community of changemakers and help us bring creativity, sustainability, and education to communities around the world!"},
    {image: "/volunteer.png", title: "Volunteer", link: "/take-action#volunteer", description: "Join our virtual volunteer program! Earn volunteer hours and join in the movement to create a global impact. Contribute by writing articles on the intersection of climate change and art, or submit digital worksheets to be donated to those in need."}
]

// Components 
export const extendedNavItems = [
    {label: "About", link: "/about", subItems: []},
    {label: "Team", link: "/team", subItems: []},
    {label: "Partners", link: "/partners", subItems: []},
    {label: "Stories", link: "javascript:void(0)", subItems: [
        {label: "Prism", link: "/donate"},
        {label: "Events", link: "/events"}
    ]},
    {label: "Branches", link: "/branches", subItems: []},
    {label: "Take Action", link: "javascript:void(0)", subItems: [
        {label: "Start Branch", link: "/take-action#start-a-branch"},
        {label: "Volunteer", link: "/take-action#volunteer"},
    ]}
]

export const contacts = [
    "Phone: Coming Soon",
    "Email: restoringrainbows.offical@gmail.com",
    "Address: Coming Soon"
]

import { FaInstagram, FaTiktok, FaYoutube  } from "react-icons/fa";
import { FaXTwitter, FaThreads  } from "react-icons/fa6";

export const socials = [
    {icon: <FaInstagram />, link: "https://www.instagram.com/restoring_rainbows_official/"},
    {icon: <FaXTwitter />, link: "https://x.com/RestoreRainbows"},
    {icon: <FaYoutube />, link: "https://www.youtube.com/@RestoringRainbows"},
    {icon: <FaTiktok />, link: "https://www.tiktok.com/@restoringrainbows"},
    {icon: <FaThreads />, link: "https://www.threads.net/@restoring_rainbows_official"}
]

import { PiRecycleDuotone, PiChalkboardTeacherDuotone, PiHandHeartDuotone } from "react-icons/pi";

export const whatWeDo = [
    {icon: <PiRecycleDuotone />, title: "Collect and Refurbish School Supplies", description: "Whether they're worn out, barely working, or gently used, we collect your school supplies and restore them, keeping them out of landfills."},
    {icon: <PiHandHeartDuotone />, title: "Donate School Supplies", description: "We donate school supplies to unlock the creative potential of children, offering them the tools to turn their dreams into colorful realities, no matter their circumstances."},
    {icon: <PiChalkboardTeacherDuotone />, title: "Educate About Climate Change/Art Education", description: "We educate communities about the intersection of climate change and art, raising awareness and inspiring meaningful action."},
]

// About Us Page
export const aboutPageMissionStatement = `Restoring Rainbows is an international, youth-led nonprofit dedicated to making art accessible while protecting the planet. Our mission is to educate and empower diverse communities about the critical connections between art and climate change. With hundreds of volunteers across dozens of countries, we've already made a positive impact on countless lives.\n Restoring Rainbows is a certified 501(c)3 nonprofit organization registered in the United States of America.`

export const aboutPageOurStory = `
Both Jordan Chen and Grace Millard had a passion for art and recognized the importance and happiness that comes from making art. They never lacked the supplies or the resources to make art, but quickly realized this wasn't the case for everyone with one-third of households in the U.S. not being able to afford basic school supplies, let alone extras like paint or canvases.
At the same time, Jordan and Grace were struck by the large quantities of plastic markers and other supplies being discarded in schools—excess on one side, and necessity on the other. As they did more research they became increasingly alarmed by both the lack of access to educational materials, and the global climate crisis. They noticed an opportunity to close the divide by repurposing unused materials and giving them to those who needed them the most.
Through Restoring Rainbows Jordan and Grace have personally seen the kindness of certain individuals and the meaningful influence of others, motivating them to keep promoting art accessibility and sustainability globally.
`

export const aboutPageWhyWeMatter = [
    {number: "700 Million", caption: "Environment", description: "700 million plastic markers are produced annually by the world's leading marker brand, contributing to the 158,943,925 tons of plastic produced each year!"},
    {number: "33% of Parents", caption: "Cost", description: "Many people struggle to afford educational supplies like markers. In fact, in the United States, 1 in 3 parents expect to go into debt due to Back to School Shopping."},
    {number: "14% Decrease", caption: "Art", description: "A UPenn study found that art exposure in lower socioeconomic neighborhoods was linked to a 14% decrease in cases of child abuse and neglect, 5% decrease in obesity, and an 18% decrease in serious crime rate."},
]

// Partners Page
export const partnerPageDescription = 'Through these collaborative efforts, we aim to inspire change and empower individuals to embrace the arts while supporting environmental responsibility.'

// Take Action Page
export const takeActionPageSections = [
    {
        id: "start-a-branch",
        title: "Start a Branch",
        description: "Interested in starting a branch of Restoring Rainbows? You'll be joining a network of over 100 branches spanning across more than 40 countries worldwide. Just fill out the form below!",
        buttonLabel: "Register",
        buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_DgtEZTHJwGfz41yaol17Y0xA6wItYk_VTh5RXp-xL8PSoQ/viewform?usp=sf_link "
    },
    {
        id: "volunteer",
        title: "Volunteer",
        description: "Sign up now to become a volunteer with Restoring Rainbows! Contribute to our global impact by donating your time and earning volunteer hours in the process.",
        buttonLabel: "Volunteer",
        buttonLink: "/donate"
    }
];