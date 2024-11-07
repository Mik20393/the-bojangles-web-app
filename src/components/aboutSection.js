import styles from "./about.module.css"

export default function AboutSection() {
    return (
        <div className={styles.aboutSectionContainer}>
            <p className={styles.aboutSectionContent}>
                We are The Bojangles, an alternative hip-hop live band <br />
                from Glasgow, formed in 2023. We love experimenting with <br />
                jazzy, funky feel-good rhythyms, our lyrics range from <br />
                playful to introspective. <br />
                <br />
                The band came together through a serious of fortuitous <br />
                encounters at a local pub, where musicians from different <br />
                backgrounds and musical influences connected, all sharing <br />
                a passion and desire to be a part of something exciting and <br />
                unique. Our music features Portuguese lyrics, Latin <br />
                melodies, boom-bap beats, funky guitar riffs, brass <br />
                solos - you name it, all played live!            
            </p>
        </div>
    )
}