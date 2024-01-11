'use client'
import * as dateFns from "date-fns";
import { useEffect, useState } from "react";
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { PiHandHeartLight } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiThreeFriends } from "react-icons/gi";

function DashboardEvent({ title, date, Icon }: { title: string, date: Date, Icon: React.ComponentType<any> }) {
    return <div className="flex flex-nowrap items-center space-x-2 w-full hover:cursor-pointer">
        <div className="flex items-center justify-center p-2 rounded-full aspect-square bg-gray-200">
            <Icon className="text-3xl text-gray-400"/>
        </div>
        <div className="flex flex-col truncate ...">
            <h1 className="text-gray-600 truncate ...">
                {title}
            </h1>
            <div className="text-gray-400">
                {dateFns.format(date, 'PP')}
            </div>
        </div>
    </div>
}

export default function DashboardCalendar() {
    const today = new Date();
    const [focusDate, setFocusDate] = useState(dateFns.startOfWeek(new Date()));
    const [focusWeek, setFocusWeek] = useState<Date[]>([]);

    const shiftWeek = (amount: number) => {
        setFocusDate(dateFns.startOfWeek(dateFns.addWeeks(focusDate, amount)));
    }

    useEffect(() => {
        setFocusWeek(dateFns.eachDayOfInterval({
            start: dateFns.startOfWeek(focusDate),
            end: dateFns.endOfWeek(focusDate)
        }));
    }, [focusDate]);

    return (
        <div className="hidden md:flex flex-col items-center w-full space-y-6">
            <div className="w-full flex items-center justify-between">
                <h1 className="xl:text-lg text-gray-600">
                    {dateFns.format(focusDate, 'LLL y')}
                </h1>
                <div className="flex space-x-1">
                    <TbSquareRoundedArrowLeftFilled onClick={() => { if (dateFns.isBefore(dateFns.startOfWeek(today), focusDate)) shiftWeek(-1); }} className={`text-2xl lg:text-3xl transition ease-in-out delay-50 duration-200 ${dateFns.isBefore(dateFns.startOfWeek(today), focusDate) ?  'text-gray-700 hover:text-gray-500 hover:cursor-pointer' : 'text-gray-400'}`}/>
                    <TbSquareRoundedArrowRightFilled onClick={() => { shiftWeek(1); }} className="text-2xl lg:text-3xl text-gray-700 hover:text-gray-500 hover:cursor-pointer transition ease-in-out delay-50 duration-200"/>
                </div>
            </div>
            <div className="grid grid-cols-7 w-full gap-y-2">
                {
                    focusWeek.map((date, i) => 
                    <div className="text-center text-neutral-400" key={i}>
                        {dateFns.format(date, 'EEEEE')}
                    </div>
                    )
                }
                {
                    focusWeek.map((date, i) => 
                    <div className={`flex justify-center items-center rounded-full aspect-square ${dateFns.isSameDay(date, today) ? 'bg-gray-600 text-white' : 'text-gray-600'}`} key={i}>
                        <h1 className="text-center">
                            {dateFns.format(date, 'd')}
                        </h1>
                    </div>
                    )
                }
            </div>
            <div className="flex flex-col w-full text-left divide-y-[1.5px] [&>*]:py-2">
                <DashboardEvent 
                    title="Santa Monica Beach Cleanup" 
                    date={new Date(2023, 11, 30)} 
                    Icon={PiHandHeartLight}
                />
                <DashboardEvent 
                    title="Porto's Fundraiser" 
                    date={new Date(2023, 11, 30)} 
                    Icon={GiTakeMyMoney}
                />
                <DashboardEvent 
                    title="Karaoke Fellowship" 
                    date={new Date(2023, 11, 30)} 
                    Icon={GiThreeFriends}
                />
            </div>
        </div>
    )
}