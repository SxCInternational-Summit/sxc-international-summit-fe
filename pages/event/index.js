import {
		Box
	} from "@chakra-ui/react";
import EventList from "../../component/eventList";
import Faq from "../../component/faq";
import Navbar from "../../component/navbar";

import { NextSeo } from "next-seo";

const Events = ({events}) => {
	const faq = [
		{
			question: "How many events there are in SxcInternational Summit 2021?",
			answer: "There are 3 events. Pre-event (webinar), Competition, and Main Event"
		},
		{
			question: "Where will the Pre-Events take place?",
			answer: "Zoom platform from your home."
		},
		{
			question: "What will I get?",
			answer: "Exciting new experience, insights, and even new connections."
		}
	]

	const event = [
		{
			title: "Maintain product existence in the middle of global pandemic",
            src: "/images/event1.svg",
            subtitle: "To engage and reach more of aspiring Gen-Zs that are interested in developing their own brand.  The webinar will cover how to maintain product existence 101, especially through the challenges in this uncertain era of global pandemic",
            type: "Pre-Event",
            date: "28 August 2021",
            fee: "Free",
            linkTo: "https://sxcintersummit.com/pre-event"
		},
		{
			title: "Product Branding Competition",
            src: "/images/product_branding.png",
            subtitle: "SxC International Summit 2021 Product Branding Competition. Click Join Event for more info",
            type: "Competition",
            date: "26 July 2021 - 10 October 2021",
            fee: "Closed",
            linkTo: "https://sxcintersummit.com/competition"
		},
		{
			title: "SxC International Summit Main Events",
            src: "/images/awardingNight.svg",
            subtitle: "List of this year summit`s main event. Click Join Event for more info",
            type: "Main Event",
            date: "9 October 2021 - 16 October 2021",
            fee: "Learn More",
            linkTo: "https://sxcintersummit.com/main-event"
		}
	]

	return (
		<>
		<NextSeo 
			title="Events List | SxCInternational Summit 2021" />
		<Box>
			<Navbar />
			<EventList events={event}/>
			<Faq faqList={faq} title={true} />
		</Box>
		</>
	)
}

// export async function getServerSideProps() {
// 	const { API_URL } = process.env

// 	const res = await fetch(`${API_URL}/events`)
// 	const data = await res.json()

// 	return {
// 		props: {
// 			events: data
// 		},
// 	}
// }

export default Events
	