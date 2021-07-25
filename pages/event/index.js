import {
		Box
	} from "@chakra-ui/react";
import EventList from "../../component/eventList";
import Faq from "../../component/faq";
import Navbar from "../../component/navbar";

const Events = ({events}) => {
	const faq =[
		{
			question: "How many events there are in SxcInternational Summit 2021?",
			answer: "There are 3 events. Pre-event (webinar), Competition, and Main Event"
		},
		{
			question: "When will the Pre-Events take place?",
			answer: "Zoom platform from your home."
		},
		{
			question: "What will I get?",
			answer: "Exciting new experience, insights, and even new connections."
		}
	]
	return (
		<Box>
			<Navbar />
			<EventList key={events.id} events={events}/>
			<Faq faqList={faq} title={true} />
		</Box>
		
	)
}

export async function getServerSideProps() {
	const { API_URL } = process.env

	const res = await fetch(`${API_URL}/events`)
	const data = await res.json()

	return {
		props: {
			events: data
		},
	}
}

export default Events
	