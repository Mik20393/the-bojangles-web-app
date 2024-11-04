import Link from 'next/link'

import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}><Link href="/#home">Home</Link></li>
                        <li className={styles.navLink}><Link href="/#music">Music</Link></li>
                        <li className={styles.navLink}><Link href="/#about">About</Link></li>
                        <li className={styles.navLink}><Link href="/#tour">Tour</Link></li>
                        <li className={styles.navLink}><Link href="/#contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}