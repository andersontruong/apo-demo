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
        <div className={`flex items-center space-x-3 mdspace-x-4 bg-white px-4 md:px-6 rounded-lg drop-shadow-md ${className}`}>
            <div className="text-slate-400 text-lg">
                <FaMagnifyingGlass/>
            </div>
            <input 
                className="min-w-0 grow outline-none py-3 md:py-5 text-blue-800 text-lg"
                placeholder="Search"
            />
            
            <h1 className="hidden lg:block text-xl text-end">
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
            </h1>
        </div>
    )
}