import { Box } from "@chakra-ui/react"
import BundleList from "../../component/bundleList"
import EventsHeld from "../../component/eventsHeld"
import Hero from "../../component/hero"
import Navbar from "../../component/navbar"

const MainEvent = () => {
    const backgroundImageURL = "/images/mainEventBg.svg"
    const bundleList = [
        {
            title: "Manager",
            titleColor: "#F8C800",
            advantages: ["Pre-Event #1 Talkshow", "Pre-Event #2 Talkshow", "Business Case Competition"],
            finalPrice: "Rp85.000,-",
            originalPrice: "Rp120.000,-",
            path: "",
            saving: "50%"
        },
        {
            title: "Economic",
            titleColor: "#FF6941",
            advantages: ["Pre-Event #1 Talkshow", "Pre-Event #2 Talkshow", "Business Case Competition"],
            finalPrice: "Rp85.000,-",
            originalPrice: "Rp120.000,-",
            path: "",
            saving: "50%"
        },
        {
            title: "Original",
            titleColor: "#0FA1DB",
            advantages: ["Pre-Event #1 Talkshow", "Pre-Event #2 Talkshow", "Business Case Competition"],
            finalPrice: "Rp85.000,-",
            originalPrice: "Rp120.000,-",
            path: "",
            saving: "50%"
        }
    ]

    const mainEvents =[
        {
            src: "/images/grandTalkshow.svg",
            title: "Grand Talkshows",
            subtitle: "Three different topics covering the most important and essential of the business world, wrapped up into three different session"
        },
        {
            src: "/images/awardingNight.svg",
            title: "Awarding night",
            subtitle: "Celebrate the closing of SxC intersummit, enjoy live music performances, and congratulate the winner of SxC Intersummit competitions"
        }
    ]

    return(
        <Box bgColor="#04040C">
            <Navbar />
            <Hero 
                title="SxC International Summit Main Event"
                subtitle="Welcome to the peak of the overall InterSummit! This year we are introducing The Summit, an event where individuals will get the amazing opportunity to be a part of many entertaining and insightful Grand Talkshow sessions and many more!."
                subtitleAddition="Join Now through the Bundle Packs!"
                image={backgroundImageURL}
            />
            <Box pt="75px" px={{base:"14px", md:"120px"}}>
                <BundleList list={bundleList} bgColor="#080818" />
            </Box>
            <EventsHeld title="What are the held events?" props={mainEvents} />
        </Box>
    )
}

export default MainEvent