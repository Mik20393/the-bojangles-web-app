import styles from "./gigDetails.module.css"

export default function GigDetails({venu, date, place, lineUp, tickets, ticketLink}) {
    return(
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
    )
}