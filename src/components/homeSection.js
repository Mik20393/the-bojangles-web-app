import Image from "next/image";
import styles from "./homeSection.module.css"

import heroImage from "@/public/heroImage.jpg"

export default function HomeSection() {
    return (
        <div className={styles.heroImageContainer}>
              <Image 
                src={heroImage}
                alt="Image of the band in the studio"
                fill={true}
                layout="fill"
                objectFit="cover"
              />
        </div>
    )
}