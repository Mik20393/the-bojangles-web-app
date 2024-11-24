import styles from "./footer.module.css";

import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContentContainer}>
                    <FaRegCopyright />
                    <h3>The Bojangles 2024</h3>
                </div>
            </footer>
        </>
    )
}