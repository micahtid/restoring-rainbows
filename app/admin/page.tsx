"use client";

import { useState } from "react";

import EntryField from "./components/EntryField";
import BranchDashboard from "./components/BranchDashboard";
import StatisticsDashboard from "./components/StatisticsDashboard";
import ExecutiveDashboard from "./components/ExecutiveDashboard";
import VolunteersDashboard from "./components/VolunteersDashboard";
import PartnersDashboard from "./components/PartnersDashboard";

const Admin = () => {
    const [adminStatus, setAdminStatus] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const states = [{title: "Branches", component: <BranchDashboard />}, {title: "Statistics", component: <StatisticsDashboard />},
        {title: "Executive Board", component: <ExecutiveDashboard />}, {title: "Volunteers", component: <VolunteersDashboard />},
        {title: "Partners", component: <PartnersDashboard />}]
    const [activeState, setActiveState] = useState(0);

  return (
    <div className="w-[100vw]">
        <div className="w-[100vw] h-[85vh]
        max-[1000px]:hidden">
            {adminStatus ? (
                <div className="w-full h-full
                flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-x-6">
                        {
                            states.map((state, index) => (
                                <button 
                                key={index}
                                onClick={() => setActiveState(index)}
                                className={`${activeState === index ? "text-black underline" : "text-gray-300"}`}>
                                    {states[index].title}
                                </button>
                            ))
                        }
                    </div>
                    {
                        states[activeState].component
                    }
                </div>
            ) : (
                <div className="w-full h-full
                flex justify-center items-center">
                    <EntryField password={password} setPassword={setPassword} 
                    username={username} setUsername={setUsername} 
                    setAdminStatus={setAdminStatus} />
                </div>
            )}
        </div>
        <div className="max-[1000px]:flex hidden
            w-[100vw] h-[85vh]
            justify-center items-center">
                <p className="px-4">Please visit on a larger device.</p>
        </div>
    </div>
  )
}

export default Admin