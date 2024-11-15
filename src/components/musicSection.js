import styles from "./musicSection.module.css";

export default function MusicSection() {
    return(
        <div className={styles.spotifyWidgetContainer}>
            <iframe 
                src="https://open.spotify.com/embed/artist/6zsufoNor8LIWKHTpb9EVm"
                width="100%"
                height="100%"
                autoPlay>
            </iframe>
        </div>
        
    )
}