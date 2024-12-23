import Image from "next/image";

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import gigPoster from "@/public/gigPoster_28122024(1).jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className ={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC+"
                            date="28/12/24 - 8PM"
                            place="117 Bath St, Glasgow, G2 2SZ"
                            lineUp="Sebastian Summers, The Bojangles"
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