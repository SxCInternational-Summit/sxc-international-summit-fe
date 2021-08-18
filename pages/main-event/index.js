import { Box } from "@chakra-ui/react"
import BundleList from "../../component/bundleList"
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
    return(
        <>
            <Navbar />
            <Hero 
                title="SxC International Summit Main Event"
                subtitle="Welcome to the peak of the overall InterSummit! This year we are introducing The Summit, an event where individuals will get the amazing opportunity to be a part of many entertaining and insightful Grand Talkshow sessions and many more!."
                subtitleAddition="Join Now through the Bundle Packs!"
                image={backgroundImageURL}
            />
            <Box bgColor="#04040C" pt="75px" px={{base:"14px", md:"120px"}}>
                <BundleList list={bundleList} bgColor="#080818" />
            </Box>
        </>
    )
}

export default MainEvent