'use client';

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import Slideshow from "./slideshow";
import gigPoster20250207 from "@/public/gig_poster_20250207 .jpg";
import gigPoster20250314 from "@/public/gig_poster_20250314.jpg";
import gigPoster20250321 from "@/public/gig_poster_20250321.jpg";

export default function TourSection() {
    const images = [gigPoster20250321, gigPoster20250314, gigPoster20250207];
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="BLOC +"
                            date="14/03/25"
                            place="117 Bath Street, Glasgow, G2 2SZ"
                            tickets="FREE ENTRY"
                        />
                        <GigDetails 
                            venu="Room 2"
                            date="21/03/25"
                            place="69 Nelson Mandela Place, Glasgow, G2 1QY"
                            ticketLink="https://ra.co/events/2108643" 
                        />
                    </div>
                    <div className={styles.posterContentContainer}>
                        <Slideshow images={images} />
                    </div>
                </div>
            </div>
        </>
    )
}