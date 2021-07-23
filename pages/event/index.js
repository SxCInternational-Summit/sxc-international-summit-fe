import {
		Box
	} from "@chakra-ui/react";
import EventList from "../../component/eventList";
import Faq from "../../component/faq";
import Navbar from "../../component/navbar";

const Events = ({events}) => {
	return (
		<Box>
			<Navbar />
			<EventList key={events.id} events={events}/>
			<Faq />
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
	