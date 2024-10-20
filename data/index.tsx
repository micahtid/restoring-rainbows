// Landing Page
export const landingPageSocialMediaDescription = "Stay connected with Restoring Rainbows by following us on social media for the latest updates and creative opportunities. Join our online community and be part of the movement; spreading creativity and sustainability worldwide!"
export const landingPagePartnerDescription = "We collaborate with a wide range of organizations from around the world, including many that are youth-led. Our partners help us spread creativity, sustainability, and art education globally."

export const landingPageTakeAction = [
    {image: "/graphic_one.jpg", title: "Start a Branch", link: "/start-a-branch", description: "No matter your age, location, or experience, anyone can start a Restoring Rainbows branch. We provide all the resources and support needed to ensure your branch thrives. Join a global community of changemakers and help us bring creativity, sustainability, and education to communities around the world!"},
    {image: "/graphic_one.jpg", title: "Volunteer", link: "/volunteer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum laboriosam eos possimus ipsum.."}
]

// Components 
export const extendedNavItems = [
    {label: "About", link: "/about", subItems: []},
    {label: "Team", link: "/team", subItems: []},
    {label: "Partners", link: "/partners", subItems: []},
    {label: "Stories", link: "", subItems: [
        {label: "Blogs", link: "/stories"},
        {label: "Events", link: "/events"}
    ]},
    {label: "Branches", link: "/branches", subItems: []},
    {label: "Take Action", link: "/#take-action", subItems: [
        {label: "Start Branch", link: "/start-a-branch"},
        {label: "Volunteer", link: "/volunteer"},
    ]}
]

export const contacts = [
    "Phone: 123123123",
    "Email: iluvcats@gmail.com",
    "Address: Pineapple Street NYC"
]

import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const socials = [
    {icon: <FaInstagram />, link: ""},
    {icon: <FaFacebook />, link: ""},
    {icon: <FaLinkedin />, link: ""},
    {icon: <FaTwitter />, link: ""}
]

import { PiRecycleDuotone, PiChalkboardTeacherDuotone, PiHandHeartDuotone } from "react-icons/pi";

export const whatWeDo = [
    {icon: <PiRecycleDuotone />, title: "Collect and Refurbish School Supplies", description: "Whether they&apos;re worn out, barely working, or gently used, we collect your school supplies and restore them, keeping them out of landfills."},
    {icon: <PiHandHeartDuotone />, title: "Donate School Supplies", description: "We donate school supplies to unlock the creative potential of children, offering them the tools to turn their dreams into colorful realities, no matter their circumstances."},
    {icon: <PiChalkboardTeacherDuotone />, title: "Educate About Climate Change/Art Education", description: "We educate communities about the intersection of climate change and art, raising awareness and inspiring meaningful action."},
]

// About Us Page
export const aboutPageMissionStatement = `Restoring Rainbows is an international, youth-led nonprofit dedicated to making art accessible while protecting the planet. 
Our mission is to educate and empower diverse communities about the critical connections between art and climate change. With hundreds of volunteers across dozens of countries, 
we&apos;ve already made a positive impact on countless lives. 
Restoring Rainbows is a certified 501(c)3 nonprofit organization registered in the United States of America.`

export const aboutPageOurStory = `Both Jordan and Grace had a passion for art and recognized the importance and happiness that comes from making art. They lacked the supplies or the resources to make art, 
but quickly realized this wasn&apos;t the case for everyone with one-third of households in the U.S. not being able to afford basic school supplies, let alone extras like paint or canvases. 
At the same time, Jordan and Grace were struck by the large quantities of plastic markers and other supplies being discarded in schools—excess on one side, and necessity on the other. 
As they did more research they became increasingly alarmed by both the lack of access to educational materials, and the global climate crisis. They noticed an opportunity to close the divide 
by repurposing unused materials and giving them to those who needed them the most. 
Through Restoring Rainbows Jordan and Grace have personally seen the kindness of certain individuals and the meaningful influence of others, motivating them to keep promoting art accessibility 
and sustainability globally.`

export const aboutPageWhyWeMatter = [
    {number: "700 Million", caption: "Environment", description: "700 million plastic markers are produced annually by the world&apos;s leading marker brand, contributing to the 158,943,925 tons of plastic produced each year!"},
    {number: "33% of Parents", caption: "Cost", description: "Many people struggle to afford educational supplies like markers. In fact, in the United States, 1 in 3 parents expect to go into debt due to Back to School Shopping."},
    {number: "14% Decrease", caption: "Art", description: "A UPenn study found that art exposure in lower socioeconomic neighborhoods was linked to a 14% decrease in cases of child abuse and neglect, 5% decrease in obesity, and an 18% decrease in serious crime rate."},
]

// Partners Page
export const partnerPageDescription = 'Through these collaborative efforts, we aim to inspire change and empower individuals to embrace the arts while supporting environmental responsibility.'

// Start a Branch Page
export const branchPageDescription = `Interested in starting a branch of Restoring Rainbows? You&apos;ll be joining a network of over 100 branches spanning across more than 40 countries worldwide. Just fill out the form below!`
