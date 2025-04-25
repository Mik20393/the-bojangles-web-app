"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Basket from './basket';

import styles  from './shopPreviewSection.module.css';

export default function ShopPreview({ products }) {

    let localStorageBasket = localStorage.getItem('basket');
    const [basket, setBasket] = useState(localStorageBasket ? JSON.parse(localStorageBasket): []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (product, size) => {
        const newItem = { product, size, quantity: 1 };
        const existingProductIndex = basket.findIndex(item => item.product.id === product.id && item.size === size);

        if (existingProductIndex !== -1) {
            const updatedBasket = [...basket];
            updatedBasket[existingProductIndex].quantity += 1;
            setBasket(updatedBasket);
        } else {
            setBasket((prevItem) => [...prevItem, newItem]);
        }
    }

    return (
        <div className={styles.shopPreviewContainer}>
            {products.map((product) => (
                <div className={styles.productCard} key={product.id}>
                    <Image src={product.image_url} width="200" height="200"/>
                    <h2 className={styles.productDetails}>{product.name}</h2>
                    <h3 className={styles.productDetails}>£{product.price}.00</h3>
                    <select className={styles.sizeSelect}>
                        {product.sizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                    <button 
                        className={styles.addToBasket} 
                        onClick={(e) => {
                            const size = e.target.previousElementSibling.value;
                            addToBasket(product, size)}}
                    >
                        Add To Basket
                    </button>
                </div>
            ))}
            <Basket items={basket} />
        </div>
    )
}