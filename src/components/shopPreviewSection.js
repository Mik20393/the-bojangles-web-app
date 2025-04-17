import Image from 'next/image';

import styles  from './shopPreviewSection.module.css';

export default function ShopPreview({ products }) {
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
                    <button className={styles.addToBasket}>Add To Basket</button>
                </div>
            ))}
        </div>
    )
}