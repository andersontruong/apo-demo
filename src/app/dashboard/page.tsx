import UserNavbar from "@/components/UserNavbar";

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
                <div className="mt-4 bg-white w-1/2 grow shadow-lg rounded-xl p-4">
                    
                </div>
            </div>
        </main>
    )
}