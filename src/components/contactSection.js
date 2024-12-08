"use client"

import { useRef } from "react";
import { Toaster, toast } from 'sonner'

import styles from "./contactSection.module.css";

export default function ContactSection() {

    const formRef = useRef(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "96e2426f-85c7-4bc6-b57f-71e65ce9558d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (!result.success) {
            toast("Error occurred while sending message, please try again")
        }
        toast("Message sent successfully")
        formRef.current.reset();
        
    }

    return (
        <>
            <Toaster richColors/>
            <div className={styles.contactSectionContainer}>
                <div className={styles.contactSectionTextContainer}>
                    <p>
                        Hey there you wanna book us to play or just tell 
                        us something please fill the form below or write to us at 
                        thebojanglesglasgow@gmail.com
                    </p>
                </div>
                <div className={styles.contactFormContainer}>
                    <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
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