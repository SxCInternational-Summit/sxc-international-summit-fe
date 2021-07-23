import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"

import Head from 'next/Head'

const PreEventPage = () => {
    const backgroundImageURL = "/images/preEventBackground.svg"
    const events = [
        {
            title: "Talkshow",
            src: "/images/event1.svg",
            caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Pre-Event",
            date: "27-29 June 2021",
            fee: "Free"
          },
          {
            title: "Talkshow",
            src: "/images/event1.svg",
            caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Pre-Event",
            date: "27-29 June 2021",
            fee: "Free"
          },
          {
            title: "Talkshow",
            src: "/images/event1.svg",
            caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Pre-Event",
            date: "27-29 June 2021",
            fee: "Free"
          },
          {
            title: "Talkshow",
            src: "/images/event1.svg",
            caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
            type: "Pre-Event",
            date: "27-29 June 2021",
            fee: "Free"
          }
    ]
    return(
    <>
        <Head>
          <title>Pre-Event | SxCIntersummit 2021</title>
        </Head>
        <Navbar />
        <Hero 
        title="SxC International Summit Pre-Event"
        subtitle="With a series of inspiring events, the Pre-Event aims to provide highly motivated individuals to gain insights from various renowned speakers covering a wide range of topics such as soft skills tips, in-depth information on SDGs and many more." 
        image={backgroundImageURL}/>
        <EventsHeld events={events} />
        <EventList events={events} />
        <Faq />
        <EventComponent />
        <Footer />
    </>
    )
}
export default PreEventPage