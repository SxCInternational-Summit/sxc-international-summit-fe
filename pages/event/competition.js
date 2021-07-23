import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"

const CompetitionPage = () => {
    const backgroundImageURL = "/images/competitionBackground.svg"
    const events = [
        {
            title: "Business Case Competition",
            src: "/images/event1.svg",
            caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Competition",
            date: "27-29 June 2021",
            fee: "Free"
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
        <EventList events={events} />
        <Faq />
        <EventComponent />
        <Footer />
    </>
    )
}
export default CompetitionPage