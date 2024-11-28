import styles from "./aboutSection.module.css"

export default function AboutSection() {
    return (
        <div className={styles.aboutSectionContainer}>
            <div className={styles.aboutSectionTextBox}>
                <p className={styles.aboutSectionContent}>
                    We are The Bojangles, an alternative hip-hop live band
                    from Glasgow, formed in 2023. We love experimenting with
                    jazzy, funky feel-good rhythyms, our lyrics range from
                    playful to introspective.
                </p>
                <p className={styles.aboutSectionContent}>
                    The band came together through a serious of fortuitous
                    encounters at a local pub, where musicians from different
                    backgrounds and musical influences connected, all sharing
                    a passion and desire to be a part of something exciting and
                    unique. Our music features Portuguese lyrics, Latin
                    melodies, boom-bap beats, funky guitar riffs, brass
                    solos - you name it, all played live!            
                </p>
            </div>
        </div>
    )
}