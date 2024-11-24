import styles from "./mediaSection.module.css";

export default function MediaSection() {
    return(
        <div className={styles.mediaSectionContainer}>
            <div className={styles.largeImage}>
                <div className={styles.imageContainer}></div>
            </div>
            <div className={styles.smallImage}>
                <div className={styles.imageContainer}></div>
                <div className={styles.imageContainer}></div>
                <div className={styles.imageContainer}></div>
            </div>
        </div>
    )
}