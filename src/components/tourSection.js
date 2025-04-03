'use client';

import styles from "./tourSection.module.css";

import GigDetails from "./gigDetails";
import Slideshow from "./slideshow";

export default function TourSection({ posters }) {
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
                        <Slideshow images={posters} />
                    </div>
                </div>
            </div>
        </>
    )
}