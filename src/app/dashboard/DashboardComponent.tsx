import DashboardCalendar from "./DashboardCalendar";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function LeaderboardWidget({ className="" }: { className?: string }) {
    return (
        <div className={`grow flex w-full flex-col items-center space-y-2 ${className}`}>
            <div className="w-full flex flex-col items-center">
                <h1 className="w-full text-xl text-center text-gray-600 truncate">
                    Leaderboard
                </h1>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-8">
                <div className="flex flex-col items-center space-y-1">
                    <h1 className="text-gray-500">Service Hours</h1>
                    <div className="relative flex flex-col w-full">
                        <div className="z-0 flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Lucy Yin
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                200
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[60%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Joseph Ramirez
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                120
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[1%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Thomas Ho
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                0.5
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <h1 className="text-gray-500">Fundraising</h1>
                    <div className="relative flex flex-col w-full">
                        <div className="z-0 flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Star Yu
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                100000 BTC
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[25%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Paul Torres
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                $1 trillion
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[0%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Smelliot Lin
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                -$50
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <h1 className="text-gray-500">APO Achievements</h1>
                    <div className="relative flex flex-col w-full">
                        <div className="z-0 flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[80%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Alphas
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                400
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Phis
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                500
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col w-full">
                        <div className="flex absolute w-full h-full rounded-lg bg-gray-400 overflow-hidden">
                            <span className="w-[60%] h-full bg-gradient-to-br from-gray-500 to-gray-600 drop-shadow-lg"></span>
                        </div>
                        <div className="w-full flex justify-between">
                            <h1 className="text-white z-10 pl-4 py-4 truncate">
                                Omegas
                            </h1>
                            <h1 className="text-white z-10 pr-4 py-4">
                                300
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DashboardComponent() {
    return (
        <div className="h-full flex flex-col space-y-8">
            <div className="flex w-full">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-2 justify-center md:justify-start w-full">
                    <h1 className="text-xl lg:text-2xl">
                        Welcome back,
                    </h1>
                    <h1 className="text-xl lg:text-2xl">
                        Poom Yoodee! 👋
                    </h1>
                </div>
            </div>
            <div className="flex flex-col h-full md:flex-row md:space-x-4 lg:space-x-10">
                <div className="grow bg-white rounded-lg shadow-md p-8 divide-y-2">
                    <div className="grid grid-cols-4 gap-x-16 px-4 xl:px-16 pb-3">
                        <div>
                            <CircularProgressbar 
                                styles={buildStyles({
                                    textColor: '#64748b',
                                    pathColor: '#64748b'
                                })} 
                                value={50} 
                                text={`50%`} 
                            />
                            <h1 className="text-center text-gray-500">
                                Service
                            </h1>
                        </div>
                        <div>
                            <CircularProgressbar 
                                styles={buildStyles({
                                    textColor: '#64748b',
                                    pathColor: '#64748b'
                                })} 
                                value={100} 
                                text={`100%`} 
                            />
                            <h1 className="text-center text-gray-500">
                                Fellowship
                            </h1>
                        </div>
                        <div>
                            <CircularProgressbar 
                                styles={buildStyles({
                                    textColor: '#64748b',
                                    pathColor: '#64748b'
                                })} 
                                value={70} 
                                text={`70%`} 
                            />
                            <h1 className="text-center text-gray-500">
                                Fundraising
                            </h1>
                        </div>
                        <div>
                            <CircularProgressbar 
                                styles={buildStyles({
                                    textColor: '#64748b',
                                    pathColor: '#64748b'
                                })} 
                                value={50} 
                                text={`50%`} 
                            />
                            <h1 className="text-center text-gray-500">
                                Chairing
                            </h1>
                        </div>
                    </div>
                    <LeaderboardWidget className="pt-4"/>
                </div>
                <div className="w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md p-3">
                    <DashboardCalendar />
                </div>
            </div>
        </div>
    )
}