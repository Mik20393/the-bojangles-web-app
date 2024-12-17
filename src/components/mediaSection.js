import styles from "./mediaSection.module.css";

export default function MediaSection({ posts }) {
    console.log({posts})
    return(
        <div className={styles.mediaSectionContainer}>
            <iframe src="https://www.juicer.io/api/feeds/bojangles_music/iframe" frameborder="0" width="100%" height="100%"></iframe>
        </div>
        
    )
}