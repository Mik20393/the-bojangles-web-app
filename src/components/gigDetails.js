import styles from "./gigDetails.module.css"
import { useEffect, useState } from "react";

export default function GigDetails({venu, date, place, tickets, ticketLink}) {
    const [today, setToday] = useState(null);

    useEffect(() => {
        const todayDate = new Date();
        setToday(todayDate);
    }, []);

    const isGigDateAfterToday = (date) => {
        const gigDate = new Date(date);
        if (gigDate > today) {
            console.log("Gig Date is after today");
        }
    }

    return(
        <>
            {!isGigDateAfterToday(date) ? (
                <div className={styles.gigDetailsContainer}>
                    <div className={styles.gigDetails}>
                        <h1>VENUE: {venu}</h1>
                        <h3>DATE: {date}</h3>
                        <h3>PLACE: {place}</h3>
                        <div className={styles.ticketDetails}>
                            { ticketLink ? (
                                <h3>TICKETS: <a href={ticketLink}>Click Here</a></h3>
                            ) : (
                                <h3>TICKETS: {tickets}</h3>
                            )
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.disabled}></div>
            )}
            
        </>
    )
}