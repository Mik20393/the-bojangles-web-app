"use client"

import { useEffect , useRef } from "react"
import Script from "next/script";
import styles from "./mediaSection.module.css";

export default function MediaSection() {
    const instaFeed = useRef(null);

    useEffect(() => {
        if(instaFeed.current) {
            const script = document.createElement("script");
            script.src = "https://www.juicer.io/embed/bojangles_music/embed-code.js";
            script.async = true;
            instaFeed.current.appendChild(script);

            
        }
    }, [])

    return(
        
        <div ref={instaFeed} className={styles.mediaSectionContainer}>
            
        </div>
        
    )
}