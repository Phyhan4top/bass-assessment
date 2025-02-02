import EventList from "@/app/_components/organism/eventList/eventList";
import { mockEventDetailsList } from "@/app/_components/organism/eventList/mockEvents";

export default function EventPage() {
  return <EventList events={mockEventDetailsList}></EventList>;
}
