import Image from 'next/image';

import styles  from './shopPreviewSection.module.css';

export default function ShopPreview({ products }) {
    return (
        <div className={styles.shopPreviewContainer}>
            <Image src={products[0].image_url} width="200" height="200"/>
            <h1>{products[0].name}</h1>
            <h1>{products[0].price}</h1>
        </div>
    )
}