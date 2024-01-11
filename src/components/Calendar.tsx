import { getDocs, getDocsByType } from "@/lib/contentful/contentfulQuery";
import * as dateFns from "date-fns";
import CalendarGrid from "./CalendarGrid";

export default function Calendar() {
    const events = await getDocsByType('event');
    
    return (
        <CalendarGrid events={events}/>
    )
}