import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPosterShort from "@/public/gig_poster_20250207.jpg"
import gigPosterLong from "@/public/gig_poster_20250207(1).jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC+"
                            date="07/02/25 - 8PM"
                            place="117 Bath St, Glasgow, G2 2SZ"
                            tickets="FREE ENTRY" 
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
                        <Image 
                            className={styles.gigPosterLong}
                            src={gigPosterLong}
                            alt="Gig poster for the upcoming bojangles gig"
                            fill={true}                     
                        />
                    </div>
                </div>
            </div>
        </>
    )
}