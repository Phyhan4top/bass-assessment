import Image from "next/image";
import EventList from "../_components/organism/eventList/eventList";
import { mockEventDetailsList } from "../_components/organism/eventList/mockEvents";
import Footer from "../_components/molecule/footer/footer";

export default function Home() {
 

  return (
    <div>

      <EventList events={mockEventDetailsList}></EventList>
   
    </div>
  );
}
