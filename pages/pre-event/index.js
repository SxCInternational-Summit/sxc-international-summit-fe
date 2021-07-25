import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"

//import Head from 'next/head'

import { NextSeo } from "next-seo"

const PreEventPage = () => {
    const title = "Pre-Event | SxCInternational Summit 2021"
    const description = "SxC International Summit Pre-Event"

    const backgroundImageURL = "/images/preEventBackground.svg"
    const events = [
        {
            title: "Maintain product existence in the middle of global pandemic",
            src: "/images/event1.svg",
            subtitle: "To engage and reach more of aspiring Gen-Zs that are interested in developing their own brand.  The webinar will cover how to maintain product existence 101, especially through the challenges in this uncertain era of global pandemic",
            type: "Pre-Event",
            date: "28 August 2021",
            fee: "Free",
            linkTo: ""
          },
          
    ]

    const speakers = [
      {
        subtitle: "Senior Product Manager Bukalapak",
        src: "/images/wimala_puspa.png",
        title: "Wimala Puspa Enggaringtyas",
      },
      {
        subtitle: "Brand Manager Unilever",
        src: "/images/rifka_aulia.png",
        title: "Rifka Auliya",
      },
    ]

    const mods = [
      {
        title: 'Bagastama Aulia Mahardika',
        caption: 'FET and Corporate Finance Intern at Unilever| Undergraduate Accounting Student at Universitas Indonesia',
        src: '',
      },
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

    return(
    <>
        <NextSeo
          title={title}
          description={description}
        />
        <Navbar />
        <Hero 
          title="SxC International Summit Pre-Event"
          subtitle='"Maintain product existence in the middle of global pandemic"'
          image={backgroundImageURL}
          buttonPreEvent={true}
          />
        <EventsHeld title="Meet The Speakers" props={speakers} />
        <EventList events={events} />
        <Faq faqList={faq} title={true} />
        <EventComponent />
        <Footer />
    </>
    )
}
export default PreEventPage