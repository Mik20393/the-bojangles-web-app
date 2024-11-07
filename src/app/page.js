import Image from "next/image";
import styles from "./page.module.css";

import AboutSection from "@/components/aboutSection"

import bandLogo from "@/public/logo.jpg"
import heroImage from "@/public/heroImage.jpg"

export default function Home() {
  return (
    <div className={styles.main}>

      <section className={styles.baseSection} id="home">

        <div className={styles.largeContentContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.logoImageContainer}>
              <Image
                src={bandLogo} 
                fill={true}
                layout="fill"
                objectFit="fill"
              />     
            </div>
            <div className={styles.navMenuContainer}>
              <h1>NAV</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <div className={styles.heroImageContainer}>
              <Image 
                src={heroImage}
                fill={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        
      </section>

      <section className={styles.baseSection} id="about">

        <div className={styles.smallContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.musicTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Our Music</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <h1>Music section content</h1>
          </div>
        </div>
        <div className={styles.smallContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.aboutTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Our Story</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <AboutSection />
          </div>
        </div>

      </section>

      <section className={styles.baseSection} id="tour">

        <div className={styles.largeContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.tourTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Live Shows</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <h1>Tour Section Content</h1>
          </div>
        </div>
        
      </section>

      <section className={styles.baseSection} id="contact">

        <div className={styles.largeContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.contactTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <h1>Contact Section Content</h1>
          </div>
        </div>

      </section>

    </div>
  );
}
