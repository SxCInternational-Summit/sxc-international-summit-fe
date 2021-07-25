import { Button, Center } from "@chakra-ui/react"
import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"
import Timeline from "../../component/timeline"

import Head from 'next/head'

const { PROD_URL } = process.env

const CompetitionPage = () => {
    const backgroundImageURL = "/images/competitionBackground.svg"
    const events = [
        {
            title: "Product Branding Competition",
            src: "/images/event1.svg",
            subtitle: "StudentsxCEOs International Summit Competition is a case-based competition consisting of two stages, proposal stage and pitching stage.",
            type: "Competition",
            date: "26 July 2021 - 10 October 2021",
            fee: "IDR 279.000",
            linkTo: 'https://sxcinternationalsummit.vercel.app/competition/register-team'
          }
    ]

    const eventHeld = [
        {
            title: "Interactive Coaching Clinics",
            subtitle: "We are going to hold three coaching clinics in a workshop fashion with experienced professionals to facilitate the participants in facing the competition and give the best results possible for the case that needs to be solved.",
            src: "/images/coaching.jfif"
        },
        {
            title: "Proposal Formulation and Submission",
            subtitle: "Putting ideas into a structurized plan, this is the time for participants to bring their best solutions, and propose them in a proposal format. The top 10 standing out proposals will be selected to present in the grand final stage.",
            src: "/images/proposal.jfif"
        },
        {
            title: "The Grand Final",
            subtitle: "Speak confidently and pitch eloquently. The final stage will present the top 10 finalists to present their proposed ideas in front of the professional judges and the public streamers to determine who is going to be the one taking the winner title in the awarding ceremony.",
            src: "/images/presentation.jfif"
        },
    ]

    const faq =[
		{
			question: "What language that will be used during the competition?",
			answer: "The whole series of events in competition will use English. The making of proposals and pitch decks will also be in English."
		},
		{
			question: "Who can join the competition?",
			answer: "This competition is open to all active Indonesian and international students in any major studying in a Bachelor (S1) Program or Diploma (D1, D2, D3, D4) students and need to have Student Id Cards."
		},
		{
			question: "What is the competition format?",
			answer: "The format of this competition is in teams. A team will consists of 3 members including 1 leader. Each team member can be from a different University/Major/Institution/Country."
		},
        {
			question: "What are the stages of this competition?",
			answer: "This competition will consist of two stages, proposal stage and pitching stage."
		},
        {
			question: "What are the event series that are mandatory for the participants?",
			answer: "It is mandatory for the participants to attend pre-event, all the coaching clinics, and submit the proposal."
		},
        {
			question: "Is there any event besides the competition?",
			answer: "You can still join this competition because there will be coaching clinics with different topics about branding for your preparation before the competition."
		},
        {
			question: "What if the participants don’t have any knowledge about branding?",
			answer: "Yes, there will be Pre-Event, Chambers & Networking Session, Virtual Company Visit, and International Conference & Awarding Ceremony. Stay tuned for our awesome speakers, session, and many more prizes!"
		},
        {
			question: "How to register my team?",
			answer: "You can register by simply clicking the register button above."
		},
	]

    const timelines = [
        {
            title : "Early bird Registration",
            date: "26 July 2021 - 14 August 2021"
        },
        {
            title : "Normal Bird Registration",
            date: "15 August 2021 - 27 August 2021"
        },
        {
            title : "Late Bird Registration",
            date: "16 August 2021 - 3 September 2021"
        },
        {
            title : "Coaching Clinic 1",
            date: "4 September 2021"
        },
        {
            title : "Coaching Clinic 2",
            date: "11 September 2021"
        },
        {
            title : "Proposal Submission",
            date: "25 September 2021"
        },
        {
            title : "Coaching Clinic 3, Finalist Annoucement, Technical Meeting",
            date: "2 October 2021"
        },
        {
            title : "Pitch Deck Submission",
            date: "19 June 2021"
        },
        {
            title : "The Grand Final",
            date: "10 October 2021"
        }
        
    ]

    return(
    <>
        <Head>
            <title>Competition | SxCIntersummit 2021</title>
        </Head>
        <Navbar />
        <Hero 
        title=" International Product Branding Competition"
        subtitle="StudentsxCEOs International Summit Competition is a case-based competition consisting of two stages, proposal stage and pitching stage."
        image={backgroundImageURL}
        buttons={true}
        guidebookURL="https://drive.google.com/file/d/1O0_n4O6nhL4o6fV_sQlEm6BJksRk5LZ-/view"
        />
        <EventsHeld title="Competition Highlights" props={eventHeld}/>
        <Timeline type="Competition" events={timelines} />
        <EventList events={events} />
        <Faq faqList={faq} title={true} />
        <EventComponent />
        <Footer />
    </>
    )
}
export default CompetitionPage