'use client';

import { ReactNode, useEffect, useState } from "react";
import { Abril_Fatface, Edu_SA_Beginner } from 'next/font/google';
import Link from "next/link";
import { FaBookBookmark, FaBookmark, FaCalendarDays, FaChartLine, FaChartSimple, FaGear, FaUserGear } from "react-icons/fa6";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

function UpcomingEventsWidget() {
    return (
        <div className="lg:w-1/2 flex flex-col items-center space-y-10 bg-white rounded-xl py-10 px-6 sm:p-10 drop-shadow-lg">
            <h1 className="w-full text-2xl text-center truncate">
                Upcoming Events
            </h1>
            <div className="xl:w-full grow flex flex-col space-y-4">
                <div className="w-full flex flex-col items-center bg-gradient-to-br from-indigo-400 to-blue-800 p-4 rounded-xl drop-shadow-xl hover:cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300">
                    <h1 className="w-full text-white truncate">
                        Westwood Trash Pickup
                    </h1>
                    <h1 className="w-full text-indigo-200 truncate">
                        December 20, 2023
                    </h1>
                </div>
                <div className="fw-full lex flex-col items-center bg-gradient-to-br from-lime-600 to-green-800 p-4 rounded-xl drop-shadow-xl hover:cursor-pointer hover:scale-110 transition ease-in-out delay-50 duration-300">
                    <h1 className="w-full text-white truncate">
                        Porto's Fundraiser
                    </h1>
                    <h1 className="w-full text-green-200 truncate">
                        December 20, 2023
                    </h1>
                </div>
            </div>
        </div>
    )
}

function EventTrackerWidget() {
    return (
        <div className="w-full flex flex-col items-center space-y-4 bg-white rounded-xl p-6 sm:p-10 drop-shadow-lg">
            <h1 className="w-full text-2xl truncate text-center">
                Event Tracker
            </h1>
            <button className="text-white py-4 px-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-700 drop-shadow-lg hover:scale-110 transition ease-in-out delay-50 duration-300">
                <h1 className="truncate">
                    Track an Event
                </h1>
            </button>
        </div>
    )
}

function LeaderboardWidget() {
    return (
        <div className="grow flex flex-col items-center space-y-4 bg-white rounded-xl p-6 sm:p-10 drop-shadow-lg">
            <div className="w-full flex flex-col items-center">
                <h1 className="w-full text-2xl text-center truncate">
                    Leaderboard
                </h1>
                <h1 className="w-full text-neutral-500 text-center truncate">
                    Service Hours
                </h1>
            </div>
            <div className="flex flex-col items-center w-full space-y-1">
                <div className="relative flex flex-col w-full">
                    <div className="z-0 flex absolute w-full h-full rounded-xl bg-gray-400 overflow-hidden">
                        <span className="w-full rounded-[10px] h-full bg-gradient-to-br from-sky-500 to-blue-700 drop-shadow-lg"></span>
                    </div>
                    <div className="w-full flex justify-between">
                        <h1 className="text-white z-10 p-4 truncate">
                            Lucy Yin
                        </h1>
                        <h1 className="text-white z-10 p-4 truncate">
                            200
                        </h1>
                    </div>
                </div>
                <div className="relative flex flex-col w-full">
                    <div className="flex absolute w-full h-full rounded-xl bg-gray-400 overflow-hidden">
                        <span className="w-[60%] rounded-[10px] h-full bg-gradient-to-br from-sky-500 to-blue-700 drop-shadow-lg"></span>
                    </div>
                    <div className="w-full flex justify-between">
                        <h1 className="text-white z-10 p-4 truncate">
                            Joseph Ramirez
                        </h1>
                        <h1 className="text-white z-10 p-4 truncate">
                            120
                        </h1>
                    </div>
                </div>
                <div className="relative flex flex-col w-full">
                    <div className="flex absolute w-full h-full rounded-xl bg-gray-400 overflow-hidden">
                        <span className="w-[5%] rounded-[10px] h-full bg-gradient-to-br from-sky-500 to-blue-700 drop-shadow-lg"></span>
                    </div>
                    <div className="w-full flex justify-between">
                        <h1 className="text-white z-10 p-4 truncate">
                            Thomas Ho
                        </h1>
                        <h1 className="text-white z-10 p-4 truncate">
                            10
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AchievementsWidget() {
    return (
        <div className="min-h-[500px] md:grow flex flex-col space-y-6 items-center bg-white rounded-xl p-6 sm:p-10 drop-shadow-lg">
            <div className="flex flex-col">
                <h1 className="text-xl text-center text-neutral-600 w-full truncate">
                    APO Achievements:
                </h1>
                <h1 className="text-3xl text-center w-full truncate p-4">
                    Pants a Brother!
                </h1>
            </div>
            <div className="grow grid grid-cols-3 gap-x-4 sm:gap-x-14 xl:gap-x-8 2xl:gap-x-14  overflow-hidden">
                <div className="flex flex-col justify-end w-full overflow-hidden">
                    <div className="w-full h-[80%] py-4 px-2 sm:p-4 rounded-xl bg-gradient-to-b from-red-500 to-rose-800 drop-shadow-lg">
                        <h1 className="text-sm sm:text-xl xl:text-base 2xl:text-xl text-center text-white w-full truncate">
                            Alphas
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col justify-end w-full overflow-hidden">
                    <div className="w-full h-[100%] py-4 px-2 sm:p-4 rounded-xl bg-gradient-to-b from-amber-500 to-orange-800 drop-shadow-lg">
                        <h1 className="text-sm sm:text-xl xl:text-base 2xl:text-xl text-center text-white w-full truncate">
                            Phis
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col justify-end w-full overflow-hidden">
                    <div className="w-full h-[40%] py-4 px-2 sm:p-4 rounded-xl bg-gradient-to-b from-violet-500 to-purple-800 drop-shadow-lg">
                        <h1 className="text-sm sm:text-xl xl:text-base 2xl:text-xl text-center text-white w-full truncate">
                            Omegas
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DashboardComponent() {
    return (
        <div className="h-full flex flex-col space-y-10">
            <SearchBar className=""/>
            <div className="flex">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl lg:text-4xl">
                        Welcome back, Poom Yoodee! 👋
                    </h1>
                </div>
            </div>
            <div className="grow flex flex-col xl:flex-row w-full space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 2xl:space-x-10">
                <div className="flex flex-col lg:flex-row space-y-6 space-x-0 lg:space-y-0 lg:space-x-6 2xl:space-x-10">
                    <UpcomingEventsWidget />
                    <div className="flex flex-col space-y-6 2xl:space-y-10 lg:w-1/2">
                        <EventTrackerWidget />
                        <LeaderboardWidget />
                    </div>
                </div>
                
                <AchievementsWidget />
            </div>
        </div>
    )
}

export default function Dashboard() {

    return (
        <main className="flex flex-col md:flex-row w-full min-h-screen">
            <SideNav className="bg-white drop-shadow-xl"/>
            <div className="grow min-h-screen bg-indigo-50 p-4 md:p-10 2xl:p-14">
                <DashboardComponent />
            </div>
            <MobileNav />
        </main>
    )
}