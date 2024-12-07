import styles from "./musicSection.module.css";

export default function MusicSection() {
    return(
        <div className={styles.spotifyWidgetContainer}>
            <iframe width= "100%" height= "100%" src="https://bandcamp.com/EmbeddedPlayer/track=2982826395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://thebojangles.bandcamp.com/track/tocar-te">Tocar-te by The Bojangles</a></iframe>
        </div>
        
    )
}