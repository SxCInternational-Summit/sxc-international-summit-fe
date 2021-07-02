import {
    Box
  } from "@chakra-ui/react";
import EventList from "../../component/eventList";
import Faq from "../../component/faq";
import Navbar from "../../component/navbar";
  
  export default function Events() {

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
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
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
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
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
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
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
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
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
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
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
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      },
      {
        title: "Business Case\nCompetition",
        src: "/images/event1.svg",
        caption: "“Utilizing The Pandemic as an Opportunity to Improve in Self Development” with speakers Founder of LAKKE, Founder of Social Kreatif, News Anchor at CNN Indonesia and Community Manager at 1000 Guru",
        type: "Competition",
        date: "27-29 June 2021",
        fee: "Rp30.000/team"
      }
    ]
    return (
      <Box>
        <Navbar />
        <EventList events={events}/>
        <Faq />
      </Box>
      
    )
  }
  