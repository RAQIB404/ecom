import ProductCard from '../components/ProductCard/ProductCard';
import styles from './page.module.css'

export default async function products() {
    const response = await fetch("https://access-ecom-apis.onrender.com/api/products");
    const data = await response.json()
    const products = data.data;

    return(
        <div className={styles.productPage}>
            <h1>Product Catalog</h1>
            <div className={styles.productList}>
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
}