'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBookBookmark, FaCalendarDays, FaChartLine, FaChartSimple, FaGear, FaUserGear } from "react-icons/fa6";

function SideNavButton({ Icon, label, onClick=()=>{}, focused }: { Icon: React.ComponentType<any>, label: string, onClick?: () => any, focused?: boolean }) {
    return (
        <div onClick={onClick} className={`flex items-center space-x-2 py-4 px-12 hover:cursor-pointer hover:bg-indigo-50 hover:text-blue-600 transition ease-in-out delay-50 duration-300 ${focused ? 'bg-indigo-100 text-blue-800' : ''}`}>
            <Icon />
            <h1>{label}</h1>
        </div>
    )
}

function Blurb({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <div className={`bg-gradient-to-br rounded-xl hover:cursor-pointer ${className}`}>
            {children}
        </div>
    )
}

export default function SideNav({ className="" } : { className?: string }) {
    const [selectedButton, setSelectedButton] = useState<0|1|2|3|4|5>(0);
    
    return (
        <nav className={`h-screen sticky top-0 left-0 hidden md:flex flex-col h-full items-center pt-8 pb-14 justify-between ${className}`}>
            <div className="flex flex-col items-center w-full space-y-10">
                <Link className="hover:text-blue-500 flex items-center space-x-1 lg:px-8 -ml-2"  href="/">
                    <img className="w-8" src="/Alpha_Phi_Omega.png" />
                    <div className="flex flex-col items-center -space-y-2 mt-1">
                        <h1 className={`drop-shadow-xl text-md font-medium transition ease-in-out delay-50 duration-300`}>
                        Alpha Phi Omega
                        </h1>
                        <h1 className={`drop-shadow-xl text-sm font-medium transition ease-in-out delay-50 duration-300`}>
                        X Chapter
                        </h1>
                    </div>
                </Link>
                <div className="flex flex-col w-full text-neutral-500">
                    <SideNavButton Icon={FaChartSimple} label="Dashboard" onClick={() => setSelectedButton(0)} focused={selectedButton == 0}/>
                    <SideNavButton Icon={FaCalendarDays} label="Calendar" onClick={() => setSelectedButton(1)} focused={selectedButton == 1}/>
                    <SideNavButton Icon={FaBookBookmark} label="My Events" onClick={() => setSelectedButton(2)} focused={selectedButton == 2}/>
                    <SideNavButton Icon={FaChartLine} label="My Status" onClick={() => setSelectedButton(3)} focused={selectedButton == 3}/>
                    <SideNavButton Icon={FaUserGear} label="My Profile" onClick={() => setSelectedButton(4)} focused={selectedButton == 4}/>
                    <SideNavButton Icon={FaGear} label="Settings" onClick={() => setSelectedButton(5)} focused={selectedButton == 5}/>
                </div>
            </div>
            <Blurb className="text-white flex flex-col items-center p-6 from-blue-800 to-indigo-500 shadow-2xl motion-safe:animate-pop">
                <h1 className="font-medium text-lg">
                    Did you know?
                </h1>
                <p className="text-sm">
                    deez nutz
                </p>
            </Blurb>
        </nav>
    )
}