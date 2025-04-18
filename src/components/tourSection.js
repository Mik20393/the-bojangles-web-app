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
                            venu="Vic Bar"
                            date="17/05/25"
                            place="The Art School, 20 Scott St, Glasgow G3 6PE"
                            ticketLink="https://www.skiddle.com/whats-on/Glasgow/The-Vic-Bar/Belle-poque-VicBar-TelekinephewsSloblinBojanglesMoonsoup/40949492/" 
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