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
                    alt="Gig poster for the upcoming bojangles gig"
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="contain"
                />
                
            </div>
        </>
    )
}