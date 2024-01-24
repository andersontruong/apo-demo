'use client';

import { ReactNode, useEffect, useState } from "react";
import { Abril_Fatface, Edu_SA_Beginner } from 'next/font/google';
import Link from "next/link";
import SideNav from "@/components/SideNav";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
import DashboardComponent from "./DashboardComponent";
import CalendarComponent from "./CalendarComponent";

const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });

export default function Dashboard() {
    const [index, setIndex] = useState<number>(0);
    return (
        <main className="flex flex-col md:flex-row w-full min-h-screen">
            <SideNav className="bg-white drop-shadow-xl" setIndex={setIndex}/>
            {/* {index} */}
            <div className="grow min-h-screen bg-neutral-50 p-4 md:p-4 lg:p-10 2xl:p-14">
                <DashboardComponent />
                
            </div>
        </main>
    )
}