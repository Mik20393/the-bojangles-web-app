import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPoster from "@/public/gigPoster_12122024.jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="Stereo"
                            date= "12/12/24 - 6PM"
                            place="22 Renfield Ln, Glasgow, G2 5AR"
                            lineUp="Chelsea K, Skyman, The Bojangles, 5th Element, Spit Back, Soul Level Collective ft Mo Mi Swir"
                            ticketLink="https://www.skiddle.com/whats-on/Glasgow/Stereo-Glasgow/Glasgow-Allstars/40381044/"
                        />
                    </div>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC+"
                            date="28/12/24 - 8PM"
                            place="117 Bath St, Glasgow, G2 2SZ"
                            lineUp="TBC"
                            tickets="FREE ENTRY" 
                        />
                    </div>
                </div>
                <div className={styles.posterContentContainer}>
                    <div className={styles.posterImageContainer}>
                        <Image 
                            src={gigPoster}
                            alt="Gig poster for the upcoming bojangles gig"
                            fill={true}
                            objectFit="contain"                        
                        />
                    </div>
                </div>
            </div>
        </>
    )
}