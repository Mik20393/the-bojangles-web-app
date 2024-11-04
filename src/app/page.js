import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.baseSection} id="home">
      <div className={styles.sectionTitle}>
          <h1>Home Page</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="music">
        <div className={`${styles.sectionTitle} ${styles.musicTitleBackground}`}>
          <h1>Music Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Music section content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="about">
        <div className={`${styles.sectionTitle} ${styles.aboutTitleBackground}`}>
          <h1>About Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>About Section Content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="tour">
      <div className={`${styles.sectionTitle} ${styles.tourTitleBackground}`}>
          <h1>Tour Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Tour Section Content</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="contact">
      <div className={`${styles.sectionTitle} ${styles.contactTitleBackground}`}>
          <h1>Contact Section Title</h1>
        </div>
        <div className={styles.sectionMainContent}>
          <h1>Contact Section Content</h1>
        </div>
      </section>
    </div>
  );
}
