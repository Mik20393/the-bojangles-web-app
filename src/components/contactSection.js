import styles from "./contactSection.module.css";

export default function ContactSection() {
    return (
        <>
            <div className={styles.contactSectionContainer}>
                <div className={styles.contactSectionTextContainer}>
                    <p>
                        Hey there you wanna book us to play or just tell 
                        us something please fill the form below or write to us at 
                        thebojanglesglasgow@gmail.com
                    </p>
                </div>
                <div className={styles.contactFormContainer}>
                    <form className={styles.contactForm}>
                        <input type="text" className={styles.formInputControl} name="name" placeholder="Name" required/>
                        <input type="email" className={styles.formInputControl} name="email" placeholder="Email" required/>
                        <textarea name="message" className={styles.formTextAreaControl} placeholder="Message" required></textarea>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>Submit</button>
                        </div>    
                    </form>
                </div>
            </div>
        </>
    )
}