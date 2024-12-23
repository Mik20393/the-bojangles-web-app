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
        
        <div className={styles.mediaSectionContainer}>
            <iframe src="https://embedsocial.com/api/pro_hashtag/dc30aef1de0771db7d141ab66e6f1a4d8642f827" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        
    )
}