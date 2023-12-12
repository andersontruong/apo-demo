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

export default function Events({ className }: { className?: string }) {
    return (
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4 w-full justify-items-center ${className}`}>
            <EventsWidget
                title="Leadership"
                className="max-w-[200px] w-5/6 sm:w-4/5 md:w-full lg:w-4/5"
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
            <EventsWidget
                title="Fellowship"
                className="max-w-[200px] w-5/6 sm:w-4/5 md:w-full lg:w-4/5"
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
                title="Service"
                className="max-w-[200px] w-5/6 sm:w-4/5 md:w-full lg:w-4/5"
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
                title="Fundraiser"
                className="max-w-[200px] w-5/6 sm:w-4/5 md:w-full lg:w-4/5"
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
                className="max-w-[200px] w-5/6 sm:w-4/5 md:w-full lg:w-4/5"
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
        </div>
    )
}