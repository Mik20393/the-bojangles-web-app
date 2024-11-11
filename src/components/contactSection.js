import styles from "./contactSection.module.css";

export default function ContactSection() {
    return (
        <>
            <div className={styles.contactSectionContainer}>
                <div className={styles.contactSectionTextContainer}>
                    <p>
                        Hey there you wanna book us to play or just tell <br/>
                        us something please fill the form below or write to us at <br/>
                        thebojanglesglasgow@gmail.com
                    </p>
                </div>
                <div className={styles.contactFormContainer}>
                    <form className={styles.contactForm}>
                        <input type="text" name="name" placeholder="Name" required/>
                        <input type="email" name="email" placeholder="Email" required/>
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}