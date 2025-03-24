'use client';

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import Slideshow from "./slideshow";
import gigPoster20250207 from "@/public/gig_poster_20250207 .jpg";
import gigPoster20250314 from "@/public/gig_poster_20250314.jpg";
import gigPoster20250321 from "@/public/gig_poster_20250321.jpg";
import gigPoster20250406 from "@/public/gig_poster_20250406(1).jpg";

export default function TourSection() {
    const images = [gigPoster20250406, gigPoster20250321, gigPoster20250314, gigPoster20250207];
    return (
        <>
            <div className={styles.tourSectionContainer}>
                <div className={styles.liveShowDetailsContainer}>
                    <div className={styles.gigDetailsContainer}>
                        <GigDetails 
                            venu="Mono"
                            date="06/04/25"
                            place="12 Kings Court, Kings Street, Glasgow, G1 5RB"
                            ticketLink="https://www.eventbrite.co.uk/e/to-glasgow-with-love-x-fundraiser-for-refuweegee-tickets-1291210267669" 
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