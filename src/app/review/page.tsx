'use client'

import { Button } from "@/components/ui/button";
import { getDocsByType, getDocsByQuery, getCMADocs } from "@/lib/contentful/contentfulQuery"
import { format } from "date-fns";
import React from "react";

export default function ReviewEventPage() {
    const [unpublished, setUnpublished] = React.useState<Array<any>>([]);

    const updateUnpublished = () => {
        getCMADocs({ content_type: 'event', 'sys.publishedAt[exists]': false})
        .then(entries => { setUnpublished(entries) })
    }
    
    React.useEffect(() => {
        updateUnpublished();
    }, [])
    
    return <main className="flex flex-col justify-center md:flex-row w-full min-h-screen">
        <div className="my-10 h-full flex flex-col items-center justify-center space-y-10 px-4">
            <h1 className="text-4xl text-center">Review Event - Sample</h1>
            {unpublished.map((entry, i) => {
                const fields = entry.fields;
                const eventType = fields['type']['en-US'].split('/')[1];
                const title = fields['title']['en-US'];
                const startTime = format(new Date(fields['startDateTime']['en-US']), 'PPPp')
                const endTime = format(new Date(fields['endDateTime']['en-US']), 'PPPp')
                return <div className="max-w-xs flex flex-col space-y-4 items-center p-4 bg-neutral-200 rounded drop-shadow-md border border-black" key={i}>
                    <div>
                        <h1>Type: {eventType}</h1>
                        <h1>Title: {title}</h1>
                        <h1>from {startTime}</h1>
                        <h1>to {endTime}</h1>
                    </div>
                    <Button className="bg-green-500 hover:bg-green-700" onClick={() => { unpublished[i].publish(); updateUnpublished() }}>
                        Approve
                    </Button>
                </div>
            })}
        </div>
    </main>
}