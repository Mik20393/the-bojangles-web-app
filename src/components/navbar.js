import Link from 'next/link'

import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}><Link href="/#home">Home</Link></li>
                        <li className={styles.navLink}><Link href="/#section1">Section 1</Link></li>
                        <li className={styles.navLink}><Link href="/#section2">Section 2</Link></li>
                        <li className={styles.navLink}><Link href="/#section3">Section 3</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}