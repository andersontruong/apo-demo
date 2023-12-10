import Calendar from "@/components/Calendar";
import UserNavbar from "@/components/UserNavbar";
import { createDoc } from "@/lib/contentful/contentfulQuery";


export default function Home() {
    // createDoc(
    //     'event', 
    //     { 
    //         type: {
    //             'en-US': 'fel/Fellowship'
    //         },
    //         title: {
    //             'en-US': 'Test Fellowship'
    //         },
    //         description: {
    //             'en-US': 'test desc'
    //         },
    //         startDateTime: {
    //             'en-US': (new Date()).toISOString()
    //         },
    //         endDateTime: {
    //             'en-US': (new Date()).toISOString()
    //         },
    //         location: {
    //             'en-US': 'test location'
    //         },
    //         contact: {
    //             'en-US': 'contact Anderson'
    //         },
    //     }
    // );

    return (
        <main className="flex flex-col w-full min-h-screen items-center">
            <UserNavbar />
            <div className="flex flex-col items-center w-full bg-neutral-100">
                <Calendar />
            </div>
        </main>
    )
}