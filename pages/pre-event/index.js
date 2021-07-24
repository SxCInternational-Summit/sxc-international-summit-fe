import EventComponent from "../../component/eventComponent"
import EventList from "../../component/eventList"
import EventsHeld from "../../component/eventsHeld"
import Faq from "../../component/faq"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"

import Head from 'next/head'

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

    const speakers = [
      {
        caption: "Senior Product Manager Bukalapak",
        src: "/images/wimala_puspa.png",
        title: "Wimala Puspa Enggaringtyas",
      },
      {
        caption: "Brand Manager Unilever",
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
        <Head>
          <title>Pre-Event | SxCIntersummit 2021</title>
        </Head>
        <Navbar />
        <Hero 
          title="SxC International Summit Pre-Event"
          subtitle='"Maintain product existence in the middle of global pandemic"'
          image={backgroundImageURL}
          />
        <EventsHeld props={speakers} />
        <EventList events={events} />
        <Faq faqList={faq} title={true} />
        <EventComponent />
        <Footer />
    </>
    )
}
export default PreEventPage