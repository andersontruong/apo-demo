import UserNavbar from "@/components/UserNavbar";

function EventEntry({ name, date, className="" } : { name: string, date: string, className?: string }) {
    return (
        <div className={`flex flex-col hover:shadow-lg transition ease-in-out delay-50 duration-200 hover:cursor-pointer ${className}`}>
            <h1 className="font-bold">{name}</h1>
            <h1 className="italic">{date}</h1>
        </div>
    )
}

function EventsWidget({ title, children, className="" } : { title: string, children?: React.ReactNode, className?: string }) {
    return (
        <div className={`flex justify-center ${className}`}>
            <div className="flex flex-col items-center space-y-4 w-full my-4">
                <h1 className="text-xl border-b-2 border-neutral-200 px-2 py-2">{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default function Dashboard() {
    return (
        <main className="flex flex-col w-full min-h-screen items-center">
            <UserNavbar />
            <div className="grow flex flex-col items-center w-full py-10 bg-neutral-100">
                <h1 className={`text-4xl`}>
                    Hello, Thane Cooley!
                </h1>
                <div className="flex space-x-8 mt-4 text-center px-4 z-10">
                    <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">My Events</h1>
                    <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">My Calendar</h1>
                    <h1 className="hover:cursor-pointer text-neutral-700 mt-1 pb-3 transition ease-in-out delay-50 duration-300 border-b-4 border-transparent hover:border-blue-700">ExComm</h1>
                </div>
                <span className="border-t-2 border-neutral-300 w-1/4 -mt-[3px] z-0"></span>
                <div className="mt-4 bg-white w-3/4 grow shadow-lg rounded-xl p-4">
                    <div className="flex justify-evenly w-full">
                        <EventsWidget
                            title="Service"
                            className="w-1/6"
                        >
                            <EventEntry 
                                name="Beach Cleanup" 
                                date="December 9" 
                                className="text-center bg-red-200 rounded-lg p-2 w-full hover:outline hover:outline-red-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="Westwood Cleanup" 
                                date="December 9" 
                                className="text-center bg-red-200 rounded-lg p-2 w-full hover:outline hover:outline-red-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                        </EventsWidget>
                        <EventsWidget
                            title="Fellowship"
                            className="w-1/6"
                        >
                            <EventEntry 
                                name="Karaoke Night at Eugene's" 
                                date="December 10" 
                                className="text-center bg-yellow-200 rounded-lg p-2 w-full hover:outline hover:outline-yellow-500 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="Finals Study Session" 
                                date="December 11" 
                                className="text-center bg-yellow-200 rounded-lg p-2 w-full hover:outline hover:outline-yellow-500 hover:outline-2 transition ease-in-out duration-200"
                            />
                        </EventsWidget>
                        <EventsWidget
                            title="Fundraiser"
                            className="w-1/6"
                        >
                            <EventEntry 
                                name="Porto's" 
                                date="December 13" 
                                className="text-center bg-green-200 rounded-lg p-2 w-full hover:outline hover:outline-green-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="Pie a Pledge!" 
                                date="December 15" 
                                className="text-center bg-green-200 rounded-lg p-2 w-full hover:outline hover:outline-green-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                        </EventsWidget>
                        <EventsWidget
                            title="Family"
                            className="w-1/6"
                        >
                            <EventEntry 
                                name="KBBQ with Alphas" 
                                date="December 15" 
                                className="text-center bg-orange-200 rounded-lg p-2 w-full hover:outline hover:outline-orange-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="Omegas Boba" 
                                date="December 15" 
                                className="text-center bg-orange-200 rounded-lg p-2 w-full hover:outline hover:outline-orange-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="POOMTHAI PHIS" 
                                date="December 15" 
                                className="text-center bg-orange-200 rounded-lg p-2 w-full hover:outline hover:outline-orange-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                        </EventsWidget>
                        <EventsWidget
                            title="Leadership/Meetings"
                            className="w-1/6"
                        >
                            <EventEntry 
                                name="PM 9" 
                                date="December 15" 
                                className="text-center bg-purple-200 rounded-lg p-2 w-full hover:outline hover:outline-purple-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                            <EventEntry 
                                name="CM 9" 
                                date="December 15" 
                                className="text-center bg-blue-200 rounded-lg p-2 w-full hover:outline hover:outline-blue-400 hover:outline-2 transition ease-in-out duration-200"
                            />
                        </EventsWidget>
                    </div>
                </div>
            </div>
        </main>
    )
}