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
                            venu="Rum Shack"
                            date="13/06/25"
                            place="657 - 659 Pollokshaws Road, Glasgow, G41 2AB"
                            ticketLink="https://www.citizenticket.com/events/commotion-promotions/the-bojangles/" 
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