import Image from "next/image";
import styles from "./page.module.css";

import { FaYoutube } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import HomeSectionContent from "@/components/homeSection";
import AboutSectionContent from "@/components/aboutSection";
import MusicSectionContent from "@/components/musicSection";
import TourSectionContent from "@/components/tourSection";
import MediaSectionContent from "@/components/mediaSection";
import ContactSectionContent from "@/components/contactSection";

import supabase from "@/api/supabase";

import bandLogo from "@/public/logo.jpg";

export default async function Home() {

  const bandSlogan = "\"The most serious band in Scotland\""

  const { data: files, error } = await supabase.storage.from("gig-posters").list();
 
  if (error) {
      console.error("Error fetching images:", error);
  } else {
      const posterUrls = files.map(file => {
        const { data: publicUrl } = supabase.storage
          .from("gig-posters")
          .getPublicUrl(file.name)
        return publicUrl.publicUrl;
      });

      return (
        <div className={styles.main}>
    
          <section className={`${styles.baseSection} ${styles.displayFlexCenter}`} id="home">
    
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexSpaceBetween}`}>
                <div className={styles.logoImageContainer}>
                  <Image
                    src={bandLogo} 
                    alt="Image of band logo"
                    fill={true}
                    layout="fill"
                    objectFit="contain"
                  />     
                </div>
                <div className={`${styles.bandSlogan} ${styles.displayFlexCenter}`}>
                  <h4>{bandSlogan}</h4>
                </div>
                <div className={styles.socialsContainer}>
                  <h1><a href="https://www.soundcloud.com/the-bojangles"><FaSoundcloud /></a></h1>
                  <h1><a href="https://www.instagram.com/bojangles_music"><FaInstagram /></a></h1>
                  <h1><a href="https://www.youtube.com/@thebojangles_music"><FaYoutube /></a></h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <HomeSectionContent />
              </div>
            </div>
            
          </section>
    
          <section className={`${styles.baseSection} ${styles.displayFlexCenter}`} id="about">
    
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexCenter} ${styles.musicTitleBackground}`}>
                <div className={`${styles.sectionTitle} ${styles.displayFlexCenter}`}>
                  <h1>Our Music</h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <MusicSectionContent />
              </div>
            </div>
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexCenter} ${styles.aboutTitleBackground}`}>
                <div className={`${styles.sectionTitle} ${styles.displayFlexCenter}`}>
                  <h1>Our Story</h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <AboutSectionContent />
              </div>
            </div>
    
          </section>
    
          <section className={`${styles.baseSection} ${styles.displayFlexCenter}`} id="tour">
    
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexCenter} ${styles.tourTitleBackground}`}>
                <div className={`${styles.sectionTitle} ${styles.displayFlexCenter}`}>
                  <h1>Gigs</h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <TourSectionContent posters={posterUrls}/>
              </div>
            </div>
            
          </section>
    
          <section className={`${styles.baseSection} ${styles.displayFlexCenter}`} id="contact">
    
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexCenter} ${styles.mediaTitleBackground}`}>
                <div className={`${styles.sectionTitle} ${styles.displayFlexCenter}`}>
                  <h1>Media</h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <MediaSectionContent />
              </div>
            </div>
    
            <div className={`${styles.sectionContentContainer} ${styles.displayFlexCenter}`}>
              <div className={`${styles.sectionTitleContainer} ${styles.displayFlexCenter} ${styles.contactTitleBackground}`}>
                <div className={`${styles.sectionTitle} ${styles.displayFlexCenter}`}>
                  <h1>Contact</h1>
                </div>
              </div>
              <div className={styles.sectionMainContent}>
                <ContactSectionContent />
              </div>
            </div>
    
          </section>
    
        </div>
      
      );
  };

}
