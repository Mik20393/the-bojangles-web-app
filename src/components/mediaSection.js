import Image from 'next/image';

import styles from "./mediaSection.module.css";

import mainImage from "@/public/mosh pit.jpg"
import studioPic from "@/public/guitars.jpg"
import walter from "@/public/walter.jpg"
import ja from "@/public/ja.jpg"

export default function MediaSection() {
    return(
        <div className={styles.mediaSectionContainer}>
            <div className={styles.largeImageContentContainer}>
                <div className={styles.largeImageContainer}>
                    <Image 
                        src={mainImage}
                        alt="Image of The Bojangles performing live at Bloc+"
                        fill={true}
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className={styles.smallImageContentConatainer}>
                <div className={styles.smallImageContainer}>
                    <Image 
                        src={studioPic}
                        alt="Image of The Bojangles recording at Dystopia Studios"
                        fill={true}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.smallImageContainer}>
                    <Image 
                        src={walter}
                        alt="Image of The Bojangles performing live at Bloc+"
                        fill={true}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.smallImageContainer}>
                    <Image 
                        src={ja}
                        alt="Image of The Bojangles recording at Dystopia Studios"
                        fill={true}
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}