'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBookBookmark, FaCalendarDays, FaChartLine, FaChartSimple, FaGear, FaUserGear } from "react-icons/fa6";
import SearchBar from "./SearchBar";

function SideNavButton({ Icon, label, onClick=()=>{}, focused }: { Icon: React.ComponentType<any>, label: string, onClick?: () => any, focused?: boolean }) {
    return (
        <div onClick={onClick} className={`flex items-center space-x-2 py-4 px-10 hover:cursor-pointer hover:bg-indigo-50 hover:text-blue-600 transition ease-in-out delay-50 duration-200 ${focused ? 'bg-indigo-100 text-blue-800' : ''}`}>
            <Icon />
            <h1 className="text-sm">{label}</h1>
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

export default function SideNav({ className="", setIndex } : { className?: string, setIndex?: (arg0: any) => any }) {
    const [selectedButton, setSelectedButton] = useState<0|1|2|3|4|5>(0);

    useEffect(() => {
        console.log(selectedButton)
        setIndex(selectedButton);
    }, [selectedButton]);
    
    return (
        <nav className={`h-screen sticky top-0 left-0 hidden md:block pt-8 pb-4 ${className}`}>
            <div className="flex flex-col items-center w-full space-y-10">
                <Link className="hover:text-blue-500 flex items-center space-x-1"  href="/">
                    <img className="w-12" src="/Alpha_Phi_Omega.png" />
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
        </nav>
    )
}