import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"
import Timeline from "../../component/timeline"

const { PROD_URL } = process.env

const CompetitionPage = () => {
    const backgroundImageURL = "/images/competitionBackground.svg"
    const events = [
        {
            title: "Business Case Competition",
            src: "/images/event1.svg",
            subtitle: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Competition",
            date: "27-29 June 2021",
            fee: "Free",
            linkTo: `${PROD_URL}/competition/register-team`
          }
    ]

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

    const timelines = [
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Instagram Takeover #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        },
        {
            title : "Pre-Event Talkshow #1",
            date: "19 June 2021"
        }
        
    ]

    return(
    <>
        <Navbar />
        <Hero 
        title="SxC International Summit Competition"
        subtitle="Case based competition that will encourage each participant to see themself as a leader, who is responsible for solving a business problem of a company in a creative and innovative way with a high level of realization and practice."
        image={backgroundImageURL} />
        <EventsHeld props={events}/>
        <Timeline type="Competition" events={timelines} />
        <EventList events={events} />
        <Faq faqList={faq} title={true} />
        <EventComponent />
        <Footer />
    </>
    )
}
export default CompetitionPage