'use client';

import UserNavbar from "@/components/UserNavbar";
import { useEffect, useState } from "react";
import Events from "./Events";
import Status from "./Status";

export default function Dashboard() {
    const [tab, setTab] = useState<1|2|3|4>(2);

    return (
        <main className="flex flex-col w-full h-screen items-center">
            <UserNavbar />
            <div className="grow flex flex-col items-center w-full py-10 bg-neutral-100">
            <h1 className={`text-2xl md:text-3xl lg:text-4xl`}>
                Hello, Poom Yoodee!
            </h1>
            <div className="flex space-x-2 sm:space-x-4 md:space-x-8 mt-4 text-center z-10 text-sm md:text-base w-full justify-center">
                <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">My Status</h1>
                <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">My Events</h1>
                <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">Calendar</h1>
                <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">ExComm</h1>
            </div>
            <span className="border-t-2 border-neutral-300 w-5/6 sm:w-3/4 -mt-[3px] z-0"></span>
            <div className={`mt-4 bg-white w-3/4 grow shadow-lg rounded-xl p-4`}>
                <Events className={`${tab === 1 ? 'block' : 'hidden'}`}/>
                <Status />
            </div>
        </div>
        </main>
    )
}