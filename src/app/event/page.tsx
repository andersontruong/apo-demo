import EventForm from "./EventForm";

export default function NewEventPage() {
    
    return <main className="flex flex-col justify-center md:flex-row w-full min-h-screen">
        <div className="my-10 h-full flex flex-col justify-center space-y-10">
            <h1 className="text-4xl text-center">Create Event - Sample</h1>
            <EventForm />
        </div>
    </main>
}