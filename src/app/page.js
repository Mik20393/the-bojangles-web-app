import Image from "next/image";
import styles from "./page.module.css";

import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import HomeSectionContent from "@/components/homeSection";
import AboutSectionContent from "@/components/aboutSection";
import MusicSectionContent from "@/components/musicSection";
import TourSectionContent from "@/components/tourSection";
import MediaSectionContent from "@/components/mediaSection";
import ContactSectionContent from "@/components/contactSection";

import bandLogo from "@/public/logo.jpg"

export default function Home() {
  return (
    <div className={styles.main}>

      <section className={styles.baseSection} id="home">

        <div className={styles.largeContentContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.logoImageContainer}>
              <Image
                src={bandLogo} 
                alt="Image of band"
                fill={true}
                layout="fill"
                objectFit="contain"
              />     
            </div>
            <div className={styles.socialsContainer}>
              <h1><a href=""><FaXTwitter /></a></h1>
              <h1><a href=""><FaInstagram /></a></h1>
              <h1><a href=""><FaYoutube /></a></h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <HomeSectionContent />
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
            <MusicSectionContent />
          </div>
        </div>
        <div className={styles.smallContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.aboutTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Our Story</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <AboutSectionContent />
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
            <TourSectionContent />
          </div>
        </div>
        
      </section>

      <section className={styles.baseSection} id="contact">

        <div className={styles.smallContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.mediaTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Media</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <MediaSectionContent />
          </div>
        </div>

        <div className={styles.smallContentContainer}>
          <div className={`${styles.sectionTitleContainer} ${styles.contactTitleBackground}`}>
            <div className={styles.sectionTitle}>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className={styles.sectionMainContent}>
            <ContactSectionContent />
          </div>
        </div>

      </section>

    </div>
  );
}
