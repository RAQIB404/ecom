import React from "react";
import styles from "./styles.module.css";

const ProductCard = ({product}) => {
    return(
        <div className={styles.productCard}>
            <Image
            src={product.images[0]}
            className={styles.productImage}
            alt={product.name}
            />
            <h4 className={styles.productName}>{product.name}</h4>
            <p className={styles.productPrice}>Rs. {product.price}</p>
            <button className={styles.addToCart}>Add to cart</button>
        </div>
    )
}

export default ProductCard;