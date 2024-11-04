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
      <section className={styles.baseSection} id="section1">
        <div className={styles.sectionTitle}>
          <h1>Section 1</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="section2">
        <div className={styles.sectionTitle}>
          <h1>Section 2</h1>
        </div>
      </section>
      <section className={styles.baseSection} id="section3">
      <div className={styles.sectionTitle}>
          <h1>Section 3</h1>
        </div>
      </section>
    </div>
  );
}
