import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from './slideshow.module.css';

export default function Slideshow ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };


    return (
        <div className={styles.slideshowContainer}>
            <Image 
                src={images[currentIndex]}
                className={styles.slide} 
                alt={`Slide ${currentIndex + 1}`} 
                fill={true}
                objectFit='contain' />

            <button className={styles.prevSlideBtn} onClick={prevSlide}>
                <FaChevronLeft size={24}/>
            </button>
            <button className={styles.nextSlideBtn} onClick={nextSlide}>
                <FaChevronRight size={24}/>
            </button>
        </div>
    );
};
