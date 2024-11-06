import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.baseSection} id="home">
        <div className={styles.sectionTitleContainer}>

          <div className={styles.sectionTitleItem}>
            <h1>Band Logo</h1>
          </div>
          <div className={styles.sectionTitleItem}>
            <h1>The most seriousbadn in Scotland</h1>
          </div>
          <div className={styles.sectionTitleItem}>
            <h1>Socials / Nav Container</h1>
          </div>
      
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Home Page Content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="music">
        <div className={`${styles.sectionTitleContainer} ${styles.musicTitleBackground}`}>
          <h1>Music Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Music section content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="about">
        <div className={`${styles.sectionTitleContainer} ${styles.aboutTitleBackground}`}>
          <h1>About Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>About Section Content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="tour">
      <div className={`${styles.sectionTitleContainer} ${styles.tourTitleBackground}`}>
          <h1>Tour Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Tour Section Content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="contact">
      <div className={`${styles.sectionTitleContainer} ${styles.contactTitleBackground}`}>
          <h1>Contact Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Contact Section Content</h1>
        </div>
      </section>
    </div>
  );
}
