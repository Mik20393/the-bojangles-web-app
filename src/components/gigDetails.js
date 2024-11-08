import styles from "./gigDetails.module.css"

export default function GigDetails({venu, date, place, lineUp, tickets}) {
    return(
        <div className={styles.gigDetails}>
            <h1>VENUE: {venu}</h1>
            <h3>DATE: {date}</h3>
            <h3>PLACE: {place}</h3>
            <h3>LINE UP: {lineUp}</h3>
            <h3>TICKETS: {tickets}</h3>
        </div>
    )
}