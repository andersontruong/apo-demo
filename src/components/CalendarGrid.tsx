'use client'

import { Entry } from "contentful";
import * as dateFns from "date-fns";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface CalendarDate {
    date: Date,
    thisMonth: boolean
}

const EVENT_STYLE = {
    'fel/Fellowship': 'bg-orange-100 border border-orange-500 hover:bg-orange-200',
    's/Service': 'bg-red-100 border border-red-500 hover:bg-red-200'
}

export default function CalendarGrid(events: any) {
    const [days, setDays] = useState<Array<CalendarDate>>([]);
    const [indexedEvents, setIndexedEvents] = useState<any>();
    const [monthStart, setMonthStart] = useState<Date>(new Date());
    const [calendarStart, setCalendarStart] = useState<Date>(new Date());
    const [monthEnd, setMonthEnd] = useState<Date>(new Date());
    const [calendarEnd, setCalendarEnd] = useState<Date>(new Date());

    const shiftMonth = (months) => {
        let mStart = monthStart;
        for (let i = 0; i < Math.abs(months); i++) {
            if (months < 0) {
                mStart = dateFns.startOfMonth(dateFns.addDays(calendarStart, -1));
                setMonthStart(mStart);
            }
            else if (months > 0) {
                mStart = dateFns.startOfMonth(dateFns.addDays(calendarEnd, 1));
                setMonthStart(mStart);
            }
            else return;
        }
        const mEnd = dateFns.lastDayOfMonth(mStart);
        setCalendarStart(dateFns.addDays(mStart, -parseInt(dateFns.format(mStart, "i"))));
        setMonthEnd(mEnd);
        setCalendarEnd(dateFns.addDays(mEnd, 7 - parseInt(dateFns.format(mEnd, "i"))));
    }

    useEffect(() => {
        const mStart = dateFns.startOfMonth(new Date());
        const mEnd = dateFns.lastDayOfMonth(mStart);
        setMonthStart(mStart);
        setMonthEnd(mEnd);
        setCalendarStart(dateFns.addDays(mStart, -parseInt(dateFns.format(mStart, "i"))));
        setCalendarEnd(dateFns.addDays(mEnd, 7 - parseInt(dateFns.format(mEnd, "i"))));
    }, []);
    
    useEffect(() => {
        if (calendarStart.getTime() <= monthStart.getTime() && calendarStart.getTime() < calendarEnd.getTime()) {
            let day = calendarStart;
            const dayArray: Array<CalendarDate> = [];
            do {
                dayArray.push({ date: day, thisMonth: dateFns.isSameMonth(day, monthStart)})
                day = dateFns.addDays(day, 1);
            }
            while (!dateFns.isSameDay(day, calendarEnd));
            
            setDays(dayArray);
        }
    }, [monthStart, calendarStart, calendarEnd]);

    useEffect(() => {
        const eventsMap = {};
        for (const event of events.events) {
            const iso = dateFns.startOfDay(Date.parse(event.fields.startDateTime)).toISOString();
            if (!eventsMap[iso]) {
                eventsMap[iso] = [event.fields];
            }
            else {
                eventsMap[iso].push(event.fields);
            }
        }
        setIndexedEvents(eventsMap);
    }, [events]);
    
    return (
        <div>
            <div className="flex flex-col my-4">
                <h1 className="text-center text-2xl">{dateFns.getYear(monthStart)}</h1>
                <h1 className="text-4xl text-center">{dateFns.format(monthStart, 'LLLL')}</h1>
                <div className="flex justify-center items-center space-x-4 py-2">
                    <button onClick={() => { shiftMonth(-1); }}>
                        <FaAngleLeft className="text-3xl"/>
                    </button>
                    <button onClick={() => { shiftMonth(1); }}>
                        <FaAngleRight className="text-3xl"/>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 text-start shadow-xl">
                {days.slice(0, 7).map((day, i) => 
                    <div className={`bg-blue-100 border-neutral-200 border-t-[1px] border-r-[1px] ${i == 0 && 'border-l-[1px]'}`} key={i}>
                        <h1 className="text-center truncate">{dateFns.format(day.date, 'E')}</h1>
                    </div>
                )}
                {days.map((day, i) => 
                    {
                        const eventsOnDay = indexedEvents[day.date.toISOString()];
                        return (
                            <div key={i} 
                                className={
                                    `overflow-hidden p-2 h-[100px] w-[200px] 
                                    ${dateFns.isToday(day.date) ? 'bg-purple-100 z-10 shadow-lg' : day.thisMonth ? 'bg-white' : 'bg-neutral-100'}
                                    border-neutral-200 border-b-[1px] border-r-[1px]
                                    ${i % 7 == 0 && 'border-l-[1px]'}
                                    ${i < 7 && 'border-t-[1px]'}
                                    `
                                }>
                                <h1>{dateFns.format(day.date, 'd')}</h1>
                                { eventsOnDay?.map((event, j) => 
                                        <h1 key={j} className={`truncate text-sm p-1 rounded-lg text-center ${EVENT_STYLE[event.type]}`}>
                                            [{event.type.split('/')[0].toUpperCase()}] {event.title}
                                        </h1>
                                    )
                                }
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}