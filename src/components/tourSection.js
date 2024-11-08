import Image from "next/image";

import styles from "./tourSection.module.css";

import gigPoster from "@/public/gigPoster_16112024(1).jpg"

export default function TourSection() {
    return (
        <>
            <div className={styles.liveShowDetailsContainer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.posterContentContainer}>
                <Image 
                    src={gigPoster}
                    fill={true}
                    layout="fill"
                    objectFit="cover"
                />
                
            </div>
        </>
    )
}