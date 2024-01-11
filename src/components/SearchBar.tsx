'use client'

import { FaCloudMoon, FaMagnifyingGlass, FaSun } from "react-icons/fa6";
import * as dateFns from "date-fns";
import { useEffect, useState } from "react";
import { PiSunHorizonDuotone, PiSunHorizon } from "react-icons/pi";
import { PiSun } from "react-icons/pi";
import { BsFillCloudMoonFill, BsMoonStars } from "react-icons/bs";

export default function SearchBar({ className }: { className?: string }) {
    const [time, setTime] = useState<Date>(null);
    const [hour, setHour] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(
            () => { 
                setTime(new Date()); 
                setHour(dateFns.getHours(Date.now()));
            },
            1000
        );

        return () => clearInterval(interval);
    }, [time]);
    
    return (
        <div className={`group focus-within:border-indigo-200 flex items-center px-2 space-x-2 border-b-2 w-full transition ease-in-out delay-50 duration-200 ${className ? className : ''}`}>
            <div className="text-gray-400 text-lg">
                <FaMagnifyingGlass/>
            </div>
            <input 
                className="w-full outline-none py-2 bg-transparent text-gray-500 placeholder-gray-400"
                placeholder="Search"
            />
            
            {/* <h1 className="hidden lg:block text-xl text-end font-mono">
                {time && dateFns.format(time, 'pp')}
            </h1>
            <div className="hidden lg:block">
                {
                    hour >= 21 ? <BsFillCloudMoonFill className="text-xl"/> :
                    hour >= 17 ? <PiSunHorizonDuotone  className="text-2xl"/> :
                    hour >= 12 ? <PiSun className="text-2xl"/> :
                    hour >= 5 ? <PiSunHorizon className="text-2xl"/> :
                    <BsMoonStars className="text-xl"/>
                        
                }
            </div>
            <h1 className="hidden lg:block text-xl text-end">
                {time && dateFns.format(time, 'PP')}
            </h1> */}
        </div>
    )
}