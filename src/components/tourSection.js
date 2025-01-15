import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPoster from "@/public/gig_poster28122024.jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC+"
                            date="17/01/25 - 8PM"
                            place="117 Bath St, Glasgow, G2 2SZ"
                            lineUp="Ria Bronte, Sebastian Summers, The Bojangles"
                            tickets="FREE ENTRY" 
                        />
                    </div>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC+"
                            date="07/02/25 - 8PM"
                            place="117 Bath St, Glasgow, G2 2SZ"
                            lineUp="TBC"
                            tickets="FREE ENTRY" 
                        />
                    </div>
                </div>
                <div className={styles.posterContentContainer}>
                    <div className={styles.posterImageContainer}>
                        <Image 
                            className={styles.gigPoster}
                            src={gigPoster}
                            alt="Gig poster for the upcoming bojangles gig"
                            fill={true}                       
                        />
                    </div>
                </div>
            </div>
        </>
    )
}