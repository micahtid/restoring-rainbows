"use client";

import { useState } from "react";
import { MdDashboard, MdPeople, MdBusiness, MdEvent, MdArticle, MdBarChart, MdLocationOn, MdWorkOutline } from "react-icons/md";

import EntryField from "./components/EntryField";

import BranchDashboard from "./components/BranchDashboard";
import StatisticsDashboard from "./components/StatisticsDashboard";
import ExecutiveDashboard from "./components/ExecutiveDashboard";
import VolunteersDashboard from "./components/VolunteersDashboard";
import PartnersDashboard from "./components/PartnersDashboard";
import EventsDashboard from "./components/EventsDashboard";
import StoriesDashboard from "./components/StoriesDashboard";
import OpportunityDashboard from "./components/OpportunityDashboard";

const Admin = () => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const states = [
        {title: "Branches", component: <BranchDashboard />, icon: <MdLocationOn />},
        {title: "Statistics", component: <StatisticsDashboard />, icon: <MdBarChart />},
        {title: "Executive Board", component: <ExecutiveDashboard />, icon: <MdDashboard />},
        {title: "Volunteers", component: <VolunteersDashboard />, icon: <MdPeople />},
        {title: "Partners", component: <PartnersDashboard />, icon: <MdBusiness />},
        {title: "Events", component: <EventsDashboard />, icon: <MdEvent />},
        {title: "Opportunities", component: <OpportunityDashboard />, icon: <MdWorkOutline />},
        {title: "Prism", component: <StoriesDashboard />, icon: <MdArticle />}
    ];
    const [activeState, setActiveState] = useState(0);

  return (
    <div className="w-[100vw] mt-24">
        <div className="h-[80vh] max-w-[1200px] mx-auto py-8 mb-12 max-[1000px]:hidden">
            {adminStatus ? (
                <div className="w-full h-full flex border border-gray-100">
                    {/* Sidebar Navigation */}
                    <div className="w-[250px] h-full border-r border-gray-100 bg-gray-50 px-4 py-8">
                        <h2 className="text-xl font-bold text-header mb-8 px-4">Admin Dashboard</h2>
                        <div className="flex flex-col gap-y-2 w-full">
                            {
                                states.map((state, index) => (
                                    <button 
                                    key={index}
                                    onClick={() => setActiveState(index)}
                                    className={`flex items-center gap-x-3 w-full px-4 py-3 text-left
                                      ${activeState === index ? 
                                        "bg-primary/10 text-primary border-l-4 border-primary" : 
                                        "text-gray-600 hover:bg-gray-100 border-l-4 border-transparent"} 
                                      transition-all duration-300`}>
                                        <span className="text-xl">{state.icon}</span>
                                        <span>{state.title}</span>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* Main Content Area */}
                    <div className="flex-1 h-full overflow-y-auto no-scrollbar py-8 px-12">
                        {states[activeState].component}
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center">
                    <EntryField password={password} setPassword={setPassword} 
                    username={username} setUsername={setUsername} 
                    setAdminStatus={setAdminStatus} />
                </div>
            )}
        </div>
        <div className="max-[1000px]:flex hidden w-[100vw] h-[85vh] justify-center items-center">
            <p className="px-4">Please visit on a larger device.</p>
        </div>
    </div>
  )
}

export default Admin