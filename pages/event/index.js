import {
		Box
	} from "@chakra-ui/react";
import EventList from "../../component/eventList";
import Faq from "../../component/faq";
import Navbar from "../../component/navbar";

const Events = ({events}) => {
	const faq =[
		{
			question: "What are the series of StudentsxCEOs 10th Grand Summit Pre-Event?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			question: "When will the Pre-Events take place?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			question: "What will I get?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
	