import Script from 'next/script';

import styles from "./mediaSection.module.css";

export default function MediaSection() {
    return(
        
        <div className={styles.mediaSectionContainer}>
            <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />
            <iframe
                className={styles.mediaSectionVideo} 
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JqGrAQN0dmI?si=vwWZPaybdb5fZro4" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
        
    )
}