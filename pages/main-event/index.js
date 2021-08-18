import { Box } from "@chakra-ui/react"
import BundleList from "../../component/bundleList"
import EventsHeld from "../../component/eventsHeld"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import MainEventList from "../../component/mainEvent"
import Navbar from "../../component/navbar"
import Timeline from "../../component/timeline"

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

    const eventsTimeline =[
        {
            date: "19 June 2021",
            title: "Pre-Event Talkshow #1"
        },
        {
            date: "19 June 2021",
            title: "Pre-Event Instagram Takeover #1"
        },
        {
            date: "19 June 2021",
            title: "Pre-Event Talkshow #2"
        },
        {
            date: "19 June 2021",
            title: "Pre-Event Talkshow #3"
        },
        {
            date: "19 June 2021",
            title: "Pre-Event Talkshow #4"
        }
    ]

    const mainEventDetails =[
        {
            color: "linear-gradient(102.67deg, #0F75BC -2.74%, #0FA1DB 91.23%)",
            session : [
                {
                    date: "First Grand Talkshow - 09 September 08:00 GMT+7",
                    title: "Lesson Learned From Pandemics, Don’t You See The COV-ortunities?",
                    subtitle: "Learn how to manage your financial and gain profit while in a pandemic situation.",
                    speakers: [
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        },
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        }
                    ] 
                }
            ]
        },
        {
            color: "linear-gradient(135deg, #F8C800 0%, #FF6941 100%)",
            session : [
                {
                    date: "Second Grand Talkshow - 09 September 08:00 GMT+7",
                    title: "Manifesting Ourselves on Facing Social Anxiety as An Effect of Pandemic",
                    subtitle: "Learn how to manage your financial and gain profit while in a pandemic situation.",
                    speakers: [
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        },
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        }
                    ] 
                }
            ]
            
        },
        {
            color: "linear-gradient(135deg, #0FA1DB 0%, #9AE95A 50.32%, #F8C800 97.59%)",
            session : [
                {
                    date: "Second Grand Talkshow - 09 September 08:00 GMT+7",
                    title: "Is It Too Late To Run A Business Or Make An Investment?",
                    subtitle: "Learn how to manage your financial and gain profit while in a pandemic situation.",
                    speakers: [
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        },
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        }
                    ] 
                },
                {
                    date: "Second Grand Talkshow - 09 September 08:00 GMT+7",
                    title: "Concert and Awarding Night",
                    subtitle: "Learn how to manage your financial and gain profit while in a pandemic situation.",
                    speakers: [
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        },
                        {
                            name: "Muhammad Abdurahman Basyah bin Ismail bin Mail",
                            src: "/images/abduh.jpg",
                            achievement: "Lead Software Engineer at Pahamify and Business Intelligence intern at Shopee"
                        }
                    ]
                }
            ]
            
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
            <Timeline type="Main-Event" events={eventsTimeline} />
            <MainEventList days={mainEventDetails} />
            <Footer />
        </Box>
    )
}

export default MainEvent