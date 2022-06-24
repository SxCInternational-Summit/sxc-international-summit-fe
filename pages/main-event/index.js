import { Box } from "@chakra-ui/react"
import BundleList from "../../component/bundleList"
import EventComponent from "../../component/eventComponent"
import EventsHeld from "../../component/eventsHeld"
import Footer from "../../component/footer"
import Hero from "../../component/hero"
import MainEventList from "../../component/mainEvent"
import Navbar from "../../component/navbar"
import Timeline from "../../component/timeline"
import Faq from "../../component/faq"

import { NextSeo } from "next-seo"

const MainEvent = () => {
    const backgroundImageURL = "/images/mainEventBg.svg"
    const bundleList = [
        {
            title: "CEO",
            titleColor: "#F8C800",
            advantages: ["Access to all Main Events"],
            finalPrice: "CLOSED",
            originalPrice: "",
            path: "",
            saving: "20%"
        },
        {
            title: "Director",
            titleColor: "#FF6941",
            advantages: ["Events Day 1", "Events Day 3"],
            finalPrice: "CLOSED",
            originalPrice: "",
            path: "",
            saving: "17%"
        },
        {
            title: "Manager",
            titleColor: "#0FA1DB",
            advantages: ["Events Day 2", "Events Day 3"],
            finalPrice: "CLOSED",
            originalPrice: "",
            path: "",
            saving: "17%"
        },
        {
            title: "Main Conference",
            titleColor: "#0FA1DB",
            advantages: ["Events Day 3"],
            finalPrice: "Rp20.000,-",
            originalPrice: "",
            path: "https://forms.gle/shj6ZJVA8XQ3U4oXA",
            saving: "25%"
        }
    ]

    const mainEvents =[
        {
            src: "/images/grandTalkshow.svg",
            title: "Conferences",
            subtitle: "Three different topics covering the most important and essential of the business world, wrapped up into different sessions"
        },
        {
            src: "/images/awardingNight.svg",
            title: "Awarding night",
            subtitle: "Celebrate the closing of SxC intersummit, special performances, and to announce and congratulate the winners of SxC Intersummit competitions"
        }
    ]

    const eventsTimeline =[
        {
            date: "October 9, 2021",
            title: "Day 1: Chambers"
        },
        {
            date: "October 10, 2021",
            title: "Day 2: Virtual Company Visit"
        },
        {
            date: "October 16, 2021",
            title: "Main Conference & Awarding Night"
        },
    ]

    const mainEventDetails =[
        {
            dayCount: "1",
            color: "linear-gradient(102.67deg, #0F75BC -2.74%, #0FA1DB 91.23%)",
            session : [
                {
                    date: "Consulting",
                    title: "Accelerate Your Productivity: Scales Up and Maintain a Good Working Environment",
                    subtitle: "Lingkungan kerja yang positif adalah salah satu faktor yang berpengaruh dalam peningkatan produktivitas. Dengan menciptakan dan mempertahankan lingkungan kerja yang positif, dapat menjadi motivasi seseorang untuk meningkatkan potensi diri secara maksimal.",
                    speakers: [
                        {
                            name: "Flavia Norpina Sungkit",
                            src: "/images/flavia_sungkit.jpeg",
                            achievement: "Founder at Ikigai"
                        },
                        {
                            name: "Nathanael Abednego",
                            src: "/images/nathanael_abednego.jpeg",
                            achievement: "Strategy and Operation Consultant at Deloitte"
                        }
                    ] 
                },
                {
                    date: "Fast Moving Consumer Goods",
                    title: "Shape Your Future Path: More Digital Execution On Developing New Normal Business",
                    subtitle: "Sebuah perusahaan tentu memiliki target-target yang ingin dicapai, baik target dalam jangka pendek maupun target dalam jangka panjang.  Sejak Pandemi COVID-19 melanda dunia, tentu terdapat target-target yang pada akhirnya tidak tercapai dan terdapat target-target yang harus diadaptasi dan atau muncul setelah adanya Pandemi COVID-19 ini.",
                    speakers: [
                        {
                            name: "Jesaya Christian",
                            src: "/images/jesaya_christian.jpg",
                            achievement: "Brand Manager L-Men, Lokalate, and W'Dank"
                        },
                        {
                            name: "Cut Nya Dartina Rinatha",
                            src: "/images/cut_nya_dartina.png",
                            achievement: "Head of E-Commerce at PARAGON"
                        }
                    ]
                },
                {
                    date: "Start-Up",
                    title: "Adapt and Overcome: Agile in Era of Acceleration",
                    subtitle: "Dunia digital yang terus berkembang membuat perubahan besar terjadi dalam setiap aspek, bahkan sampai perubahan perilaku konsumen. Perubahan ini tentunya secara tidak langsung memaksa bisnis/perusahaan harus beradaptasi dan agile dalam era ini. Berbagai strategi dan inovasi harus diciptakan agar dapat bertahan dan menghadapi arus perubahan yang semakin cepat.",
                    speakers: [
                        {
                            name: "Tony Wei",
                            src: "/images/tony_wei.jpg",
                            achievement: "Head of Product at OVO"
                        },
                        {
                            name: "William",
                            src: "/images/william.jpg",
                            achievement: "VP of Business Development at Blibli"
                        }
                    ]
                },
                {
                    date: "Local Business",
                    title: "Breaking Through Stigma: What is Your Why?",
                    subtitle: "Stigma yang dahulunya sering melekat pada bisnis lokal bahwa mereka tidak akan bisa go-international akan dipatahkan dalam sesi ini. Persaingan usaha kian hari semakin ketat, maka dari itu menemukan value dan keunikan dari suatu bisnis sangat penting. Sesuatu hal yang unik dan memiliki ciri khas tentu akan memberikan daya tarik tersendiri bagi para konsumen serta membuat produk dapat ‘standout’ di antara kompetitor lainnya.",
                    speakers: [
                        {
                            name: "Andreas Resha",
                            src: "/images/hangry.jpeg",
                            achievement: "Co-Founder and CEO at HANGRY!"
                        },
                        {
                            name: "Priscilla Pangemanan",
                            src: "/images/priscillia.JPG",
                            achievement: "Co-Founder & CMO at SASC"
                        }
                    ]
                }
            ]
        },
        {
            dayCount: "2",
            color: "linear-gradient(135deg, #F8C800 0%, #FF6941 100%)",
            session : [
                {
                    date: "Virtual Company Visit: Blibli and Paragon",
                    title: "Ready To Compete An Artificial Intelligence World with Your Teams",
                    subtitle: "Teknologi AI sekarang sangat berkembang dengan pesat bahkan terdapat beberapa pekerjaan yang telah digantikan dengan peran dari AI.  Will AI take over humans? Dengan adanya persaingan ini, kita sebagai manusia juga harus meningkatkan kemampuan kita semaksimal mungkin agar AI tidak menggantikan peran manusia secara menyeluruh. Manusia yang harus memanfaatkan AI tersebut untuk mendorong terwujudnya inovasi dan kreativitas.",
                    speakers: [
                        {
                            name: "Claresa Wahyu",
                            src: "/images/claresa_wahyu.jpg",
                            achievement: "Senior Talent Acquisition Manager at Blibli"
                        },
                        {
                            name: "Benny Maulana Achsan",
                            src: "/images/benny_maulana.png",
                            achievement: "IT Data Engineering at Paragon"
                        },
                        {
                            name: "Belva Prima",
                            src: "/images/belva_prima.jpg",
                            achievement: "IT Product Manager at Paragon"
                        }
                    ] 
                }
            ]
            
        },
        {
            dayCount: "3",
            color: "linear-gradient(135deg, #0FA1DB 0%, #9AE95A 50.32%, #F8C800 97.59%)",
            session : [
                {
                    date: "Main Conference and Awarding Ceremony",
                    title: "A Leap to Forge My Path: Corporate, Start up, or Building My Own Business?",
                    subtitle: "In order to provide a way for Gen-Zs to start choosing and pursuing their own path of interest for their future career plan by giving the perspective from 3 major fields in the industry as of this moment.",
                    speakers: [
                        {
                            name: "Jehian Panangian Sijabat",
                            src: "/images/jehian.jpg",
                            achievement: "Chief Executive Office of Menantea"
                        },
                        {
                            name: "Brandon S. Curson",
                            src: "/images/brandon_curson.jpeg",
                            achievement: "Country Manager at TREVO"
                        },
                        {
                            name: "Bahrun Afriansyah",
                            src: "/images/bahrun_afriansyah.jpg",
                            achievement: "Vice President of Marketing at Paragon"
                        }
                    ] 
                }
            ]
            
        }
    ]

    const faqList =[
        {
            question: "How do I attend a conference?",
            answer: "Read the events description, pick a day to your liking, and simply click on the bundle which suits your interest."
        },
        {
            question: "Who are the speakers of the conference?",
            answer: "You can look on events description for the speakers, however if they're not announced yet, please stay tuned!"
        }
    ]

    return(
        <>
            <NextSeo 
                title="Main Event | SxCInternational Summit 2021"
                description="Check out the International Summit 2021`s Main Event"
            />
            <Box bgColor="#04040C">
                <Navbar />
                <Hero 
                    title="SxC International Summit Main Event"
                    subtitle="Welcome to the peak of the overall InterSummit! This year we are introducing The Summit, an event where individuals will get the amazing opportunity to be a part of many entertaining and insightful Grand Talkshow sessions and many more!."
                    subtitleAddition="Join Now through the Bundle Packs!"
                    image={backgroundImageURL}
                />
                <Box pt="75px" px={{base:"14px", md:"80px", xl:"50px"}}>
                    <BundleList list={bundleList} bgColor="#080818" />
                </Box>
                <EventsHeld title="What are the held events?" props={mainEvents} />
                <Timeline type="Main-Event" events={eventsTimeline} />
                <MainEventList days={mainEventDetails} />
                <Faq faqList={faqList} title />
                <EventComponent />
                <Footer />
            </Box>
        </>
    )
}

export default MainEvent
