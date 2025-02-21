import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPosterShort from "@/public/gig_poster_20250321.jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC +"
                            date="14/03/25 - 8PM"
                            place="117 Bath Street, Glasgow, G2 2SZ"
                            tickets="FREE ENTRY"
                        />
                    </div>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="Room 2"
                            date="21/03/25 - 7PM"
                            place="69 Nelson Mandela Place, Glasgow, G2 1QY"
                            ticketLink="https://ra.co/events/2108643" 
                        />
                    </div>
                </div>
                <div className={styles.posterContentContainer}>
                    <div className={styles.posterImageContainer}>
                        <Image 
                            className={styles.gigPosterShort}
                            src={gigPosterShort}
                            alt="Gig poster for the upcoming bojangles gig"
                            fill={true}                   
                        />
                    </div>
                </div>
            </div>
        </>
    )
}