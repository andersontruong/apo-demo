import { useState } from "react";
import { FaBookBookmark, FaCalendarDays, FaChartLine, FaChartSimple } from "react-icons/fa6";

function MobileNavButton({ Icon, onClick=()=>{}, focused, focusedColor="text-blue-500" }: { Icon: React.ComponentType<any>, onClick?: () => any, focused: boolean, focusedColor?: string }) {
    return (
        <div className="flex flex-col justify-center">
            <button onClick={onClick} className={`${focused ? focusedColor : 'text-slate-500'} transition ease-in-out delay-50 duration-100`}>
            <Icon className="text-xl "/>
            </button>
        </div>
    )
}

export default function MobileNav() {
    const [selectedButton, setSelectedButton] = useState<0|1|2|3>(0);

    return (
        <div className="min-h-[60px] sticky bottom-0 flex md:hidden justify-evenly bg-white border-t-2 border-neutral-100">
            <MobileNavButton 
                Icon={FaChartSimple} 
                onClick={() => setSelectedButton(0)} 
                focused={selectedButton == 0}
                focusedColor="text-indigo-500"
            />
            <MobileNavButton 
                Icon={FaCalendarDays} 
                onClick={() => setSelectedButton(1)} 
                focused={selectedButton == 1}
                focusedColor="text-amber-500"
            />
            <MobileNavButton 
                Icon={FaBookBookmark} 
                onClick={() => setSelectedButton(2)} 
                focused={selectedButton == 2}
                focusedColor="text-red-600"
            />
            <MobileNavButton 
                Icon={FaChartLine} 
                onClick={() => setSelectedButton(3)} 
                focused={selectedButton == 3}
                focusedColor="text-green-600"
            />
        </div>
    )
}