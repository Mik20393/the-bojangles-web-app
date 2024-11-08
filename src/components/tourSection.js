import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPoster from "@/public/gigPoster_16112024(1).jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.liveShowDetailsContainer}>
                <div className ={styles.gigDetailsContainer}>
                    <GigDetails 
                        venu="BLOC+"
                        date="16/11 - 8PM"
                        lineUp="The Bojangles, SNDO Beats, Journalist & Friends"
                        tickets="FREE ENTRY" 
                    />
                </div>
                <div className ={styles.gigDetailsContainer}>
                    <h1>Venue: Stereo</h1>
                </div>
                <div className ={styles.gigDetailsContainer}>
                    <GigDetails 
                        venu="BLOC+"
                        date="28/12 - 8PM"
                        lineUp="The Bojangles, SNDO Beats, Journalist & Friends"
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
        </>
    )
}